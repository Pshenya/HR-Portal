import React from "react";

import { Card, Col } from "react-bootstrap";


const NewsCardsItem = ({news}) => {
    const months = ['января', 'февраля', 'марта', 'апреля','мая', 'июня', 'июля', 'августа','сентября', 'октября', 'ноября', 'декабря'];
    const date = new Date(Date.parse(news.date));
    const newsDate = `${date.getDate()} ${months[date.getMonth()+1]} ${date.getFullYear()}`;
    return (
        <Col className="news-col" sm={12} md={6} lg={4}>
            <Card className="news-card">
                <Card.Img variant="top" src={news.imgUrl}/>
                <Card.Body>
                    <Card.Title>{news.header}</Card.Title>
                    <Card.Text>
                        {news.shortDescription}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{newsDate}</small>
                </Card.Footer>
            </Card>
        </Col>

    )
};

export default NewsCardsItem;