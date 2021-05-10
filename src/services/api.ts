import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const setBearerTokenToAuthorizationHeaders = (token: string | null): void => {
  api.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;
}