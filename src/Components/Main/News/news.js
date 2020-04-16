import React from "react";
import './news.css';
import Slider from "./slider";
import RatingBlocks from "./rating-blocks";


const News = () => {
    return (
        <React.Fragment>
            <h1 className="underline"><span>Популярное</span></h1>
            <div className="news-area">
                <Slider/>
                <div className="rating">
                    <h3><a href="/best-hr">Топ HR</a></h3>
                    <RatingBlocks/>
                </div>
            </div>
        </React.Fragment>
    )
};

export default News;

