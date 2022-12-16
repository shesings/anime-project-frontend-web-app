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

export const saveFavoriteAnime = async (uid, anime) => {
    const response = await axios.put(`${SERVER_API_BASE}/users/favorites/${uid}`, anime)
    return response.data;
}

export const saveWatchlistAnime = async (uid, anime) => {
    const response = await axios.put(`${SERVER_API_BASE}/users/watchlist/${uid}`, anime)
    return response.data;
}

export const saveCompletedAnime = async (uid, anime) => {
    const response = await axios.put(`${SERVER_API_BASE}/users/completed/${uid}`, anime)
    return response.data;
}

export const findUserById = async (uid) => {
    const response = await axios.get(`${SERVER_API_BASE}/users/${uid}`)
    console.log({response});
    return response.data;
}

export const updateUser = async (uid, user) => {
    const response = await axios.put(`${SERVER_API_BASE}/users/${uid}`, user)
    return response.data;
}