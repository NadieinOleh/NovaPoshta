import { RequestData } from "../types/RequestData"
import { API_KEY } from "./variables"

export const getRequestData = (ttn: string | number): string => {
  const data: RequestData = {
    apiKey: API_KEY,
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: ttn,
        }
      ]
    }
  }
  return JSON.stringify(data)
}