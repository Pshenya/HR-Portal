import React from "react";

import { Card, Col, Row } from "react-bootstrap";
import watch from "../../../../assets/img/watch.png";
import CardDeck from "react-bootstrap/CardDeck";

const NewsCardsItem = ({news}) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <Card className="news-card">
                <Card.Img variant="top" src="https://i.ibb.co/hZnxBzq/image.png"/>
                <Card.Body>
                    <Card.Title>{news.header}</Card.Title>
                    <Card.Text>
                        {news.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">16 апреля 2020</small>
                </Card.Footer>
            </Card>
        </Col>

    )
};

export default NewsCardsItem;