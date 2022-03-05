import React from "react";
import undrawPostingPhoto from "../../../assets/img/undraw_posting_photo.svg";
import CardIcon1 from "../../../assets/img/cardIcon1.svg";
import CardIcon2 from "../../../assets/img/cardIcon2.svg";
import CardIcon3 from "../../../assets/img/cardIcon3.svg";
import DataTable from "../dataTable/DataTable";

const Beginpage = () => {
  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div class="container-fluid">
        {/* <!-- Page Heading --> */}
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <span class="font-weight-bold mb-0 text-gray-800">
            Dashboard
            <span className="dash-date">Today, 03 Feb 2022</span>
          </span>

          {/* <a
            href="#"
            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
          </a> */}
        </div>

        {/* <!-- Content Row --> */}
        <div class="row">
          {/* <!-- Earnings (Monthly) Card Example --> */}
          {/* <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div class="col-xl-4 col-md-6 mb-4">
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
                        Total Patients
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
          <div class="col-xl-4 col-md-6 mb-4">
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
                        Completed Patients
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

          {/* <!-- Pending Requests Card Example --> */}
          <div class="col-xl-4 col-md-6 mb-4">
            <div class="card shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="d-flex align-items-center col mr-2">
                    <img src={CardIcon3} alt="card-icon-3"></img>
                    <div className="card-title">
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        3
                      </div>
                      <div class="text-xs font-weight-bold text-success mb-1">
                        Waiting Patient
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
          {/* <!-- Area Chart --> */}
          <DataTable />
        </div>

        {/* <!-- Content Row --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
};

export default Beginpage;
