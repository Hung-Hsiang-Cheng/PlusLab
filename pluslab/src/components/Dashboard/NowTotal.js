import React from "react";
import { useState, useEffect, useMemo } from "react";

let sortStatus = {
  mineStockKey: true,
  nowValue: true,
  nowUpDown: true,
  upDownPercent: true,
};

const totalUpDown = "- $ 3,177";

const NowTotal = () => {
  let nowTotalData = [
    {
      key: 1,
      mineStockKey: "00632R",
      mineStock: "元大台灣50反1",
      nowValue: -822,
      nowUpDown: 25173,
      upDownPercent: "-3.1%",
    },
    {
      key: 2,
      mineStockKey: "2609",
      mineStock: "陽明",
      nowValue: -822,
      nowUpDown: 25173,
      upDownPercent: "-3.1%",
    },
    {
      key: 3,
      mineStockKey: "2615",
      mineStock: "南光",
      nowValue: -822,
      nowUpDown: 25173,
      upDownPercent: "-3.1%",
    },
    {
      key: 4,
      mineStockKey: "6443",
      mineStock: "寶齡富錦",
      nowValue: 2,
      nowUpDown: 25173,
      upDownPercent: "-3.1%",
    },
    {
      key: 5,
      mineStockKey: "00632R",
      mineStock: "元大滬深300正2",
      nowValue: 0,
      nowUpDown: 25173,
      upDownPercent: "-3.1%",
    },
    {
      key: 6,
      mineStockKey: "00632R",
      mineStock: "元大台灣50反1",
      nowValue: -822,
      nowUpDown: 25173,
      upDownPercent: "-3.1%",
    },
  ];

  const dataMap = () =>
    originData.map((v) => {
      if (v.nowValue < 0) {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p>{v.mineStock} </p>
                <br />
                <span>{v.mineStockKey}</span>
              </td>
              <td>
                <p style={{ color: "#38e54d" }}>{v.nowValue}</p>
              </td>
              <td>
                <p>{v.nowUpDown + " 股"}</p>
              </td>
              <td>
                <p>{v.upDownPercent}</p>
              </td>
            </tr>
          </tbody>
        );
      } else if (v.nowValue > 0) {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p>{v.mineStock} </p>
                <br />
                <span>{v.mineStockKey}</span>
              </td>
              <td>
                <p style={{ color: "red" }}>{v.nowValue}</p>
              </td>
              <td>
                <p>{v.nowUpDown + " 股"}</p>
              </td>
              <td>
                <p>{v.upDownPercent}</p>
              </td>
            </tr>
          </tbody>
        );
      } else if (v.nowValue == 0) {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p>{v.mineStock} </p>
                <br />
                <span>{v.mineStockKey}</span>
              </td>
              <td>
                <p style={{ color: "white" }}>{v.nowValue}</p>
              </td>
              <td>
                <p>{v.nowUpDown + " 股"}</p>
              </td>
              <td>
                <p>{v.upDownPercent}</p>
              </td>
            </tr>
          </tbody>
        );
      }
    });

  const [totalBoxColor, setTotalBoxColor] = useState("");
  const [originData, setOriginData] = useState(nowTotalData);
  const [showData, setShowData] = useState(dataMap());

  const colorTotalBox = () => {
    if (totalUpDown[0] == "-") {
      setTotalBoxColor("#38e54d");
      return;
    }
    if (totalUpDown[0] == "+") {
      setTotalBoxColor("#e23965");
      return;
    } else {
      setTotalBoxColor("#9d9faa");
      return;
    }
  };

  useEffect(() => {
    colorTotalBox();
  }, []);

  return (
    <div className="nowTotal">
      <div className="titleBox">
        <h3>庫存總值</h3>
      </div>
      <div className="totalBox">
        <h4>參考總現值： $910,081</h4>
        <h5
          style={{
            color: `${totalBoxColor}`,
          }}
        >
          {totalUpDown}
          <br />
          <span>- 3.34 %</span>
        </h5>
      </div>

      <table className="nowTotalTitle">
        <thead>
          <tr>
            <th>
              <p>持有股票</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // onClick={sortOrderStyle}
                // style={{
                //   transform: `${orderStyleButtonRotate}`,
                //   cursor: "pointer",
                // }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  // fill={orderStyleButtonColor}
                />
              </svg>
            </th>
            <th>
              <p>參考總值</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // onClick={sortStockKey}
                // style={{
                //   transform: `${stockKeyButtonRotate}`,
                //   cursor: "pointer",
                // }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  // fill={stockKeyButtonColor}
                />
              </svg>
            </th>
            <th>
              <p>參考損益</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // onClick={sortOrderValue}
                // style={{
                //   transform: `${orderValueButtonRotate}`,
                //   cursor: "pointer",
                // }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  // fill={orderValueButtonColor}
                />
              </svg>
            </th>
            <th>
              <p>損益百分比</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // onClick={sortOrderPrice}
                // style={{
                //   transform: `${orderPriceButtonRotate}`,
                //   cursor: "pointer",
                // }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  // fill={orderPriceButtonColor}
                />
              </svg>
            </th>
          </tr>
        </thead>
      </table>
      <div className="nowTotalListBox">
        <table className="nowTotalList">{showData}</table>
      </div>
    </div>
  );
};

export default NowTotal;
