import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4003",
  withCredentials: true,
});

export function postRequest(
  endpoint: string,
  body: any,
  header?: any
): Promise<any> {
  return axiosInstance.post(endpoint, body, header);
}

export function getRequest(endpoint: string, params?: any): Promise<any> {
  return axiosInstance.get(endpoint, params);
}

export function putRequest(
  endpoint: string,
  body: any,
  header?: any
): Promise<any> {
  return axiosInstance.put(endpoint, body, header);
}

export function deleteRequest(endpoint: string, params?: any): Promise<any> {
  return axiosInstance.delete(endpoint, params);
}
