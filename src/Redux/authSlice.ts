import { createSlice } from "@reduxjs/toolkit";
import {
  currentUser,
  loginUser,
  logOut,
  regUser,
  updateUser,
} from "./operations";
import {IReduxState } from "../interfaces/authInterface";


const initialState: IReduxState = {
  userName: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  user: null,
  error: {message: "", status: null},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(regUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(regUser.fulfilled, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.userName = null;
        state.token = null;
      })
      .addCase(regUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        if (action.payload?.user) {
          state.userName = action.payload.user.name;
          state.token = action.payload.user.token;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.userName = null;
        state.token = null;
      })
      .addCase(logOut.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        if (action.payload?.name && action.payload.token) {
          state.userName = action.payload.name;
          state.token = action.payload.token;
        }
      })
      .addCase(updateUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(currentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.userName = action.payload.name;
      })
      .addCase(currentUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
