import React from "react";
// import { Link } from "react-router-dom";
import getTrendingAnime from "./animate-service.js";

function Animate() {
    console.log(getTrendingAnime);
    return (
        <div>
            <h1>This is index page</h1>
            <div className="col mb-6">
                <div className="card h-100">
                </div>
                <div className="cardTitle">
                    <strong>{'attr.canonicalTitle'}</strong>
                    </div>

            </div>
        </div>
    );
}
export default Animate;