import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { addDoctor } from "../../../services/apiservices";
import { useHistory } from "react-router-dom";

import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";

const AddDoctor = () => {
  const [docterData, setDoctorData] = useState({
    name: "",
    email: "",
    city: "",
    mobile: "",
    speciality: "",
    year_of_exp: "",
  });
  console.log("doctor data : ", docterData);
  const options = [
    { label: "Cardiologist", value: 1 },
    { label: "Radiologist", value: 2 },
    { label: "Neurologist", value: 3 },
    { label: "Dentist", value: 4 },
  ];

  const [selected, setSelected] = useState([]);
  const histroy = useHistory();

  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setDoctorData({ ...docterData, [name]: value });
  };

  const reqAddDoctor = async () => {
    const { name, email, city, mobile, speciality, year_of_exp } = docterData;
    const res = await addDoctor({
      name,
      email,
      country_code: "+91",
      number: mobile,
      location: city,
      experience: year_of_exp,
      speciality_id: speciality,
      tags: selected.map(i => { return i.value }),
    });
    if (res) {
      histroy.push('main/support-dashboard');
    }
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <div classname="row">
          <div className="col-lg-10 col-sm-12">
            <div className="page-title">Add Doctor</div>
            <Form className="mt-4">
              <Row>
                <Col className="col-sm-4  mb-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="Name">
                      <Form.Control
                        type="text"
                        className=""
                        placeholder="Name"
                        onChange={handleChanges}
                        name="name"
                        value={docterData.name}
                      />
                    </FloatingLabel>
                  </InputGroup>
                </Col>
                <Col className="col-sm-4  mb-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="Email">
                      <Form.Control
                        type="email"
                        className=""
                        placeholder="Email"
                        onChange={handleChanges}
                        name="email"
                        value={docterData.email}
                      />
                    </FloatingLabel>
                  </InputGroup>
                </Col>
                <Col className="col-sm-4  mb-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      +91
                    </InputGroup.Text>
                    <FloatingLabel label="Mobile Number">
                      <Form.Control
                        type="tel"
                        className=""
                        placeholder="Mobile Number"
                        onChange={handleChanges}
                        name="mobile"
                        value={docterData.mobile}
                      />
                    </FloatingLabel>
                  </InputGroup>
                </Col>
                <Col className="col-sm-4  mb-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="City">
                      <Form.Control
                        type="text"
                        className=""
                        placeholder="City"
                        onChange={handleChanges}
                        name="city"
                        value={docterData.city}
                      />
                    </FloatingLabel>
                  </InputGroup>
                </Col>

                <Col className="col-sm-4  mb-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Select
                      className="custom-selectbox"
                      aria-label="Select Speciality"
                      onChange={handleChanges}
                      name="speciality"
                      value={docterData.speciality}
                    >
                      <option>Speciality</option>
                      <option value="1">Cardiologist</option>
                      <option value="2">Radiologist</option>
                      <option value="3">Neurologist</option>
                      <option value="4">Dentist</option>
                    </Form.Select>
                  </InputGroup>
                </Col>
                <Col className="col-sm-4  mb-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <MultiSelect
                      className="custom-multiselectbox"
                      options={options}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Tags"
                    />
                  </InputGroup>
                </Col>
                <Col className="col-sm-4  mb-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="Year of experience">
                      <Form.Control
                        type="text"
                        className=""
                        placeholder="Year of experience"
                        onChange={handleChanges}
                        name="year_of_exp"
                        value={docterData.year_of_exp}
                      />
                    </FloatingLabel>
                  </InputGroup>
                </Col>
              </Row>
            </Form>

            <Form className="mt-4">
              <Row>
                <Col className="col-sm-4  mb-4 mb-4">
                  <Button onClick={reqAddDoctor} className="w-100" variant="primary">Add Doctor</Button>
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
