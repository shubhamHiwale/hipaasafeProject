import React from "react";
import UndrawRocket from "../../../assets/img/undraw_rocket.svg";
import logo from "../../../assets/img/logo.svg";
const Sidebar = () => {
  return (
    <>
      <ul
        class="navbar-nav sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3"><img src={logo} alt="Logo"/></div>
        </a>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active">
          <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
          <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>History</span>
          </a>
          <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Schedule</span>
          </a>
        </li>

        
        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
        </div>
      </ul>
    </>
  );
};

export default Sidebar;
