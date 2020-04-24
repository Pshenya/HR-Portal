import React from "react";
import './main-content.css';
import { ROUTES } from "../Routes/routes";
import {Link} from "react-router-dom";
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
                    <h3><Link to={ROUTES.RATINGS}>Топ HR</Link></h3>
                    <RatingBlocks/>
                </div>
            </div>
        </div>

    )
};

export default MainContent;

