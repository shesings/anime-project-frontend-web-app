import React, {useEffect, useState}  from "react";
import AnimeCard from "./anime-card";
import {useParams} from "react-router";
import {useAnimeDetails} from "./useAnimeDetails";
import AnimeInformation from "./AnimeInformation";

const AnimeDetails = ({title}) => {
    const {query} = useParams();
    const [animeDetails, setAnimeDetails] = useState();
    const animeInformation = useAnimeDetails();

    useEffect(() => {
        animeDetailsApi(query)
    }, [query]);

    const animeDetailsApi = (query) => {
        animeInformation(query).then((response) => {
            console.log(response.data.data);
            setAnimeDetails(response.data.data);
        });
    }

    const renderAnimeDetails = ({attributes}) => {
        return <AnimeInformation anime={attributes} image={attributes.coverImage.original}/>
    }

    return(
        <span>
                <h1>{title}</h1>
                <div className="wbdv-grid-row row">
                    {animeDetails && animeDetails.map((anime) => renderAnimeDetails(anime))}
                </div>
        </span>
    );
};
export default AnimeDetails;