import React from "react";
import './news.css';
import Slider from "./slider";
import RatingBlocks from "./rating-blocks";
import NewsCards from "./news-cards";


const MainContent = () => {
    return (
        <div className="width-control">
            <div className="main-content">
                <Slider/>
                <NewsCards/>
            </div>
            <div className="aside">
                <div className="rating">
                    <h3><a href="/best-hr">Топ HR</a></h3>
                    <RatingBlocks/>
                </div>
            </div>
        </div>

    )
};

export default MainContent;

