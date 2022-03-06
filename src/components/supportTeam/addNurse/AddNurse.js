import React from "react";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";

const AddNurse = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <div className="page-title">Add Nurses</div>
        <Form className="mt-4">
          <span>Personal Details</span>
          <Row>
            <Col className="col-sm-4 mb-4">
              <InputGroup className="input-group-floting">
                <InputGroup.Text>
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </InputGroup.Text>
                <FloatingLabel label="Name">
                  <Form.Control
                    type="text"
                    className="p-4"
                    placeholder="Name"
                  />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col className="col-sm-4 ">
              <InputGroup className="input-group-floting">
                <InputGroup.Text>
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </InputGroup.Text>
                <FloatingLabel label="Email">
                  <Form.Control
                    type="email"
                    className="p-4"
                    placeholder="Email"
                  />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col className="col-sm-4">
              <InputGroup className="input-group-floting">
                <InputGroup.Text>
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </InputGroup.Text>
                <FloatingLabel label="Mobile Number">
                  <Form.Control
                    type="tel"
                    className="p-4"
                    placeholder="Mobile Number"
                  />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col className="col-sm-4">
              <InputGroup className="input-group-floting">
                <InputGroup.Text>
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Select
                  className="custom-selectbox"
                  aria-label="Select Speciality"
                >
                  <option>City</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Select>
              </InputGroup>
            </Col>
            <Col className="col-sm-4">
              <InputGroup className="input-group-floting">
                <InputGroup.Text>
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </InputGroup.Text>
                <FloatingLabel label="Year of experience">
                  <Form.Control
                    type="text"
                    className="p-4"
                    placeholder="Year of experience"
                  />
                </FloatingLabel>
              </InputGroup>
            </Col>
          </Row>
        </Form>

        <Form className="mt-4">
          <span>Assign to Doctors</span>
          <Row>
            <Col className="col-sm-4 mb-4">
              <InputGroup className="input-group-floting">
                <InputGroup.Text>
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Select
                  className="custom-selectbox"
                  aria-label="Select Speciality"
                >
                  <option>Select Doctor</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Select>
              </InputGroup>
            </Col>
          </Row>
        </Form>

        <Form className="mt-4">
          <Row>
            <Col className="col-sm-4 mb-4">
              <Button variant="primary">Add Nurses</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default AddNurse;
