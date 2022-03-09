import React, { useEffect, useState } from "react";
import undrawPostingPhoto from "../../assets/img/undraw_posting_photo.svg";
import CardIcon1 from "../../assets/img/cardIcon1.svg";
import CardIcon2 from "../../assets/img/cardIcon2.svg";
import CardIcon3 from "../../assets/img/cardIcon3.svg";
import PatientsList from "./patientsList/PatientsList";
import moment from "moment";

const Dashboard = () => {


  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <span className="page-title">Dashboard <span className="dash-date">Today, {moment().format('DD MMM YYYY')}</span>
          </span>
        </div>
        <div className="row dashboard-counter-cards">
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="d-flex align-items-center col mr-2">
                    <img src={CardIcon1} alt="card-icon-1"></img>
                    <div className="card-title">
                      <div className="total-numbers">
                        12
                      </div>
                      <div className="total-label">
                        Total Patients
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="d-flex align-items-center col mr-2">
                    <img src={CardIcon2} alt="card-icon-2"></img>
                    <div className="card-title">
                      <div className="total-numbers">
                        12
                      </div>
                      <div className="total-label">
                        Completed Patients
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="d-flex align-items-center col mr-2">
                    <img src={CardIcon3} alt="card-icon-3"></img>
                    <div className="card-title">
                      <div className="total-numbers">
                        3
                      </div>
                      <div className="total-label">
                        Waiting Patient
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <PatientsList />
        </div>

        {/* <!-- Content Row --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
};

export default Dashboard;
