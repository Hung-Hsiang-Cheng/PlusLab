import React from "react";
import Top from "../components/Top";
import DashboardMain from "../components/Dashboard/DashboardMain";
import DashBoardBottom from "../components/Dashboard/DashboardBottom";
const DashBoard = () => {
  return (
    <>
      <DashboardMain />
      <DashBoardBottom />
      <Top />
    </>
  );
};
export default DashBoard;
