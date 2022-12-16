import axios from "axios";
import { SERVER_API_BASE } from "../common/constants";

export const signupUser = async (loginCredentials) => {
    const response = await axios.post(`${SERVER_API_BASE}/signup`, loginCredentials)
    return response.data;
}


export const loginUser = async (loginCredentials) => {
    const response = await axios.post(`${SERVER_API_BASE}/login`, loginCredentials)
    return response.data;
}
