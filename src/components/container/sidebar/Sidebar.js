import React from "react";
import UndrawRocket from "../../../assets/img/undraw_rocket.svg";
import logo from "../../../assets/img/logo.svg";
const Sidebar = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Hipaasafe</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
          <a className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>History</span>
          </a>
          <a className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Schedule</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
