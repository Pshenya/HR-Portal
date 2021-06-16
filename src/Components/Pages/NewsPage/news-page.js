import React, { Component } from "react";
import './news-page.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { assetsActions } from "../../../Actions";
import { ROUTES } from "../../../Routes/routes";
import Loading from "../../Loading/loading";
import ErrorIndicator from "../../ErrorIndicator/error-indicator";
import VacanciesPage from "../VacanciesPage/vacancies-page";

const NewsPage = ({postData}) => {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const date = new Date(Date.parse(postData.date));
    const newsDate = `${date.getDate()} ${months[date.getMonth() + 1]} ${date.getFullYear()}`;
    return (
        <div className="post-content post-cover">
            <div className="post-content-container">
                <div className="cover" style={{backgroundImage: `url(${postData.imgUrl})`}}></div>
                <div className="post-main-content">
                    <article id={postData._id} style={{display: 'block'}}>
                        <header className="post-headline">
                            <div className="post-headline-content headline-cover">
                                <h1 className="post-headline-title">{postData.header}</h1>
                                <span className="post-headline-intro">{postData.shortDescription}</span>
                            </div>
                            <div className="post-headline-info">
                                <span className="post-headline-info_date">{newsDate}</span>
                            </div>
                        </header>
                        <div className="article-body">
                            <div className="article-text">
                                {postData.text}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
};

class NewsPageContainer extends Component {
    componentDidMount() {
        let post = this.props.match.params.post;
        if ( !post) {
            this.props.history.push(ROUTES.MAIN);
        }
        this.props.getPost(post);

    }

    render() {
        const {postData, loading, error} = this.props;
        if (loading) {
            return (
                <div className="page-loading">
                    <Loading/>
                </div>
            );
        }
        else if(error) return <ErrorIndicator/>
        else {
            return <NewsPage postData={postData}/>
        }
    }
}

const mapStateToProps = ({assets}) => {
    return {
        postData: assets.postData,
        loading: assets.loading,
        error: assets.error
    };
};

const mapDispatchToProps = {
    getPost: assetsActions.getNewsById
};

withRouter(NewsPageContainer);

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageContainer);

