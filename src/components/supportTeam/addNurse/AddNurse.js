import React, { useState } from "react";
import { addNurse } from "../../../services/apiservices";
import { MultiSelect } from "react-multi-select-component";
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
  const [nurseData, setNurseData] = useState({
    name: "",
    email: "",
    mobile: "",
    country_code: "",
  });

  console.log("nurseData : ", nurseData);

  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setNurseData({ ...nurseData, [name]: value });
  };

  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
  ];

  const [selected, setSelected] = useState([]);

  const reqAddNurse = async () => {
    const { name, email, mobile, country_code } = nurseData;
    const res = await addNurse({
      name,
      email,
      number: mobile,
      country_code,
      doctor_ids: ["4"],
    });
    if (res) {
      console.log("res : ", res);
    }
  };

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
                    name="name"
                    value={nurseData.name}
                    onChange={handleChanges}
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
                    name="email"
                    value={nurseData.email}
                    onChange={handleChanges}
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
                    name="mobile"
                    value={nurseData.mobile}
                    onChange={handleChanges}
                  />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col className="col-sm-4">
              <InputGroup className="input-group-floting">
                <InputGroup.Text>
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </InputGroup.Text>
                <FloatingLabel label="country code">
                  <Form.Control
                    type="text"
                    className="p-4"
                    placeholder="Enter country code"
                    name="country_code"
                    value={nurseData.country_code}
                    onChange={handleChanges}
                  />
                </FloatingLabel>
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
                    name="year_of_exp"
                    value={nurseData.year_of_exp}
                    onChange={handleChanges}
                  />
                </FloatingLabel>
              </InputGroup>
            </Col>
          </Row>
        </Form>

        <Form className="mt-4">
          <Col className="col-sm-4">
            <span>Assign to Doctors</span>
            <Row>
              <MultiSelect
                className="col-sm-10"
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </Row>
          </Col>
        </Form>

        <Form className="mt-4">
          <Row>
            <Col className="col-sm-4 mb-4">
              <Button onClick={reqAddNurse} variant="primary">
                Add Nurses
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default AddNurse;
