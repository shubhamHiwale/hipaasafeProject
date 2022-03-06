import React, { useEffect } from "react";
import Dashboard from "../../dashboard/Dashboard";
import Topbar from "../../topbar/Topbar";
import AddDoctor from "../../supportTeam/addDocter/AddDoctor";
import AddNurse from "../../supportTeam/addNurse/AddNurse";
import SupportDash from "../../supportTeam/SupportDash";
import NurseSched from "../../schedule/Schedule";
import History from "../../history/History";
import { Route, Switch } from "react-router-dom";
import Login from "../../authentication/Login";

const ContentWrapper = ({ AppContext }) => {
  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar AppContext={AppContext} />
          <Switch>
            <Route path="/main/support-dashboard">
              <SupportDash />
            </Route>
            <Route path="/main/add-docter">
              <AddDoctor />
            </Route>
            <Route path="/main/add-nurse">
              <AddNurse />
            </Route>
            <Route path="/main/dashboard">
              <Dashboard />
            </Route>
            <Route path="/main/schedule">
              <NurseSched />
            </Route>
            <Route path="/main/history">
              <History />
            </Route>
          </Switch>
        </div>
      </div>
      {/* <!-- Content Wrapper end --> */}
    </>
  );
};

export default ContentWrapper;
