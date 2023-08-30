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

export const getAdress = async (requestAdress: string) => {
  try {
    const requestData = JSON.parse(requestAdress);
    requestData.methodProperties = { ...requestData.methodProperties, Limit: 100 };

    const response = await axios.post(URL, JSON.stringify(requestData));
    return response.data;
  } catch (error) {
    throw error;
  }
}