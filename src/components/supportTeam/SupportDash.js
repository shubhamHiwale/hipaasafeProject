import React from "react";
import CardIcon1 from "../../assets/img/cardIcon1.svg";
import CardIcon2 from "../../assets/img/cardIcon2.svg";
import CardIcon3 from "../../assets/img/cardIcon3.svg";
import DataTable from "../doctors/dataTable/DataTable";
import DoctorTable from "./DoctorTable";
import NurseTable from "./NurseTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SupportDash = () => {
  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <span className="font-weight-bold mb-0 text-gray-800">
            Dashboard
            <span className="dash-date">Today, 03 Feb 2022</span>
          </span>

          {/* <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
          </a> */}
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-6 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="d-flex align-items-center col mr-2">
                    <img src={CardIcon1} alt="card-icon-1"></img>
                    <div className="card-title">
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        12
                      </div>
                      <div className="text-xs font-weight-bold text-success mb-1">
                        Total Doctors
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

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-6 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="d-flex align-items-center col mr-2">
                    <img src={CardIcon2} alt="card-icon-2"></img>
                    <div className="card-title">
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        12
                      </div>
                      <div className="text-xs font-weight-bold text-success mb-1">
                        Nurses Patients
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

        {/* <!-- Content Row --> */}

        <div className="row">
          <Tabs>
            <TabList className="d-flex">
              <Tab className="bg-success list-group-item border rounded text-white">
                Doctors List
              </Tab>
              <Tab className="bg-success list-group-item border rounded text-white ml-2">
                Nurses List
              </Tab>
            </TabList>

            <TabPanel>
              <DoctorTable />
            </TabPanel>
            <TabPanel>
              <NurseTable />
            </TabPanel>
          </Tabs>
          {/* <!-- Area Chart --> */}
        </div>

        {/* <!-- Content Row --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
};

export default SupportDash;
