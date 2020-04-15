import React from "react";
import './news.css';
import Slider from "./slider";


const News = () => {
    return (
        <div className="news-area">
            <h1 className="underline"><span>ПОПУЛЯРНОЕ</span></h1>
            <Slider/>
        </div>
    )
};

export default News;

