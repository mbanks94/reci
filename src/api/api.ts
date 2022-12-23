import Axios from "axios";
import { config } from "../config/config";

export const api = Axios.create({
    baseURL: config.API_BASE_URL
});
