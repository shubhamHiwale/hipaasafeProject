import React from "react";
import Beginpage from "../../doctors/beginPage/Beginpage";
import Topbar from "../../topbar/Topbar";
import AddDoctor from "../../supportTeam/addDocter/AddDoctor";
import AddNurse from "../../supportTeam/addNurse/AddNurse";
import SupportDash from "../../supportTeam/SupportDash";
import NurseSched from "../../nurse/NurseSched";
import History from "../../../assets/history/History";
import { Route, Switch } from "react-router-dom";
import Login from "../../authentication/Login";

const ContentWrapper = () => {
  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          <Switch>
            <Route path="/main/support-dash">
              <SupportDash />
            </Route>
            <Route path="/main/add-docter">
              <AddDoctor />
            </Route>
            <Route path="/main/add-nurse">
              <AddNurse />
            </Route>
            <Route path="/main/future-appointment">
              <NurseSched />
            </Route>
            <Route path="/main/history">
              <History />
            </Route>
          </Switch>
        </div>
        {/* <!-- Main Content end--> */}
      </div>
      {/* <!-- Content Wrapper end --> */}
    </>
  );
};

export default ContentWrapper;
