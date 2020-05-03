import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const SocialDynamic = ({selectedSocial}) => {

    return(
        <Form.Group as={Row} controlId="formHorizontalCompany">
            <Form.Label column sm={4}>
                {selectedSocial}
            </Form.Label>
            <Col sm={8}>
                <Form.Control type="text"/>
            </Col>
        </Form.Group>
    );
};

export default SocialDynamic;