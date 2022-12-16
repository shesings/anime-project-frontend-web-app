import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveCompletedAnime, saveFavoriteAnime, saveWatchlistAnime } from "../login/login-service";
import { saveCompletedAnimeThunk, saveFavoriteAnimeThunk, saveWatchListAnimeThunk } from "../login/login-thunks";
import "./index.css"

const AnimeCard = (
    {   
        animeId = '111',
        anime = {
            "slug": "chainsaw-man",
            "averageRating": "85.3",
            "canonicalTitle":  "Chainsaw Man"
        },
        image = {
            "large": "https://media.kitsu.io/anime/43806/poster_image/large-815d6008fb3b56f4291b9f0ffa05cd8f.jpeg"
        }
    }
) => {
        const dispatch = useDispatch();
        const {user} = useSelector(state =>  state.user);

        const onAnimeCardClick = (e, type, anime) => {
            e.stopPropagation();
            e.preventDefault();
            console.log(anime);
            if (type === 'favorite') {
                dispatch(saveFavoriteAnimeThunk(user._id, parseAnimeToTerserObject(anime)));
            } else if (type === 'completed') {
                dispatch(saveCompletedAnimeThunk(anime));
            } else if (type === 'watchlist') {
                dispatch(saveWatchListAnimeThunk(anime));
            }
        };

        const parseAnimeToTerserObject = (anime) => {

            return {
                animeId: animeId,
                animeTitle: anime.canonicalTitle,
                ratingScore: Math.round(anime.averageRating) || 0
            }
        }

        return (
            <div className="anime-card-container">
                <div>
                    <span title="Rating" className={Math.round(anime.averageRating) ?"notify-badge" : "notify-badge grey-m" }>&nbsp;{Math.round(anime.averageRating) ? Math.round(anime.averageRating) : "N/A"}&nbsp;</span>
                    <img src={image.small} className="card-img-top" alt="" />
                </div>
                <div className="anime-card-title">
                    <strong>{anime.canonicalTitle}</strong>
                </div>
                <Link to={`/details/${anime.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="poster-overlay">
                        <div className="poster-overlay-btn-wrapper">
                            <button onClick={(e) => onAnimeCardClick(e, 'watchlist', anime)} type="button" className="btn btn-info">
                                <i className="bi bi-list-stars"></i>
                            </button>
                            <button onClick={(e) => onAnimeCardClick(e, 'completed', anime)} type="button" className="btn btn-warning">
                                <i class="bi bi-bookmark-check"></i>
                            </button>
                            <button onClick={(e) => onAnimeCardClick(e, 'favorite', anime)} type="button" className="btn btn-danger">
                                <i className="bi bi-heart"></i>
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        );
    };
export default AnimeCard;