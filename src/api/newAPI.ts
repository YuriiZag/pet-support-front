import axios, { AxiosResponse } from "axios"
import { INews } from "../interfaces/newsInterface";

export const  getNews = async (): Promise<AxiosResponse<{news: INews[]}>>  => {
    try {
        const response = await axios.get("/news")
        
        return response
    } catch (error) {
        throw error
    }
}