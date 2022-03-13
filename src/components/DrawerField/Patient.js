import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DatePicker from "react-date-picker";
import moment from "moment";
import {
  hospitalRepoList,
  testReport,
  sendTestRequest,
  removeReq,
} from "../../services/apiservices";
import PdfIcon from "../../assets/img/pdfIcon.png";
import JpgIcon from "../../assets/img/jpgIcon.png";

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
import ReqFile from "../../assets/img/reqFile.svg";

const Patient = ({ closeDrawer, ptnData }) => {
  // console.log("ptnData : ", ptnData[0].patient_id);
  const [date, setDate] = useState();
  const [cbVal, setCbVal] = useState([]);
  const [repoList, setRepoList] = useState();

  const reqDocObj = {
    remark: "",
    date: "",
    test: null,
  };

  const [reqDocData, setReqDocData] = useState(reqDocObj);

  // console.log("reqDocData : ", reqDocData);
  console.log("cbVal : ", cbVal);

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

  const getSelDate = (e) => {
    setDate(e);
    setReqDocData({ ...reqDocData, date: moment(e).format("YYYY-MM-DD") });
  };

  const handleCheck = (e) => {
    const { defaultValue } = e.target;
    const { checked } = e.target;
    if (checked) {
      setCbVal([...cbVal, parseInt(defaultValue)]);
    } else {
      const index = cbVal.indexOf(defaultValue);
      if (index > -1) {
        cbVal.splice(index, 1);
      }
      console.log("cbVal : ", cbVal);
    }
  };

  const handleChange = (e) => {
    setReqDocData({ ...reqDocData, remark: e.target.value });
  };

  const reqSendTestRequest = async () => {
    const res = await sendTestRequest({
      patient_id: ptnData[0]?.patient_id,
      hospital_reports_id: cbVal,
    });
    if (res) {
      console.log(res);
    }
  };

  const reqRemoveReq = async (e) => {
    const val = e.target.value;
    const res = await removeReq({
      request_ids: [1],
    });
    if (res) {
      const ad = document.getElementById(`docReq-${val}`);
      ad.classList = "d-none";
      console.log("removeReq : ", res);
    }
  };

  useEffect(async () => {
    const res = await hospitalRepoList();
    if (res) {
      setRepoList(res.data);
    }
  }, []);

  return (
    <>
      <div className="dwer-container">
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
              <Tab className="list-group-item">Documents</Tab>
              <Tab className="list-group-item">Request Documents</Tab>
            </TabList>

            <TabPanel className="custom-tab-panel">
              {ptnData
                ? ptnData.map((dt, ind) => (
                    <div className="patient-document">
                      <div className="px-2 py-2">
                        <div>
                          <span>
                            {moment(dt.createdAt).format("YYYY-MM-DD")}
                          </span>
                          <div className="d-flex justify-content-between align-items-center mt-2">
                            {dt.document_file.split(".")[1] === "pdf" ? (
                              <img
                                className="file-icon"
                                src={PdfIcon}
                                alt="pdf-icon"
                              ></img>
                            ) : (
                              <img
                                className="file-icon"
                                src={JpgIcon}
                                alt="jpg-icon"
                              ></img>
                            )}
                            <span className="">{dt.hospital_tests.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "no data found"}
              <Col className="py-4">
                <div id="docReq-1" className="req-doc-div">
                  <div className="req-doc-name">
                    <img src={ReqFile} alt="req-file"></img>
                    <span className="ml-2">Blood Count</span>
                  </div>
                  <button
                    value={1}
                    onClick={reqRemoveReq}
                    className="req-doc-des"
                  >
                    x
                  </button>
                </div>

                <div id="docReq-2" className="req-doc-div mt-2">
                  <div className="req-doc-name">
                    <img src={ReqFile} alt="req-file"></img>
                    <span className="ml-2">Coronary angiogram</span>
                  </div>
                  <button
                    value={2}
                    onClick={reqRemoveReq}
                    className="req-doc-des"
                  >
                    x
                  </button>
                </div>
              </Col>
            </TabPanel>
            <TabPanel className="custom-tab-panel">
              <div>
                <div className="p-2">
                  <span>Test</span>
                  <div className="px-3 py-2">
                    {repoList
                      ? repoList?.map((dt, ind) => (
                          <>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicCheckbox"
                            >
                              <Form.Check
                                onChange={handleCheck}
                                type="checkbox"
                                label={dt.title}
                                value={dt.id}
                              />
                            </Form.Group>
                          </>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
              <Col className="py-4">
                <div>
                  <button
                    onClick={reqSendTestRequest}
                    className="btn btn-primary w-100"
                  >
                    Send Request
                  </button>
                </div>

                <div className="mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Send & Complete Checkup
                  </button>
                </div>
              </Col>
            </TabPanel>
          </Tabs>
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
      </div>
    </>
  );
};

export default Patient;
