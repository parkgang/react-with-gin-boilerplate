import axios, { AxiosInstance } from "axios";

// prod는 server가 static file 서빙을 하기 때문에 같은 host이지만 개발환경은 webpack dev server를 사용하므로 다른 것입니다.
const host =
  process.env.NODE_ENV === "development"
    ? `http://localhost:8080`
    : window.location.origin;

const client: AxiosInstance = axios.create({
  baseURL: `${host}/api`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default client;
