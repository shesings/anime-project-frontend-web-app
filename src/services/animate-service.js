import axios from "axios";
const api = 'https://kitsu.io/api/edge'

export const findTrendingAnime = async () => {
    const response = await axios.get(`${api}/trending/anime`)
    // console.log(response.data.data);
    return response.data.data;
}

export const findUpcomingAnime = async () => {
    const response = await axios.get(`${api}/anime?filter[status]=upcoming&page[limit]=5&sort=-user_count`)
    return response.data.data;
}
//https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=5&sort=-user_count
//https://kitsu.io/api/edge/anime?filter[status]=upcoming&page[limit]=5&sort=-user_count
//https://kitsu.io/api/edge/anime?page[limit]=5&sort=-user_count

export const findMostPopularAnime = async () => {
    const response = await axios.get(`${api}/anime?page[limit]=5&sort=-user_count`)
    return response.data.data;
}