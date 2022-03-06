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
        <span className="page-title">Future Appointments <span className="dash-date">Today, 03 Feb 2022</span>
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

        <div className="d-sm-flex bg-white pt-2 align-items-center justify-content-between mb-4">
          <div className="tabs-header">
            <button className="btn btn-dates"> Tommorow <span className="tab-count">(12)</span> </button>
            <button className="btn btn-dates"> 3 Feb <span className="tab-count">(10)</span></button>
            <button className="btn btn-dates"> 4 Feb <span className="tab-count">(10)</span></button>
            <button className="btn btn-dates"> 5 Feb <span className="tab-count">(10)</span></button>
            <button className="btn btn-dates"> 6 Feb <span className="tab-count">(10)</span></button>
            <button className="btn btn-dates"> 7 Feb <span className="tab-count">(10)</span></button>
          </div>
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
                      <div class="total-numbers">
                        12
                      </div>
                      <div class="total-label">
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
                      <div class="total-numbers">
                        12
                      </div>
                      <div class="total-label">
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
                      <div class="total-numbers">
                        12
                      </div>
                      <div class="total-label">
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
                      <div class="total-numbers">
                        12
                      </div>
                      <div class="total-label">
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
