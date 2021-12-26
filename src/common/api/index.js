import axios from "axios";

const BASE_URL = "http://13.209.48.13:8080";

export const getApi = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

getApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const resp = error.response;
    try {
      console.warn(`=========== AXIOS ERROR [${resp?.status}] ===========`);
      console.warn("uri           : " + resp?.config?.url);
      console.warn("method        : " + resp?.config?.method);
      if (resp?.config?.data) {
        console.warn(
          "request data  : \n" +
            JSON.stringify(JSON.parse(resp?.config?.data), null, 2)
        );
      }
      console.warn(
        "Response ==============================\n" +
          JSON.stringify(resp.data, null, 2)
      );
    } catch (e) {}
  }
);
