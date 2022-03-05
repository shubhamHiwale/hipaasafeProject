import React from "react";
import ContentWrapper from "../content/ContentWrapper";
import Sidebar from "../sidebar/Sidebar";

const Rootpage = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper />
      </div>
    </div>
  );
};

export default Rootpage;
