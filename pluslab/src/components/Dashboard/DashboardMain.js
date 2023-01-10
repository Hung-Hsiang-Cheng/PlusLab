import React, { useContext, useState, useEffect } from "react";
import CollectionStock from "./CollectionStock";
import MainStock from "./MainStock";

export const resultsContext = React.createContext();
export const myStockCollectionContext = React.createContext();
export const myStockCollectionTempContext = React.createContext();
export const categoryContext = React.createContext();

const DashboardMain = () => {
  const myStockCollection = [
    {
      key: "1",
      stockKey: "00632R",
      stockName: "元大台灣50反1",
      collection: true,
    },
    {
      key: "2",
      stockKey: "2609",
      stockName: "陽明",
      collection: true,
    },
    {
      key: "3",
      stockKey: "1752",
      stockName: "南光",
      collection: false,
    },
    {
      key: "4",
      stockKey: "1760",
      stockName: "寶齡富錦",
      collection: true,
    },
    {
      key: "5",
      stockKey: "00637L",
      stockName: "元大滬深300正2",
      collection: true,
    },
    {
      key: "6",
      stockKey: "2615",
      stockName: "萬海",
      collection: false,
    },
    {
      key: "7",
      stockKey: "6443",
      stockName: "元晶",
      collection: false,
    },
    {
      key: "8",
      stockKey: "1605",
      stockName: "華新",
      collection: false,
    },
    {
      key: "9",
      stockKey: "2618",
      stockName: "長榮航",
      collection: false,
    },
    {
      key: "10",
      stockKey: "2610",
      stockName: "華航",
      collection: false,
    },
    {
      key: "11",
      stockKey: "00885",
      stockName: "富邦越南",
      collection: false,
    },
    {
      key: "12",
      stockKey: "1417",
      stockName: "嘉裕",
      collection: false,
    },
    {
      key: "13",
      stockKey: "2014",
      stockName: "中鴻",
      collection: false,
    },
    {
      key: "14",
      stockKey: "2603",
      stockName: "長榮",
      collection: false,
    },
    {
      key: "15",
      stockKey: "2303",
      stockName: "聯電",
      collection: false,
    },
    {
      key: "16",
      stockKey: "3481",
      stockName: "群創",
      collection: false,
    },
    {
      key: "17",
      stockKey: "2201",
      stockName: "裕隆",
      collection: false,
    },
    {
      key: "18",
      stockKey: "00878",
      stockName: "國泰永續高股息",
      collection: false,
    },
    {
      key: "19",
      stockKey: "2002",
      stockName: "中鋼",
      collection: false,
    },
    {
      key: "20",
      stockKey: "2409",
      stockName: "友達",
      collection: false,
    },
  ];
  const [myStockCollectionTemp, setMyStockCollectionTemp] =
    useState(myStockCollection);
  const changeMyStockCollectionTemp = (a) => {
    setMyStockCollectionTemp(a);
  };

  const [category, setCategory] = useState("元大台灣50反1");
  const changeCategory = (a) => {
    setCategory(a);
  };

  // API串接
  const [results, setResults] = useState(myStockCollection);
  useEffect(() => {
    search(api);
  }, []);
  const api =
    "https://cors-anywhere.herokuapp.com/https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=tse_00632R.tw|tse_2609.tw|tse_1752.tw|tse_1760.tw|tse_00637L.tw|tse_2615.tw|tse_6443.tw|tse_1605.tw|tse_2618.tw|tse_2610.tw|tse_00885.tw|tse_1417.tw|tse_2014.tw|tse_2603.tw|tse_2303.tw|tse_3481.tw|tse_2201.tw|tse_00878.tw|tse_2002.tw|tse_2409.tw|";
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setResults(parsedData.msgArray);
  };

  return (
    <div className="dashboardMain">
      <div className="mainBox">
        <categoryContext.Provider
          value={{ category, setCategory: changeCategory }}
        >
          <myStockCollectionContext.Provider value={myStockCollection}>
            <myStockCollectionTempContext.Provider
              value={{
                myStockCollectionTemp,
                setMyStockCollectionTemp: changeMyStockCollectionTemp,
              }}
            >
              <resultsContext.Provider value={results}>
                <CollectionStock />
                <MainStock />
              </resultsContext.Provider>
            </myStockCollectionTempContext.Provider>
          </myStockCollectionContext.Provider>
        </categoryContext.Provider>
      </div>
    </div>
  );
};

export default DashboardMain;
