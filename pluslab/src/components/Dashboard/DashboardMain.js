import React from "react";
import CollectionStock from "./CollectionStock";
import MainStock from "./MainStock";

export const apiContext = React.createContext();
const api =
  "https://cors-anywhere.herokuapp.com/https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=tse_00632R.tw|tse_2609.tw|tse_1752.tw|tse_1760.tw|tse_00637L.tw|tse_2615.tw|tse_6443.tw|tse_1605.tw|tse_2618.tw|tse_2610.tw|tse_00885.tw|tse_1417.tw|tse_2014.tw|tse_2603.tw|tse_2303.tw|tse_3481.tw|tse_2201.tw|tse_00878.tw|tse_2002.tw|tse_2409.tw|";
const DashboardMain = () => {
  return (
    <div className="dashboardMain">
      <div className="mainBox">
        <CollectionStock />
        <apiContext.Provider value={api}>
          <MainStock />
        </apiContext.Provider>
      </div>
    </div>
  );
};

export default DashboardMain;
