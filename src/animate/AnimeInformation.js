import React from "react";
import "./index.css"
import {Link} from "react-router-dom";

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
                <div>
                    <div className="text-white">
                        <img src={anime.posterImage.small} alt=""/>
                    </div>
                </div>
                <div className="animeDetailsContainer">
                    <div className="animeDetails">
                        <h2>{anime.canonicalTitle}</h2>
                        {/*<div>*/}
                        {/*    <Link to={`/animeId/${this.state.id}/reviews`} style={{textDecoration: 'none'}}>*/}
                        {/*        <button className="btn btn-info" data-toggle="modal"*/}
                        {/*                data-target=".bd-example-modal-lg">Check user reviews!*/}
                        {/*        </button>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                        {anime.averageRating &&
                            <div className="caApprovals">{anime.averageRating}% Community Approvals {anime.userCount &&
                                <i className="subtext">( from {anime.userCount} Users )</i>}</div>}
                        {(anime.popularityRank || anime.ratingRank) &&
                            (<span>
                                        <div className="divider"></div>
                                        <div className="popularityWrap">
                                            {anime.popularityRank &&
                                                <div><i className="fa fa-heart"></i> #{anime.popularityRank} &nbsp;<i
                                                    className="subtext">(Popularity Rank)</i></div>}
                                            {anime.ratingRank &&
                                                <div><i className="fa fa-star"></i>{anime.ratingRank}&nbsp;<i
                                                    className="subtext">(Ratings Rank)</i></div>}
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
            {/*</div>*/}
        </div>
    );
};
export default AnimeInformation;