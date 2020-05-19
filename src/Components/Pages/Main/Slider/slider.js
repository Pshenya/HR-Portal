import React, { Component } from 'react';

import { connect } from "react-redux";

import './slider.css';
import './slide-animations.css'

import { Carousel } from "react-bootstrap";

import { assetsActions } from "../../../../Actions";
import Loading from "../../../Loading/loading";
import ErrorIndicator from "../../../ErrorIndicator/error-indicator";

class Slider extends Component {
    componentDidMount() {
        this.props.getAllNews();
    }

    render() {
        const {newsList, loading, error} = this.props;
        if (loading)
            return (
                <div className="slider-loading">
                    <Loading/>
                </div>
            );
        if (error) return <ErrorIndicator/>;
        return (
            <div>
                <Carousel>
                    {
                        newsList.map(news => {
                            return (
                                <Carousel.Item key={news._id}>
                                    <img className="d-block w-100"
                                         src={news.imgUrl}
                                         alt="watch"/>
                                    <Carousel.Caption>
                                        <h1>{news.header}</h1>
                                        <p>{news.shortDescription}</p>
                                        <button>Read More</button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>

        );
    }
}

const mapStateToProps = ({assets}) => {
    return {
        newsList: assets.newsList,
        loading: assets.loading,
        error: assets.error
    }
};

const mapDispatchToProps = {
    getAllNews: assetsActions.getAllNews
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);