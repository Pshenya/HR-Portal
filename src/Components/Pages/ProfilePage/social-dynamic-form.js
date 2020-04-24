import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const SocialDynamic = () => {
    return(
        <Form.Group as={Row} controlId="formHorizontalCompany">
            <Form.Label column sm={4}>
                Ссылка
            </Form.Label>
            <Col sm={8}>
                <Form.Control type="text"/>
            </Col>
        </Form.Group>
    );
};

export default SocialDynamic;