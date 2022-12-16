import React from "react";
import "./index.css"

const AnimeInformation = (
    {
        anime = {
            "slug": "chainsaw-man",
            "averageRating": "85.3",
            "canonicalTitle": "Chainsaw Man",
            "coverImage": "https://media.kitsu.io/anime/43806/poster_image/large-815d6008fb3b56f4291b9f0ffa05cd8f.jpeg"
        },
        image = {
            "coverImage": "https://media.kitsu.io/anime/43078/cover_image/b2d3852ffbf3b084b30dbeb4461b5564.jpg"
        }
    }
) => {
    return (
        <div>
            {/*<div className="rows">*/}
            <div>
                <img src={image} className="card-img" alt=""/>
            </div>
            <div className="animeDetailsContainer card">
                <div className="animeDetails row">
                    <div className="col-md-4">
                        <div className="text-white">
                            <img src={anime.posterImage.small} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h2>{anime.canonicalTitle}</h2>
                        {anime.averageRating &&
                            <div className="caApprovals">
                                {anime.averageRating}% Community Approvals
                            </div>}
                        {(anime.popularityRank || anime.ratingRank) &&
                            (<span>
                                        <div className="divider"></div>
                                        <div className="popularityWrap">
                                            {anime.popularityRank &&
                                                <div>
                                                    <i className="bi bi-heart-fill text-danger"></i>
                                                    &nbsp;#{anime.popularityRank} &nbsp;
                                                    <i className="subtext">(Popularity Rank)</i>
                                                </div>
                                            }
                                            {anime.ratingRank &&
                                                <div>
                                                    <i className="bi bi-star-fill text-warning"> </i> {anime.ratingRank} &nbsp;
                                                    <i className="subtext">(Ratings Rank)</i>
                                                </div>
                                            }
                                        </div>
                                        <div className="divider"></div>
                            </span>)
                        }
                        <div className="synopsis">{anime.synopsis}</div>
                        {anime.ageRating &&
                            <div><strong>Age Rating:</strong> {anime.ageRating ? anime.ageRating : "N/A"}</div>}
                        <div><strong>Episodes:</strong> {anime.episodeCount ? anime.episodeCount : "N/A"}</div>
                        <div><strong>Status:</strong> {anime.status ? anime.status : "N/A"}</div>
                    </div>
                </div>
            </div>
            {/*</div>*/}
        </div>
    );
};
export default AnimeInformation;