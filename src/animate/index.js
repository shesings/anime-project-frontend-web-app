import React, {useEffect} from "react";
import AnimeGridContainer from "./anime-grid-container.js";
import {useDispatch, useSelector} from "react-redux";
import {findMostPopularAnime, findTrendingAnimeThunk, findUpcomingAnime} from "../services/animate-thunks.js";
function Animate() {
    const {upcomingAnimes, trendingAnimes, popularAnimes, loading} = useSelector(state => state.animesData)
    const dispatch = useDispatch();
    
    useEffect(() => {
            dispatch(findUpcomingAnime())
            dispatch(findTrendingAnimeThunk())
            dispatch(findMostPopularAnime())
    }, [dispatch])


    return (
        <div>
            <AnimeGridContainer title="Trending Recently" animeList={trendingAnimes}/>
            <AnimeGridContainer title="Popular" animeList={popularAnimes}/>
            <AnimeGridContainer title="Upcoming" animeList={upcomingAnimes}/>
        </div>
    );
}
export default Animate;