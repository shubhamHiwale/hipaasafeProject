import React from "react";
import UndrawProfile from "../../assets/img/undraw_profile.svg";
import UndrawProfile1 from "../../assets/img/undraw_profile_1.svg";
import UndrawProfile2 from "../../assets/img/undraw_profile_2.svg";
import UndrawProfile3 from "../../assets/img/undraw_profile_3.svg";
import ExitIcon from "../../assets/img/exit.svg";
const Topbar = ({ AppContext }) => {
   return (
      <>
         {/* <!-- Topbar --> */}
         <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button
               id="sidebarToggleTop"
               className="btn btn-link d-md-none rounded-circle mr-3"
            >
               <i className="fa fa-bars"></i>
            </button>
            <ul className="navbar-nav ml-auto">
               {/* <!-- Nav Item - User Information --> */}
               <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                     aria-expanded="false">
                     <img className="mr-2 img-profile rounded-circle" src={UndrawProfile} />
                     <span className="mr-5 d-none d-lg-inline text-gray-600 small">Shivam</span>
                     <img onClick={() => { AppContext.resetUser() }} src={ExitIcon}></img>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                     <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                     </a>
                  </div>
               </li>
            </ul>
         </nav>
      </>
   );
};
export default Topbar;