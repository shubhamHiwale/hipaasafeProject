import React from "react";
import Beginpage from "../beginPage/Beginpage";
import Topbar from "../topbar/Topbar";
import AddDoctor from "../addDocter/AddDoctor";
import AddNurse from "../addNurse/AddNurse";
import SupportDash from "../supportDash/SupportDash";
import FutureAppoint from "../futureAppointment/FutureAppoint";
import History from "../history/History";
import { Route, Switch } from "react-router-dom";

const ContentWrapper = () => {
  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" class="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          <Switch>
            <Route exact path="/">
              <Beginpage />
            </Route>
            <Route exact path="/add-docter">
              <AddDoctor />
            </Route>
            <Route exact path="/add-nurse">
              <AddNurse />
            </Route>
            <Route exact path="/support-dash">
              <SupportDash />
            </Route>
            <Route exact path="/future-appointment">
              <FutureAppoint />
            </Route>
            <Route exact path="/history">
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
