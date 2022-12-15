import React, {useEffect}  from "react";
import AnimeCard from "./anime-card.js";
import {useDispatch, useSelector} from "react-redux";
import {findTrendingAnimeThunk} from "../services/animate-thunks.js";

const AnimeGridContainer = () => {
        const {animes, loading} = useSelector(state => state.animesData)
        const dispatch = useDispatch();
        console.log(animes);
        useEffect(() => {
                dispatch(findTrendingAnimeThunk())
        }, [])
        return (
            <span>
                <h2>Trending Anime</h2>
                <div className="wbdv-grid-row row row-cols-1 row-cols-md-5">
                        <ul className="list-group">
                            {
                                    animes.map(anime =>
                                        <AnimeCard
                                            key={anime.id}
                                            anime={anime.attributes}
                                            image={anime.attributes.posterImage}
                                        />
                                    )
                            }
                        </ul>
                </div>
            </span>
        );
};
export default AnimeGridContainer;