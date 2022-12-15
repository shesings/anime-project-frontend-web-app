import React, {useEffect}  from "react";
import AnimeCard from "./anime-card.js";
import {useDispatch, useSelector} from "react-redux";
import {findMostPopularAnime, findTrendingAnimeThunk, findUpcomingAnime} from "../services/animate-thunks.js";

const AnimeGridContainer = () => {
        const {upcomingAnimes, trendingAnimes, loading} = useSelector(state => {console.log(state); return state.animesData})
        const dispatch = useDispatch();
        // console.log(animes);
        useEffect(() => {
                dispatch(findUpcomingAnime())
                dispatch(findTrendingAnimeThunk())
                dispatch(findMostPopularAnime())
        }, [dispatch])
        return (
            <span>
                <h2>Trending Anime</h2>
                <div className="wbdv-grid-row row row-cols-lg-5 row-cols-md-3 row-cols-sm-2">
                            {
                                 trendingAnimes.map(anime =>
                                        <AnimeCard
                                            key={anime.id}
                                            anime={anime.attributes}
                                            image={anime.attributes.posterImage}
                                        />
                                    )
                            }

                </div>
                    <h2>Upcoming Anime</h2>
                <div className="wbdv-grid-row row row-cols-lg-5 row-cols-md-3 row-cols-sm-2">
                            {
                                    upcomingAnimes.map(anime =>
                                        <AnimeCard
                                            key={anime.id}
                                            anime={anime.attributes}
                                            image={anime.attributes.posterImage}
                                        />
                                    )
                            }

                </div>
            </span>
        );
};
export default AnimeGridContainer;