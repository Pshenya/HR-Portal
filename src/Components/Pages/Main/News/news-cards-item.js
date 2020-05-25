import React from "react";

import { Card, Col } from "react-bootstrap";
import { ROUTES } from "../../../../Routes/routes";
import { Link } from "react-router-dom";
import { formatDate } from "../../../Helpers/formatDate";


const NewsCardsItem = ({news}) => {
    return (
        <Col className="news-col" sm={12} md={6} lg={4}>
            <Link to={`${ROUTES.NEWS}/${news._id}`}>
                <Card className="news-card">
                    <Card.Img variant="top" src={news.imgUrl}/>
                    <Card.Body>
                        <Card.Title>
                            {news.header}
                        </Card.Title>
                        <Card.Text>
                            {news.shortDescription}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{formatDate(news.date)}</small>
                    </Card.Footer>
                </Card>
            </Link>
        </Col>

    )
};

export default NewsCardsItem;