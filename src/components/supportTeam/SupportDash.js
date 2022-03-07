import React from "react";
import TotalDoctorIcon from "../../assets/img/total-doctors.svg";
import TotalNursesIcon from "../../assets/img/total-nurse.svg";
import DoctorTable from "./DoctorTable";
import NurseTable from "./NurseTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const SupportDash = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <span className="page-title">Dashboard</span>
          <button onClick={toggleDrawer}>Show</button>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div>Hello World</div>
        </Drawer>
        <div className="row">
          <div className="col-xl-6 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="d-flex align-items-center col mr-2">
                    <img src={TotalDoctorIcon} alt="card-icon-1"></img>
                    <div className="card-title">
                      <div className="total-numbers">12</div>
                      <div className="total-label">Total Doctors</div>
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
                    <img src={TotalNursesIcon} alt="card-icon-2"></img>
                    <div className="card-title">
                      <div className="total-numbers">21</div>
                      <div className="total-label">Total Nurses</div>
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

        {/* tabs */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <Tabs>
                  <TabList className="d-flex tabs-header">
                    <Tab className="list-group-item">Doctors List</Tab>
                    <Tab className="list-group-item">Nurses List</Tab>
                  </TabList>

                  <TabPanel className="custom-tab-panel">
                    <DoctorTable />
                  </TabPanel>
                  <TabPanel className="custom-tab-panel">
                    <NurseTable />
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>

          {/* <!-- Area Chart --> */}
        </div>

        {/* <!-- Content Row --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
};

export default SupportDash;
