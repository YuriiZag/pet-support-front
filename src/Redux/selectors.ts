import { RootState } from "../interfaces/authInterface";

export const getUser = (state: RootState) => state.auth.user;
export const getIsLoggedIn = (state: RootState)  => state.auth.isLoggedIn
export const getIsRefreshing = (state: RootState) => state.auth.isRefreshing
export const getUserToken = (state: RootState) => state.auth.token
export const getUserName = (state: RootState) => state.auth.userName;
export const getError = (state: RootState) => state.auth.error