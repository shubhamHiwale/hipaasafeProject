import React, { useEffect, useState } from "react";
import { addAppo } from "../../services/apiservices";
import TimePicker from "react-time-picker";
import moment from "moment";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";
import DatePicker from "react-date-picker";
import { useSelector } from "react-redux";

const CreateAppo = ({ closeDrawer }) => {
  const user_data = useSelector((state) => state.userDataReducer);
  const obj = {
    doctor_id: user_data ? user_data?.uid : "",
    name: "",
    email: "",
    country_code: "+91",
    number: "",
    appointment_date: "",
    appointment_time: "",
  };

  console.log("user_data", user_data);

  const [appoData, setAppoData] = useState(obj);
  const [date, setDate] = useState();
  const [val, setVal] = useState("10:00");
  console.log("date : ", date);
  console.log("appoData : ", appoData);

  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAppoData({ ...appoData, [name]: value });
  };

  const getSelDate = (e) => {
    setDate(e);
    setAppoData({
      ...appoData,
      appointment_date: moment(e).format("YYYY-MM-DD"),
    });
  };
  const getSelTime = (e) => {
    console.log(e);
    setVal(e);
    setAppoData({
      ...appoData,
      appointment_time: e,
    });
  };

  const reqAddAppo = async () => {
    const res = await addAppo(appoData);
    if (res) {
      console.log("res : ", res.userDataReducer.data);
    }
  };

  useEffect(() => {
    localStorage.getItem("user");
    console.log(localStorage.getItem("user"));
  }, []);

  return (
    <>
      <div className="position-relative dwer-container">
        <Form>
          <Col className="py-3">
            <span className="font-weight-bold text-black">
              Create An Appointment
            </span>
            <span onClick={closeDrawer} className="btn-dwer-close">
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </Col>
          <Col className="">
            {/* <Form.Label>Choose doctor</Form.Label> */}
            <InputGroup className="input-group-floting">
              {/* <InputGroup.Text>
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </InputGroup.Text> */}
              {user_data ? user_data.name : ""}
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
                  className=""
                  placeholder="Patient Name"
                  name="name"
                  value={appoData.name}
                  onChange={handleChanges}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>

          <Col className="mt-2">
            <InputGroup className="input-group-floting">
              <InputGroup.Text>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </InputGroup.Text>
              <FloatingLabel label="Email">
                <Form.Control
                  type="text"
                  className=""
                  placeholder="Email"
                  name="email"
                  value={appoData.email}
                  onChange={handleChanges}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>

          <Col className="mt-2">
            <InputGroup className="input-group-floting">
              <InputGroup.Text>+91</InputGroup.Text>
              <FloatingLabel label="Mobile Number">
                <Form.Control
                  type="text"
                  className=""
                  placeholder="Mobile Number"
                  name="number"
                  value={appoData.number}
                  onChange={handleChanges}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>

          <Col className="mt-2">
            <InputGroup className="input-group-floting custom-input-box">
              <InputGroup.Text>
              <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
              </InputGroup.Text>
              <DatePicker className="" onChange={getSelDate} value={date} />
            </InputGroup>
          </Col>

          <Col className="mt-2">
            <InputGroup className="input-group-floting custom-input-box">
              <InputGroup.Text>
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              </InputGroup.Text>
              <TimePicker onChange={getSelTime} value={val} />
            </InputGroup>
          </Col>

          <Col className="position-absolute fixed-bottom pb-2">
            <Button
              onClick={reqAddAppo}
              className="w-100 p-3"
              variant="primary"
            >
              Create an Appointment
            </Button>
          </Col>
        </Form>
      </div>
    </>
  );
};

export default CreateAppo;
