import axios, { AxiosResponse } from "axios";
import { ICreatedPet, IPet } from "../interfaces/petInterface";

export const fetchPets = async (): Promise<AxiosResponse<{ pets: IPet[] }>> => {
  try {
    const response = await axios.get("/pets");
    return response;
  } catch (error) {
    throw error;
  }
};

export const addPets = async (pet: ICreatedPet): Promise<AxiosResponse> => {
  try {
    const response = await axios.post("/pets", pet);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deletePet = async (id: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete(`/pets/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
