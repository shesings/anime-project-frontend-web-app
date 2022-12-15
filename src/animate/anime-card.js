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
            <Link to={`/details/${anime.slug}`} style={{ textDecoration: 'none' }}>
            <span>
                <div className="col md-5 sm-3">
                    <div className="card h-100">
                        <span title="Rating" className={Math.round(anime.averageRating) ?"notify-badge" : "notify-badge grey-m" }>&nbsp;{Math.round(anime.averageRating) ? Math.round(anime.averageRating) : "N/A"}&nbsp;</span>
                        <img src={image.large} className="card-img-top" alt="" />
                    </div>
                    <div className="cardTitle"><strong>{anime.canonicalTitle}</strong></div>
                    <div>&nbsp;</div>
                </div>
            </span>
            </Link>
        );
    };
export default AnimeCard;