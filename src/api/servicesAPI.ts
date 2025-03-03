import axios, { AxiosResponse } from "axios";
import { IService } from "../interfaces/servicInterface";

export const getServices = async (): Promise<
  AxiosResponse<{ service: IService[] }>
> => {
  try {
    const response = await axios.get("/services");
    return response
  } catch (error) {
    throw error;
  }
};
