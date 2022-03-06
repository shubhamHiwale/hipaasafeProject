import React, { useState } from "react";
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
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
  ];

  const [selected, setSelected] = useState([]);

  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setDoctorData({ ...docterData, [name]: value });
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
                        className="p-4"
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
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="Email">
                      <Form.Control
                        type="email"
                        className="p-4"
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
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="Mobile Number">
                      <Form.Control
                        type="tel"
                        className="p-4"
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
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="City">
                      <Form.Control
                        type="text"
                        className="p-4"
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
                      className="col-sm-10"
                      options={options}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                    />
                  </InputGroup>
                </Col>
                <Col className="col-sm-4  mb-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="Year of experience">
                      <Form.Control
                        type="text"
                        className="p-4"
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
