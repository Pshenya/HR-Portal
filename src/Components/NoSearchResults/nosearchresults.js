import React from "react";

import './nosearchresults.css';

const NoSearchResults = ({setting}) => {
    console.log(setting)
    return(
        <div className="no-search-results-container">
            <div className="no-search-results-content">
                <i style={{fontSize: '40px', color: '#2bbbad', margin: '0 auto'}} className="far fa-frown"></i>
                <div>На жаль, за вашими умовами пошуку {setting} не знайдено</div>
            </div>
        </div>
    )
};

export default NoSearchResults;
