import React from "react";
import Beginpage from "../beginPage/Beginpage";
import Topbar from "../topbar/Topbar";

const ContentWrapper = () => {
  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" class="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          <Beginpage />
        </div>
        {/* <!-- Main Content end--> */}
      </div>
      {/* <!-- Content Wrapper end --> */}
    </>
  );
};

export default ContentWrapper;
