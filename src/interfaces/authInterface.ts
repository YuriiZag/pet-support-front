export interface IUser {
  _id: string;
  email: string;
  name: string;
  token: string;
  password?: string;
  city: string;
  phoneNumber: string;
  avatar: string;
  birthday: string;
  petId: string[];
  favouriteNoticeId: string[];
  ownNoticeId: string[];
}

export interface IReduxState {
  userName: string | null,
  token: string | null,
  isLoggedIn: boolean,
  isRefreshing: boolean,
  user: IUser | null,
  error: ICustomError | any,
}
export interface RootState {
  auth: IReduxState
}


export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  email: string;
  userName: string;
  user?: IUser
}

export interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
  city: string;
  phoneNumber: string;
}

export interface ICustomError {
  message: string;
  status: number | null;
}


