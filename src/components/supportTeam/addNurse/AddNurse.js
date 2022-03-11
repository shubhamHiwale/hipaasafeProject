import React, { useState, useEffect } from "react";
import { addNurse } from "../../../services/apiservices";
import { MultiSelect } from "react-multi-select-component";
import { getDoctors, getProfileById } from '../../../services/apiservices'
import { useHistory, useLocation } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";

const AddNurse = () => {
  const [options, setOptions] = useState(null);
  const histroy = useHistory();
  const location = useLocation();
  const [nurseData, setNurseData] = useState({
    name: "",
    email: "",
    mobile: "",
    country_code: "",
    city: "",
    year_of_exp: ""
  });

  useEffect(() => {
    getDoctorsAPI()
    if (location?.state?.nurse) {
      getProfileByIdAPI(location?.state?.nurse?.uid)
    }
  }, [])

  const getProfileByIdAPI = async (uid) => {
    let profile = await getProfileById(uid);
    console.log("profile", profile.data);
    setNurseData({
      name: profile?.data?.name,
      email: profile?.data?.email,
      mobile: profile?.data?.number,
      country_code: profile?.data?.country_code,
      city: profile?.data?.metadata?.location,
      year_of_exp: profile?.data?.metadata?.experience
    });
  }

  const getDoctorsAPI = async () => {
    let res = await getDoctors();
    if (res?.success) {
      setOptions(res.data?.rows?.map((dt) => { return { label: dt.name, value: dt.uid }; }))
    }
  }

  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setNurseData({ ...nurseData, [name]: value });
  };

  const [selected, setSelected] = useState([]);

  const reqAddNurse = async () => {
    const { name, email, mobile, country_code } = nurseData;
    const res = await addNurse({
      name,
      email,
      number: mobile,
      country_code: "+91",
      doctor_ids: ["4"],
    });
    if (res) {
      histroy.push("/main/support-dashboard");
    }
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <div classname="row">
          <div className="col-lg-10 col-sm-12">
            <div className="page-title">{nurseData?.uid ? "Edit" : "Add"} Nurses</div>
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
                        className=""
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
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="Email">
                      <Form.Control
                        type="email"
                        className=""
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
                    <InputGroup.Text>+91</InputGroup.Text>
                    <FloatingLabel label="Mobile Number">
                      <Form.Control
                        type="tel"
                        className=""
                        placeholder="Mobile Number"
                        name="mobile"
                        value={nurseData.mobile}
                        onChange={handleChanges}
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
                        name="city"
                        value={nurseData.city}
                        onChange={handleChanges}
                      />
                    </FloatingLabel>
                  </InputGroup>
                </Col>
                {/* <Col className="col-sm-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="country code">
                      <Form.Control
                        type="text"
                        className=""
                        placeholder="Enter country code"
                        name="country_code"
                        value={nurseData.country_code}
                        onChange={handleChanges}
                      />
                    </FloatingLabel>
                  </InputGroup>
                </Col> */}
                <Col className="col-sm-4">
                  <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <FloatingLabel label="Year of experience">
                      <Form.Control
                        type="text"
                        className=""
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

            {options && <Form className="mt-4">
              <span>Assign to Doctors</span>
              <Row>
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
                      labelledBy="Select"
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Form>}

            <Form className="mt-4">
              <Row>
                <Col className="col-sm-4 mb-4">
                  <Button onClick={reqAddNurse} className="w-100" variant="primary">Add Nurses</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNurse;
