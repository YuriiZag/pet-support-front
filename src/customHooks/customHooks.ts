import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from 'redux-thunk'

import { RootState } from "../interfaces/authInterface";
import { Action } from 'redux';
export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, undefined, Action>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;