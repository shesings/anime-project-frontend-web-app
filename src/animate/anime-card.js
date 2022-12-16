import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

const AnimeCard = (
    {
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
        return (
            <div className="anime-card-container">
            {/* <Link to={`/details/${anime.slug}`} style={{ textDecoration: 'none' }}> */}
                <div>
                    <span title="Rating" className={Math.round(anime.averageRating) ?"notify-badge" : "notify-badge grey-m" }>&nbsp;{Math.round(anime.averageRating) ? Math.round(anime.averageRating) : "N/A"}&nbsp;</span>
                    <img src={image.small} className="card-img-top" alt="" />
                </div>
                <div>
                    <strong>{anime.canonicalTitle}</strong>
                </div>
                <Link to={`/details/${anime.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="poster-overlay">
                        <div className="poster-overlay-btn-wrapper">
                            <button type="button" className="btn btn-info">
                                <i className="bi bi-list-check"></i>
                            </button>
                            <button type="button" className="btn btn-warning">
                                <i class="bi bi-bookmark-check"></i>
                            </button>
                            <button type="button" className="btn btn-danger">
                                <i className="bi bi-person-heart"></i>
                            </button>

                        </div>
                    </div>
                </Link>
            </div>
        );
    };
export default AnimeCard;