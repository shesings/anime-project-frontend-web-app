import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import { API_BASE } from "../common/constants";

export const useSearchAnime = () => {
    const [animeList, setAnimeList] = useState();

    useEffect(() => {

    }, []);

    return useCallback((query) => {
        return axios.get(`${API_BASE}/anime?filter[text]=${query}`)
        .then((response) => {
            return response;
        })
    }, []);
}