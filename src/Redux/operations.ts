import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../interfaces/authInterface";
import {
  ICustomError,
  ILoginCredentials,
  ILoginResponse,
  IRegisterCredentials,
  IUser,
} from "../interfaces/authInterface";
import { errorToastEmitter, succesToastEmitter } from "../Components/Toaster/toaste";

axios.defaults.baseURL = "http://localhost:3000/";

const auth = {
  set(token: string): void {
    axios.defaults.headers.common.auth = `Bearer ${token}`;
  },
  unset(): void {
    axios.defaults.headers.common.auth = "";
  },
};

export const regUser = createAsyncThunk<
  Partial<IUser>,
  IRegisterCredentials,
  { rejectValue: ICustomError }
>("signup", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post("user/register", credentials);

    return response.data;
  } catch (error) {
    let customError: ICustomError = { message: "", status: null };
    if (error instanceof AxiosError) {
      if (error.response && error.response.status === 409) {
        customError = {
          message: "User with this email already exist",
          status: 409,
        };
      } else if (error.response) {
        customError = error.response.data;
      }
    }
    return thunkAPI.rejectWithValue(customError);
  }
});

export const loginUser = createAsyncThunk<
  ILoginResponse,
  ILoginCredentials,
  { rejectValue: ICustomError }
>("login", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post("user/login", credentials);
    auth.set(response.data.user.token);

    return response.data;
  } catch (error) {
    let customError: ICustomError = { message: "", status: null };
    if (error instanceof AxiosError && error.response) {
      switch (error.response.status) {
        case 401:
          customError = { message: "Wrong password", status: 401 };

          break;
        case 404:
          customError = {
            message: `User with email ${credentials.email} does not exist`,
            status: 404,
          };
          break;
        default:
          customError = error.response.data;
          break;
      }
    }
    return thunkAPI.rejectWithValue(customError);
  }
});

export const logOut = createAsyncThunk<
  { message: string },
  undefined,
  { rejectValue: AxiosError }
>("logOut", async (_, thunkAPI) => {
  try {
    const response = await axios.patch("user/logout");
    auth.unset();
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
});

export const updateUser = createAsyncThunk<
  Partial<IUser>,
  Partial<IUser>,
  { rejectValue: AxiosError }
>("update", async (credentials, thunkAPI) => {
  try {
    const response = await axios.patch("user/update", credentials);
    succesToastEmitter("user updated succesfully")
    return response.data.user;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      errorToastEmitter(error.response?.data.message)
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
});
export const currentUser = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: unknown }
>("current", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }
  try {
    auth.set(persistedToken);
    const response = await axios.get("user/current");
    return response.data.user;
  
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
});
