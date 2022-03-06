import React from "react";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const AddDoctor = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <div classname="row">
          <div className="col-lg-10 col-sm-12">
            <div className="page-title">Add Doctor</div>
            <Form className="mt-4">
              <Row>
                <Col className="col-sm-4 mb-4">
                  {/* <Form.Control className="p-4" placeholder="First name" /> */}
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FormControl
                      className="p-4"
                      placeholder="Name"
                      aria-label="name"
                      aria-describedby="Name"
                    />
                  </InputGroup>
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
                  <Form.Control
                    className="p-4"
                    placeholder="Year of experience"
                  />
                </Col>
              </Row>
            </Form>

            <Form className="mt-4">
              <Row>
                <Col className="col-sm-4 mb-4">
                  <Button className="w-100" variant="primary">
                    Add Doctor
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
