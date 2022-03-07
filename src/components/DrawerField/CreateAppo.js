import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";

const CreateAppo = () => {
  const [appoData, setAppoData] = useState({
    doctor_name: "",
    email: "",
    patient_name: "",
    email: "",
    mobile: "",
    date: "",
  });

  return (
    <>
      <div className="position-relative dwer-container">
        <Form>
          <Col className="py-3">
            <span className="font-weight-bold text-black">
              Create An Appointment
            </span>
          </Col>
          <Col className="">
            <Form.Label>Choose doctor</Form.Label>
            <InputGroup className="input-group-floting">
              <InputGroup.Text>
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </InputGroup.Text>
              {/* <FloatingLabel label="Name"> */}
              <Form.Select
                type="text"
                className="p-3"
                placeholder="Name"
                name="name"
                value={appoData.doctor_name}
              >
                <option>demo 1</option>
                <option>demo 2</option>
                <option>demo 3</option>
                <option>demo 4</option>
                <option>demo 5</option>
              </Form.Select>
              {/* </FloatingLabel> */}
            </InputGroup>
          </Col>

          <Col className="mt-4">
            <Form.Label>Appointment Details</Form.Label>
            <InputGroup className="input-group-floting">
              <InputGroup.Text>
                <i className="fa fa-user-o" aria-hidden="true"></i>
              </InputGroup.Text>
              <FloatingLabel label="Patient Name">
                <Form.Control
                  type="text"
                  className="p-4"
                  placeholder="Patient Name"
                  name="patient_name"
                  value={appoData.patient_name}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>

          <Col className="mt-4">
            <InputGroup className="input-group-floting">
              <InputGroup.Text>
                <i className="fa fa-user-o" aria-hidden="true"></i>
              </InputGroup.Text>
              <FloatingLabel label="Email">
                <Form.Control
                  type="text"
                  className="p-4"
                  placeholder="Email"
                  name="email"
                  value={appoData.email}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>

          <Col className="mt-4">
            <InputGroup className="input-group-floting">
              <InputGroup.Text>
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </InputGroup.Text>
              <FloatingLabel label="Mobile Number">
                <Form.Control
                  type="text"
                  className="p-4"
                  placeholder="Mobile Number"
                  name="mobile"
                  value={appoData.mobile}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>

          <Col className="mt-4">
            <InputGroup className="input-group-floting">
              <InputGroup.Text>
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </InputGroup.Text>
              <FloatingLabel label="Date">
                <Form.Control
                  type="text"
                  className="p-4"
                  placeholder="Date"
                  name="date"
                  value={appoData.date}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>

          <Col className="mt-4">
            <InputGroup className="input-group-floting">
              <InputGroup.Text>
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </InputGroup.Text>
              <FloatingLabel label="Time">
                <Form.Control
                  type="text"
                  className="p-4"
                  placeholder="Time"
                  name="time"
                  value={appoData.time}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>

          <Col className="position-absolute fixed-bottom pb-2">
            <Button className="w-100 p-3" variant="primary">
              Create an Appointment
            </Button>
          </Col>
        </Form>
      </div>
    </>
  );
};

export default CreateAppo;
