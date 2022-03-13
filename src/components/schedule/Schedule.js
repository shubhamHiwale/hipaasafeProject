import React, { useState, useEffect, useCallback, useContext } from "react";
import CardIcon1 from "../../assets/img/cardIcon1.svg";
import CardIcon2 from "../../assets/img/cardIcon2.svg";
import CardIcon3 from "../../assets/img/cardIcon3.svg";
import DoctorTable from "../supportTeam/DoctorTable";
import NurseTable from "../supportTeam/NurseTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import FutureAppointmentTable from "./futureAppointment/FutureAppointmentTable";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CreateAppo from "../DrawerField/CreateAppo";
import Patient from "../DrawerField/Patient";
import { getAppointsByDateRange, getScheduleKpi, getDoctors, modifyPatientStatus } from "../../services/apiservices";
import moment from 'moment';
import appContext from "../../context/appcontext/AppContext";
import { getTestReport } from "../../services/apiservices";

const FutureAppoint = () => {
  const AppContext = useContext(appContext);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [seletedPatient, setSeletedPatient] = useState(null);
  const [selectedData, setSelectedDate] = useState(moment().add(1, 'days').format('YYYY-MM-DD'));

  useEffect(() => {
    if (AppContext?.user?.role_id === 4) {
      getDoctorsAPI();
    } else {
      appointmentHandler(AppContext?.user?.uid, selectedData);
      kpiHandler(AppContext?.user?.uid, selectedData);
    }
  }, [])

  const chnageStatusAPICall = async (appointment_id, appointment_status) => {
    switch (appointment_status) {

      case 'CONFIRMED':
        // await modifyPatientStatus({ appointment_id, appointment_status });
        break;

      case 'RESCHEDULED':
        break;

      case 'PENDING':
        break;

      case 'CANCELLED':
        break;

      case 'SCHEDULED':
        break;
    }
  }

  const handleDoctorChanges = (e) => {
    setSelectedDoctor(e.target.value);
    appointmentHandler(e.target.value, selectedData);
    kpiHandler(e.target.value, selectedData);
  };

  const getDoctorsAPI = async () => {
    let res = await getDoctors();
    if (res?.success) {
      setDoctors(res?.data?.rows);
      appointmentHandler(res?.data?.rows[0].uid, selectedData);
      kpiHandler(res?.data?.rows[0].uid, selectedData);
      setSelectedDoctor(res?.data?.rows[0].uid);
    }
  }

  const onChangeDateHanlder = (data) => {
    setSelectedDate(data.dateForm);
    appointmentHandler(selectedDoctor, data.dateForm);
    kpiHandler(selectedDoctor, data.dateForm);
  }

  const getFutureDatesArr = (noOfDays) => {
    let timeArr = [];
    let timeObj = {};
    for (let i = 0; i < noOfDays; i++) {
      if (i == 0) {
        timeObj.name = "Tommorrow";
      } else {
        timeObj.name = moment()
          .add(i + 1, "days")
          .format("D MMM");
      }
      timeObj.dateForm = moment()
        .add(i + 1, "days")
        .format("YYYY-MM-DD");
      timeArr.push(timeObj);
      timeObj = {};
    }

    return timeArr;
  };

  const getDates = getFutureDatesArr(6); 
  const [dates, setDates] = useState(getDates);
  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen : ", isOpen);
  const [auth, setAuth] = useState();
  const [doctors, setDoctors] = useState(null);
 
  const toggleDrawer = (gt) => {
    if (gt === "patient") {
      setAuth(gt);
    } else {
      setAuth("futureAppo");
    }
    setIsOpen((prevState) => !prevState);
  };

  const [appointMentList, setAppointmentList] = useState([]);
  const [kpiDetails, setKpidetails] = useState(null);

  // const appointmentHandler = async (uid, selectedData) => {
  const [ptnDataById, setPtnDataById] = useState();

  const appointmentHandler = useCallback(async () => {
    try {
      let response = await getAppointsByDateRange(uid, selectedData);
      setAppointmentList(response?.data?.rows || []);
    } catch (e) {
      console.log(e, "error");
    }
  };

  // const kpiHandler = async (uid, selectedData) => {
  //   try {
  //     let response = await getScheduleKpi(uid, selectedData);
  // }, [selectedData]);
  
  const kpiHandler = useCallback(async () => {
    try {
      let response = await getScheduleKpi(selectedData);
      setKpidetails(response?.data || null);
    } catch (e) {
      console.log(e, "error");
    }
  }, [selectedData]);

  const onChangeDateHanlder = (data) => {
    setSelectedDate(data.dateForm);
  };
  useEffect(() => {
    appointmentHandler(selectedData);
    kpiHandler(selectedData);
  }, [selectedData]);

  const demoFunc = async (pr, u_id) => {
    const res = await getTestReport(u_id);
    if (res) {
      toggleDrawer(pr);
      setPtnDataById(res.data);
    }
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="schedule-drawer"
      >
        {auth === "futureAppo" ? (
          <CreateAppo closeDrawer={closeDrawer} />
        ) : (
          <Patient ptnData={ptnDataById} closeDrawer={closeDrawer} />
        )}
      </Drawer>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-2">
          <div>
            <span className="page-title">
              Future Appointments
              {/* <span className="dash-date">Today, {moment().format("DD MMM YYYY")}</span> */}
            </span>
          </div>
          <div>
            {doctors && <InputGroup className="input-group-floting">
              <InputGroup.Text>
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </InputGroup.Text>
              <Form.Select
                className="custom-selectbox"
                aria-label="Select Speciality"
                onChange={handleDoctorChanges}
                name="speciality"
                value={selectedDoctor}
              >
                {doctors?.map((dt, ind) => (
                  <>
                    <option value={dt.uid}>
                      {dt.name}
                    </option>
                  </>
                ))
                }
              </Form.Select>
            </InputGroup>}
            <Button onClick={toggleDrawer}>Create an Appointment</Button>
          </div>
        </div>

        <div className="d-sm-flex bg-white pt-2 align-items-center justify-content-between mb-4">
          <div className="tabs-header">
            {dates.map((e, i) => (<button className={selectedData == e.dateForm ? "btn btn-dates-focus" : "btn btn-dates"} onClick={() => onChangeDateHanlder(e)} >
              {e.name}  <span className="tab-count">(0)</span>
            </button>))}
          </div>
        </div>

        {/* <!-- Content Row --> */}
        <div class="row dashboard-counter-cards">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="d-flex align-items-center col mr-2">
                    <img src={CardIcon1} alt="card-icon-1"></img>
                    <div className="card-title">
                      <div class="total-numbers">
                        {kpiDetails?.total_appointments || "0"}
                      </div>
                      <div class="total-label">Total Appointments</div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="d-flex align-items-center col mr-2">
                    <img src={CardIcon1} alt="card-icon-1"></img>
                    <div className="card-title">
                      <div class="total-numbers">
                        {kpiDetails?.confirmation_pending || "0"}
                      </div>
                      <div class="total-label">Confirmaton Pending</div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="d-flex align-items-center col mr-2">
                    <img src={CardIcon1} alt="card-icon-1"></img>
                    <div className="card-title">
                      <div class="total-numbers">
                        {kpiDetails?.confirmed || "0"}
                      </div>
                      <div class="total-label">Confirmed</div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card ExampleF --> */}
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="d-flex align-items-center col mr-2">
                    <img src={CardIcon2} alt="card-icon-2"></img>
                    <div className="card-title">
                      <div class="total-numbers">
                        {kpiDetails?.cancelled || "0"}
                      </div>
                      <div class="total-label">Cancelled</div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Content Row --> */}

        <div class="row">
          <FutureAppointmentTable demoFunc={demoFunc} appointMentList={appointMentList} chnageStatusAPICall={chnageStatusAPICall} />
          {/* <!-- Area Chart --> */}
        </div>

        {/* <!-- Content Row --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
};

export default FutureAppoint;
