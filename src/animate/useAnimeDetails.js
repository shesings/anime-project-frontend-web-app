import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import { API_BASE } from "../common/constants";

export const useAnimeDetails = () => {
    const [animeDetails, setAnimeDetails] = useState();

    useEffect(() => {

    }, []);

    return useCallback((slug) => {
        return axios.get(`${API_BASE}/anime?fields[categories]=slug,title&filter[slug]=${slug}`)
            .then((response) => {
                return response;
            })
    }, []);
}