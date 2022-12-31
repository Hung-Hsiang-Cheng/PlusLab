import React, { useContext, useState, useEffect } from "react";
// import { apiContext } from "./DashboardMain";
import { apiContext } from "./DashboardMain";
import axios from "axios";

const MainStock = () => {
  const apiValues = useContext(apiContext);
  // 取得API

  const [results, setResults] = useState([]);

  //   useEffect(() => {
  //     search(apiValues);
  //   }, []);

  //   const search = async (url) => {
  //     const dataFetch = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     });
  //     let parsedData = await dataFetch.json();
  //     setResults([parsedData.msgArray]);
  //     console.log(results);
  //   };

  return (
    <div className="mainStock">
      <h2></h2>
    </div>
  );
};

export default MainStock;
