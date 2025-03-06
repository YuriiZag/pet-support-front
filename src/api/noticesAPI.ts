import axios, { AxiosResponse } from "axios";
import { ICreatedNotice, INotice } from "../interfaces/noticeIntefaces";

export const fetchNoticesByCategory = async (
  category: string
): Promise<AxiosResponse<{ notices: INotice[] }>> => {
  try {
    const response = await axios.get(`/notices/category/${category}`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchNoticeById = async (
  id: string
): Promise<AxiosResponse<{ notices: INotice }>> => {
  try {
    const response = await axios.get(`/notices/id/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchNoticeByTitle = async (
  title: string
): Promise<AxiosResponse<{ notices: INotice[] }>> => {
  try {
    const response = await axios.get(`notices/title/${title}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addNotices = async (
  notice: ICreatedNotice
): Promise<AxiosResponse<{newNotice: INotice}>> => {
  try {
    const response = await axios.post(`notices/`, notice);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteNotice = async (id: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete(`notices/own/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getOwnNotices = async (): Promise<
  AxiosResponse<{ notices: INotice[] }>
> => {
  try {
    const response = await axios.get("/notices/own");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFavouriteNotices = async (): Promise<
  AxiosResponse<{ notices: INotice[] }>
> => {
  try {
    const response = await axios.get("/notices/favourites");
    return response;
  } catch (error) {
    throw error;
  }
};

export const patchFavouriteStatus = async (data: {
  id: string;
  favouriteStatus: boolean;
}): Promise<AxiosResponse<{ favouriteList: [string] }>> => {
  try {
    const response = await axios.patch(`/notices/favourites`, data);
    return response;
  } catch (error) {
    throw error;
  }
};
