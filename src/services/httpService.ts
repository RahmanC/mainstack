import axios from "axios";

axios.interceptors.request.use((config: any) => {
    return config;
  });

  axios.interceptors.response.use(null, (error: any) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
  
    if (!expectedError) console.log(error);
  
    return Promise.reject(error);
  });

  const appBaseUrl = (baseUrl: string) => {
    axios.defaults.baseURL = baseUrl;
  };

  const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    appBaseUrl,
  };

  export default httpService
  export { appBaseUrl}