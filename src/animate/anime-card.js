import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

const AnimeCard = () => {
        let attr = this.props.attr;
        return (
            <Link to={`/details/${attr.slug}`} style={{ textDecoration: 'none' }}>
            <span>
                <div className="col mb-6">
                    <div class="card h-100">
                        <span title="RAating" class={Math.round(attr.averageRating) ?"notify-badge" : "notify-badge grey-m" }>&nbsp;{Math.round(attr.averageRating) ? Math.round(attr.averageRating) : "N/A"}&nbsp;</span>
                        <img src={attr.posterImage.large} class="card-img-top" alt="" />
                    </div>
                    <div className="cardTitle"><strong>{attr.canonicalTitle}</strong></div>
                    <div>&nbsp;</div>
                </div>
            </span>
            </Link>
        );
    };
export default AnimeCard;