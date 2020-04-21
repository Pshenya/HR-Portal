import React, { Component } from 'react';
import './news-cards.css';

import CardDeck from "react-bootstrap/CardDeck";
import { Card, Col, Row } from 'react-bootstrap';
import watch from "../../assets/img/watch.png";
import bg from "../../assets/img/for.jpg";
import forest from "../../assets/img/forest.jpg";


class NewsCards extends Component {
    render() {
        return (
            <div className="news-container">
                <CardDeck>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card>
                                <Card.Img variant="top" src={watch}/>
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">16 апреля 2020</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card>
                                <Card.Img variant="top" src={bg}/>
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">16 апреля 2020</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <Card>
                                <Card.Img variant="top" src={forest}/>
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">16 апреля 2020</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Card>
                                <Card.Img variant="top" src={watch}/>
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">16 апреля 2020</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <Card.Img variant="top" src={bg}/>
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">16 апреля 2020</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <Card.Img variant="top" src={forest}/>
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">16 апреля 2020</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </CardDeck>
            </div>
        );
    }
}

export default NewsCards;