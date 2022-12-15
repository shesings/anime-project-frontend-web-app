import axios from "axios";
const api = 'https://kitsu.io/api/edge'

// const getTrendingAnime = () => fetch(`${api}/trending/anime`, {
//     method: 'GET',
//     headers: {
//         'content-type': 'application/json'
//     }
// }).then(response => response.json())

export const findTrendingAnime = async () => {
    const response = await axios.get(`${api}/trending/anime`)
    console.log(response.data);
    return response.data;
    // return trendingAnime;
}