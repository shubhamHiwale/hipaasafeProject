import React from "react";
import CardIcon1 from "../../assets/img/cardIcon1.svg";
import CardIcon2 from "../../assets/img/cardIcon2.svg";
import CardIcon3 from "../../assets/img/cardIcon3.svg";
import DoctorTable from "../supportTeam/DoctorTable";
import NurseTable from "../supportTeam/NurseTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Form, Row, Col, Button } from "react-bootstrap";
import FutureAppointmentTable from "./futureAppointment/FutureAppointmentTable";

const FutureAppoint = () => {
  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div class="container-fluid">
        {/* <!-- Page Heading --> */}
        <div class="d-sm-flex align-items-center justify-content-between mb-2">
          <span class="font-weight-bold mb-0 text-gray-800">
            Future Appointments
            <span className="dash-date">Today, 03 Feb 2022</span>
          </span>
        </div>

        <div class="d-sm-flex align-items-center justify-content-between mb-1">
          <span class="font-weight-bold mb-0 text-gray-800">
            <Form className="mt-4">
              <Row>
                <Col className="col-sm-16 mb-4">
                  <Form.Control className="p-4" placeholder="First name" />
                </Col>
              </Row>
            </Form>
          </span>
          <Button>Create an Appointment</Button>
        </div>

        <div class="d-sm-flex bg-white p-2 align-items-center justify-content-between mb-4">
          <span class="font-weight-bold mb-0 text-gray-800">
            <button className="ml-1 btn bg-success text-white p-3 status__">
              Tommorow (12)
            </button>
            <button className="ml-2 btn bg-success text-white p-3 status__">
              3 Feb (08)
            </button>
            <button className="ml-2 btn bg-success text-white p-3 status__">
              4 Feb (05)
            </button>
            <button className="ml-2 btn bg-success text-white p-3 status__">
              5 Feb (00)
            </button>
            <button className="ml-2 btn bg-success text-white p-3 status__">
              6 Feb (02)
            </button>
            <button className="ml-2 btn bg-success text-white p-3 status__">
              7 Feb (04)
            </button>
          </span>
        </div>

        {/* <!-- Content Row --> */}
        <div class="row">
          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="d-flex align-items-center col mr-2">
                    <img src={CardIcon1} alt="card-icon-1"></img>
                    <div className="card-title">
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        12
                      </div>
                      <div class="text-xs font-weight-bold text-success mb-1">
                        Total Appointments
                      </div>
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
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        12
                      </div>
                      <div class="text-xs font-weight-bold text-success mb-1">
                        Confirmaton Pending
                      </div>
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
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        12
                      </div>
                      <div class="text-xs font-weight-bold text-success mb-1">
                        Confirmed
                      </div>
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
                    <img src={CardIcon2} alt="card-icon-2"></img>
                    <div className="card-title">
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        12
                      </div>
                      <div class="text-xs font-weight-bold text-success mb-1">
                        Cancelled
                      </div>
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
          <FutureAppointmentTable />
          {/* <!-- Area Chart --> */}
        </div>

        {/* <!-- Content Row --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
};

export default FutureAppoint;
