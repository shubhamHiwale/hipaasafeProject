import React from "react";
import sidebarLogo from "../../../assets/img/hipaasafe-blue-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";

const Sidebar = () => {
  const sbrAuth = useSelector((state) => state.sideBAuthReducer);

  return (
    <>
      <ul
        className="navbar-nav sidebar sidebar-light accordion"
        id="accordionSidebar"
      >
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            <img src={sidebarLogo} alt="Hipaasafe" className="sidebar-logo" />
          </div>
        </a>
        {sbrAuth ? (
          <>
            <li className="nav-item active">
              <NavLink to="/main/support-dashboard" className="nav-link">
                <i class="fa fa-home" aria-hidden="true"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/main/add-docter" className="nav-link">
                <i class="fa fa-user-md" aria-hidden="true"></i>
                <span>Add Doctors</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/main/add-nurse" className="nav-link">
                <i class="fa fa-female" aria-hidden="true"></i>
                <span>Add Nurses</span>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink to="/main/dashboard" className="nav-link">
                <i class="fa fa-home" aria-hidden="true"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/main/history" className="nav-link">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <span>History</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/main/schedule" className="nav-link">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <span>Schedule</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Sidebar;
