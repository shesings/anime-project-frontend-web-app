import React, {useEffect}  from "react";
import AnimeCard from "./anime-card.js";
import {useDispatch, useSelector} from "react-redux";
import {findTrendingAnimeThunk} from "../services/animate-thunks.js";

const AnimeGridContainer = () => {
        // const {animes, loading} = useSelector(state => state.animesData)
        const dispatch = useDispatch();
        useEffect(() => {
                dispatch(findTrendingAnimeThunk())
        }, [])
        return (
            <span>
                <h2>{this.props.title}</h2>
                <div className="wbdv-grid-row row row-cols-1 row-cols-md-5">
                    {this.props.animeList.map((trendingAnime) => {
                        return <AnimeCard animeId={trendingAnime} attr={trendingAnime.attributes} />
                    })}
                </div>
            </span>
        );
};
export default AnimeGridContainer;