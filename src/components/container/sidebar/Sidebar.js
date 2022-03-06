import React, { useContext } from "react";
import sidebarLogo from "../../../assets/img/hipaasafe-blue-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import appContext from "../../../context/appcontext/AppContext";

const Sidebar = () => {
  const sbrAuth = useSelector((state) => state.sideBAuthReducer);
  const AppContext = useContext(appContext);

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
        <li className="nav-item active">
          <NavLink to={AppContext.user.role_id === 2 ? "/main/support-dashboard" : "/main/dashboard"} className="nav-link">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        {AppContext.user.role_id === 2 && <li className="nav-item">
          <NavLink to="/main/add-docter" className="nav-link">
            <i class="fa fa-user-md" aria-hidden="true"></i>
            <span>Add Doctors</span>
          </NavLink>
        </li>}
        {AppContext.user.role_id === 2 && <li className="nav-item">
          <NavLink to="/main/add-nurse" className="nav-link">
            <i class="fa fa-female" aria-hidden="true"></i>
            <span>Add Nurses</span>
          </NavLink>
        </li>}
        {(AppContext.user.role_id === 3 || AppContext.user.role_id === 4) && <li className="nav-item">
          <NavLink to="/main/history" className="nav-link">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            <span>History</span>
          </NavLink>
        </li>}
        {(AppContext.user.role_id === 3 || AppContext.user.role_id === 4) && <li className="nav-item">
          <NavLink to="/main/schedule" className="nav-link">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <span>Schedule</span>
          </NavLink>
        </li>}
      </ul>
    </>
  );
};

export default Sidebar;
