import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const SocialDynamic = ({selectedSocial, value}) => {
    return(
        <Form.Group as={Row} controlId="formSocialLink">
            <Form.Label column sm={4}>
                {selectedSocial}
            </Form.Label>
            <Col sm={8}>
                <Form.Control type="text" value={value}/>
            </Col>
        </Form.Group>
    );
};

export default SocialDynamic;