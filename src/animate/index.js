import React from "react";
// import { Link } from "react-router-dom";
 import {findTrendingAnime} from "../services/animate-service.js";
import AnimeGridContainer from "./anime-grid-container.js";

function Animate() {
    return (
        <div>
            <h1>Explore Animes!</h1>
            <span>
                <AnimeGridContainer title="Trending" animeList={findTrendingAnime()}/>
                {/*<AnimeGridContainer title="Upcoming" animeList={this.props.upcomingAnime}/>*/}
            </span>
        </div>
    );
}
export default Animate;