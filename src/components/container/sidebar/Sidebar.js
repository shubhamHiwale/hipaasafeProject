import React from "react";
import sidebarLogo from "../../../assets/img/hipaasafe-blue-logo.svg";

const Sidebar = () => {
  return (
    <>
      <ul className="navbar-nav sidebar sidebar-light accordion"  id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3"><img src={sidebarLogo} alt="Hipaasafe" className="sidebar-logo"/></div>
        </a>
        
        <li className="nav-item">
          <a className="nav-link">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            <span>History</span>
          </a>
        </li>
        <li className="nav-item">  
          <a className="nav-link">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <span>Schedule</span>
          </a>
        </li>


        <li className="nav-item">
          <a className="nav-link">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
          <i class="fa fa-user-md" aria-hidden="true"></i>
            <span>Add Doctors</span>
          </a>
        </li>
        <li className="nav-item">  
          <a className="nav-link">
          <i class="fa fa-female" aria-hidden="true"></i>
            <span>Add Nurses</span>
          </a>
        </li>
        

      </ul>
    </>
  );
};

export default Sidebar;
