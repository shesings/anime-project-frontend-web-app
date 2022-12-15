import axios from "axios";
const api = 'https://kitsu.io/api/edge'

export const findTrendingAnime = async () => {
    const response = await axios.get(`${api}/trending/anime`)
    // console.log(response.data.data);
    return response.data.data;
}