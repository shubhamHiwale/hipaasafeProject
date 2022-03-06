import React from "react";
import ContentWrapper from "../content/ContentWrapper";
import Sidebar from "../sidebar/Sidebar";

const Rootpage = ({ AppContext }) => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper AppContext={AppContext} />
      </div>
    </div>
  );
};

export default Rootpage;
