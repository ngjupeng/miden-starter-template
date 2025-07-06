import axios from "axios";

const apiServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export { apiServer };
