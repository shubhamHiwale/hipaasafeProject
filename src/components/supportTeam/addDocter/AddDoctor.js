import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddDoctor = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <div className="add-doctor">Add Doctor</div>
        <Form className="mt-4">
          <Row>
            <Col className="col-sm-4 mb-4">
              <Form.Control className="p-4" placeholder="First name" />
            </Col>
            <Col className="col-sm-4 ">
              <Form.Control className="p-4" placeholder="Last name" />
            </Col>
            <Col className="col-sm-4">
              <Form.Control className="p-4" placeholder="Mobile Number" />
            </Col>
            <Col className="col-sm-4">
              <Form.Control className="p-4" placeholder="City" />
            </Col>
            <Col className="col-sm-4">
              <Form.Control className="p-4" placeholder="Year of experience" />
            </Col>
          </Row>
        </Form>

        <Form className="mt-4">
          <Row>
            <Col className="col-sm-4 mb-4">
              <Button variant="primary">Add Doctor</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default AddDoctor;
