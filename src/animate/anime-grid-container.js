import React from "react";
import AnimeCard from "./anime-card.js";

import './index.css';

const AnimeGridContainer = ({animeList, title}) => {
  
        return (
          <>
            <div className="anime-section">
              <h4 className="anime-card-title">{title}</h4>
              <div className="anime-card-list">
                {animeList.map((anime) => (
                  <AnimeCard
                    key={anime.id}
                    anime={anime.attributes}
                    image={anime.attributes.posterImage}
                  />
                ))}
              </div>
            </div>
          </>
        );
};
export default AnimeGridContainer;