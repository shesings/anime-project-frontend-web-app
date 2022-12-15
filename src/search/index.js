import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AnimeCard from "../animate/anime-card";
import { useSearchAnime } from "./useSearchAnime";
const Search = ({title}) => {
    const {query} = useParams();
    const navigate = useNavigate();
    const [searchedAnimes, setSearchedAnimes] = useState();
    const [searchInput, setSearchInput] = useState();
    const searchAnime = useSearchAnime();

    useEffect(() => {
        searchAnimeApi(query);
    }, [query]);
    

    const onSearch = useCallback(() => {
        navigate(`/search/${searchInput}`);
    }, [searchInput, query]);

    const searchAnimeApi = (query) => {
        searchAnime(query).then((response) => {
            setSearchedAnimes(response.data.data);
        });
    }

    const renderAnimeCard = ({attributes}) => {
        return <AnimeCard   anime={attributes} image={attributes.posterImage} />
    }

    return (
        <div>
            <h1>{title}</h1>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='What anime are you looking for ?'/>
            <button onClick={onSearch}>
                Search
            </button>
            <div className="wbdv-grid-row row row-cols-lg-5 row-cols-md-3 row-cols-sm-2">
               {searchedAnimes && searchedAnimes.map((anime) => renderAnimeCard(anime))}
            </div>
        </div>
    );
};
export default Search;