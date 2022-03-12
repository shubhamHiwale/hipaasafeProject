import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  FloatingLabel,
  Card,
  ListGroup,
} from "react-bootstrap";

const Patient = ({ closeDrawer }) => {
  const [patientData, setPatientData] = useState({
    doctor_name: "",
    email: "",
    patient_name: "",
    email: "",
    mobile: "",
    date: "",
  });

  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setPatientData({ ...patientData, [name]: value });
  };

  return (
    <>
      <div className="position-relative dwer-container">
        <Form>
          <Col className="py-3">
            <span className="font-weight-bold text-black">Patient Details</span>
            <span onClick={closeDrawer} className="btn-dwer-close">
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
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
                  value={patientData.patient_name}
                  onChange={handleChanges}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>

          <Col className="">
            <Tabs>
              <TabList className="d-flex tabs-header">
                <Tab className="list-group-item">Doctors List</Tab>
                <Tab className="list-group-item">Nurses List</Tab>
              </TabList>

              <TabPanel className="custom-tab-panel">
                <h5>Hello</h5>
              </TabPanel>
              <TabPanel className="custom-tab-panel">
                <h5>World</h5>
              </TabPanel>
            </Tabs>
          </Col>

          <Col className="position-absolute fixed-bottom pb-2">
            <InputGroup className="mb-2">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary px-3" id="button-addon2">
                x
              </Button>
            </InputGroup>

            <InputGroup className="mb-2">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary px-3" id="button-addon2">
                x
              </Button>
            </InputGroup>
          </Col>

          <Col className="position-absolute fixed-bottom pb-2">
            {/* <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card> */}
          </Col>
        </Form>
      </div>
    </>
  );
};

export default Patient;
