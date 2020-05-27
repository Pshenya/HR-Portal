import React, { Component } from 'react';
import { connect } from "react-redux";
import './news-cards.css';

import NewsCardsItem from "./news-cards-item";
import CardDeck from "react-bootstrap/CardDeck";
import { Row } from 'react-bootstrap';
import Loading from "../../../Loading/loading";
import ErrorIndicator from "../../../ErrorIndicator/error-indicator";
import { assetsActions } from "../../../../Actions";


const NewsCards = ({newsList}) => {
    return (
        <div className="news-container">
            <CardDeck>
                <Row>
                    {
                        newsList.map(news => {
                            return <NewsCardsItem key={news._id} news={news}/>
                        })
                    }
                </Row>
            </CardDeck>
        </div>
    );
}


class NewsCardsContainer extends Component {
    componentDidMount() {
        this.props.getAllNews();
    }

    render() {
        const {newsList, loading, error} = this.props;
        if (loading)
            return (
                <div className="vacPage-loading">
                    <Loading/>
                </div>
            );
        if (error) return <ErrorIndicator/>;
        return <NewsCards newsList={newsList}/>
    }
};


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


export default connect(mapStateToProps, mapDispatchToProps)(NewsCardsContainer);