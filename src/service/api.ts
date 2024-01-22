import axios from "axios";

const resolveApiUrl = () => "https://dummyjson.com/";

const headers = {
  "Content-Type": "application/json"
};

const apiService = axios.create({
  baseURL: resolveApiUrl(),
  headers
});

const requestHandler = async (request: any) => {
  return request;
};

const responseHandler = (response: any) => {
  return response;
};

const errorHandler = async (error: any) => {
  return Promise.reject(error);
};

apiService.interceptors.request.use(
  (request: any) => requestHandler(request),
  (error: any) => errorHandler(error)
);

apiService.interceptors.response.use(
  (response: any) => responseHandler(response),
  (error: any) => errorHandler(error)
);


export {apiService};