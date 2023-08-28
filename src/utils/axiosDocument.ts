import axios from "axios";
import { URL } from "./variables";

export const getDocument = async (requestData: string) => {
  try {
    const response = await axios.post(URL, requestData);
    return response.data;
  } catch (error) {
    throw error;
  }
}