import React, { useContext, useState, useEffect, useMemo } from "react";
import { resultsContext } from "./DashboardMain";
import { myStockCollectionContext } from "./DashboardMain";
import { myStockCollectionTempContext } from "./DashboardMain";
import { categoryContext } from "./DashboardMain";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [80, 90, 100, 200, 50, 215, 100],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

let stockBasicInfo = [
  {
    key: "1",
    stockKey: "00632R",
    aTitle: "全名",
    aInfo: "元大ETF傘型證券投資信託基金之台灣50單日反向1倍證券投資信託基金",
    bTitle: "追蹤指數",
    bInfo: "臺灣50指數",
    cTitle: "保管費率",
    cInfo: "0.04%",
    dTitle: "資產規模",
    dInfo: "60,258.00(百萬)",
    eTitle: "經理人",
    eInfo: "陳威志",
    fTitle: "管理費率",
    fInfo: "1.0000%",
    gTitle: "公司網站",
    gInfo: "http://www.yuantaetfs.com",
    hTitle: "發行公司",
    hInfo: "元大證券投資信託股份有限公司",
  },
  {
    key: "2",
    stockKey: "2609",
    aTitle: "公司名稱",
    aInfo: "陽明",
    bTitle: "產業類別",
    bInfo: "航運",
    cTitle: "董監持股比",
    cInfo: "32.23%",
    dTitle: "市值",
    dInfo: "228,732.812(百萬)",
    eTitle: "董事長",
    eInfo: "鄭貞茂",
    fTitle: "已發行股數",
    fInfo: "3,492,104,270",
    gTitle: "公司網站",
    gInfo: "http://www.yangming.com/",
    hTitle: "主要業務",
    hInfo:
      "國內外水上貨運、客運業務之經營；倉庫、碼頭、拖船、駁船、貨櫃集散場站業務之經營。",
  },
  {
    key: "3",
    stockKey: "1752",
    aTitle: "公司名稱",
    aInfo: "南光",
    bTitle: "產業類別",
    bInfo: "生技",
    cTitle: "董監持股比",
    cInfo: "11.21%",
    dTitle: "市值",
    dInfo: "6,453.1332(百萬)",
    eTitle: "董事長",
    eInfo: "陳立賢",
    fTitle: "已發行股數",
    fInfo: "100,988,472",
    gTitle: "公司網站",
    gInfo: "http://www.nangkuang.com.tw",
    hTitle: "主要業務",
    hInfo: "西藥、醫療器材、動物藥品、飼料添加物、化妝品之製造加工買賣。",
  },
  {
    key: "4",
    stockKey: "1760",
    aTitle: "公司名稱",
    aInfo: "寶齡富錦",
    bTitle: "產業類別",
    bInfo: "生技",
    cTitle: "董監持股比",
    cInfo: "18.57%",
    dTitle: "市值",
    dInfo: "15,347.281",
    eTitle: "董事長",
    eInfo: "張立秋",
    fTitle: "已發行股數",
    fInfo: "85,739,013",
    gTitle: "公司網站",
    gInfo: "http://www.pbf.com.tw",
    hTitle: "主要業務",
    hInfo: "藥品之製造與銷售；化妝品之製造與銷售；配方食品之製造與銷售。",
  },
  {
    key: "5",
    stockKey: "00637L",
    aTitle: "全名",
    aInfo:
      "元大滬深300傘型證券投資信託基金之滬深300單日正向2倍證券投資信託基金",
    bTitle: "追蹤指數",
    bInfo: "滬深300日報酬正向兩倍指數",
    cTitle: "保管費率",
    cInfo: "0.23%",
    dTitle: "資產規模",
    dInfo: "22,225.00(百萬)",
    eTitle: "經理人",
    eInfo: "李舒禾",
    fTitle: "管理費率",
    fInfo: "0.9900%",
    gTitle: "公司網站",
    gInfo: "https://www.yuantafunds.com",
    hTitle: "發行公司",
    hInfo: "元大證券投資信託股份有限公司",
  },
  {
    key: "6",
    stockKey: "2615",
    aTitle: "公司名稱",
    aInfo: "萬海",
    bTitle: "產業類別",
    bInfo: "航運",
    cTitle: "董監持股比",
    cInfo: "3.04%",
    dTitle: "市值",
    dInfo: "224,772.2946(百萬)",
    eTitle: "董事長",
    eInfo: "陳柏廷",
    fTitle: "已發行股數",
    fInfo: "2,806,146,293",
    gTitle: "公司網站",
    gInfo: "http://tw.wanhai.com/",
    hTitle: "主要業務",
    hInfo: "船舶運送業、船務代理業、其他批發業零售業、船舶及其零件批發業。",
  },
  {
    key: "7",
    stockKey: "6443",
    aTitle: "公司名稱",
    aInfo: "元晶",
    bTitle: "產業類別",
    bInfo: "光電",
    cTitle: "董監持股比",
    cInfo: "1.06%",
    dTitle: "市值",
    dInfo: "16,456.0268(百萬)",
    eTitle: "董事長",
    eInfo: "廖國榮",
    fTitle: "已發行股數",
    fInfo: "476,296,730",
    gTitle: "公司網站",
    gInfo: "http://www.tsecpv.com",
    hTitle: "主要業務",
    hInfo: "太陽能電池及模組之製造及銷售。",
  },
  {
    key: "8",
    stockKey: "1605",
    aTitle: "公司名稱",
    aInfo: "華新",
    bTitle: "產業類別",
    bInfo: "電器電纜",
    cTitle: "董監持股比",
    cInfo: "13.78%",
    dTitle: "市值",
    dInfo: "176,118.8704(百萬)",
    eTitle: "董事長",
    eInfo: "焦佑倫",
    fTitle: "已發行股數",
    fInfo: "3,731,332,948",
    gTitle: "公司網站",
    gInfo: "http://www.walsin.com",
    hTitle: "主要業務",
    hInfo: "電線電纜、鋼線鋼纜及特殊鋼之生產與銷售。",
  },
  {
    key: "9",
    stockKey: "2618",
    aTitle: "公司名稱",
    aInfo: "長榮航",
    bTitle: "產業類別",
    bInfo: "航運",
    cTitle: "董監持股比",
    cInfo: "28.70%",
    dTitle: "市值",
    dInfo: "150,831.21875(百萬)",
    eTitle: "董事長",
    eInfo: "林寶水",
    fTitle: "已發行股數",
    fInfo: "5,358,125,457",
    gTitle: "公司網站",
    gInfo: "http://www.evaair.com",
    hTitle: "主要業務",
    hInfo: "國際航線之定期及不定期航空客貨運輸業務。",
  },
  {
    key: "10",
    stockKey: "2610",
    aTitle: "公司名稱",
    aInfo: "華航",
    bTitle: "產業類別",
    bInfo: "航運",
    cTitle: "董監持股比",
    cInfo: "39.70%",
    dTitle: "市值",
    dInfo: "114,257.203(百萬)",
    eTitle: "董事長",
    eInfo: "謝世謙",
    fTitle: "已發行股數",
    fInfo: "6,013,537,444",
    gTitle: "公司網站",
    gInfo: "http://www.china-airlines.com",
    hTitle: "主要業務",
    hInfo:
      "客運、貨運、郵運 代理業務（包括營業、運務）及代理修護 倉儲業務之經營。",
  },
  {
    key: "11",
    stockKey: "00885",
    aTitle: "全名",
    aInfo: "富邦富時越南ETF證券投資信託基金",
    bTitle: "追蹤指數",
    bInfo: "富時越南30指數",
    cTitle: "保管費率",
    cInfo: "0.23%",
    dTitle: "資產規模",
    dInfo: "21,633.00(百萬)",
    eTitle: "經理人",
    eInfo: "楊貽甯",
    fTitle: "管理費率",
    fInfo: "0.9900%",
    gTitle: "公司網站",
    gInfo: "https://websys.fsit.com.tw/",
    hTitle: "發行公司",
    hInfo: "富邦證券投資信託股份有限公司",
  },
  {
    key: "12",
    stockKey: "1417",
    aTitle: "公司名稱",
    aInfo: "嘉裕",
    bTitle: "產業類別",
    bInfo: "紡織",
    cTitle: "董監持股比",
    cInfo: "11.60%",
    dTitle: "市值",
    dInfo: "2,706.65925(百萬)",
    eTitle: "董事長",
    eInfo: "嚴陳莉蓮",
    fTitle: "已發行股數",
    fInfo: "189,941,840",
    gTitle: "公司網站",
    gInfo: "http://www.carnival.com.tw/",
    hTitle: "主要業務",
    hInfo: "男女成衣。",
  },
  {
    key: "13",
    stockKey: "2014",
    aTitle: "公司名稱",
    aInfo: "中鴻",
    bTitle: "產業類別",
    bInfo: "鋼鐵",
    cTitle: "董監持股比",
    cInfo: "40.59%",
    dTitle: "市值",
    dInfo: "38,400.802(百萬)",
    eTitle: "董事長",
    eInfo: "曾貴松",
    fTitle: "已發行股數",
    fInfo: "1,435,544,446",
    gTitle: "公司網站",
    gInfo: "http://www.chsteel.com.tw",
    hTitle: "主要業務",
    hInfo: "鋼捲、鋼管。",
  },
  {
    key: "14",
    stockKey: "2603",
    aTitle: "公司名稱",
    aInfo: "長榮",
    bTitle: "產業類別",
    bInfo: "航運",
    cTitle: "董監持股比",
    cInfo: "11.17%",
    dTitle: "市值",
    dInfo: "344,976.46(百萬)",
    eTitle: "董事長",
    eInfo: "張衍義",
    fTitle: "已發行股數",
    fInfo: "2,116,420,082",
    gTitle: "公司網站",
    gInfo: "http://www.evergreen-marine.com",
    hTitle: "主要業務",
    hInfo: "船舶運送業、船務代理業；貨櫃集散站經營業。",
  },
  {
    key: "15",
    stockKey: "2303",
    aTitle: "公司名稱",
    aInfo: "聯電",
    bTitle: "產業類別",
    bInfo: "半導體",
    cTitle: "董監持股比",
    cInfo: "6.19%",
    dTitle: "市值",
    dInfo: "508,943.2436(百萬)",
    eTitle: "董事長",
    eInfo: "洪嘉聰",
    fTitle: "已發行股數",
    fInfo: "12,504,748,984",
    gTitle: "公司網站",
    gInfo: "http://WWW.UMC.COM",
    hTitle: "主要業務",
    hInfo: "積體電路；各種半導體相關零組件。",
  },
  {
    key: "16",
    stockKey: "3481",
    aTitle: "公司名稱",
    aInfo: "群創",
    bTitle: "產業類別",
    bInfo: "光電",
    cTitle: "董監持股比",
    cInfo: "0.04%",
    dTitle: "市值",
    dInfo: "105,598.8388(百萬)",
    eTitle: "董事長",
    eInfo: "洪進揚",
    fTitle: "已發行股數",
    fInfo: "9,556,456,146",
    gTitle: "公司網站",
    gInfo: "http://www.innolux.com",
    hTitle: "主要業務",
    hInfo: "電子零組件製造業；國際貿易業。",
  },
  {
    key: "17",
    stockKey: "2201",
    aTitle: "公司名稱",
    aInfo: "裕隆",
    bTitle: "產業類別",
    bInfo: "汽車",
    cTitle: "董監持股比",
    cInfo: "35.88%",
    dTitle: "市值",
    dInfo: "62,000(百萬)",
    eTitle: "董事長",
    eInfo: "嚴陳莉蓮",
    fTitle: "已發行股數",
    fInfo: "1,000,000,000",
    gTitle: "公司網站",
    gInfo: "http://www.yulon-motor.com.tw",
    hTitle: "主要業務",
    hInfo: "汽車；零件；保修及其他。",
  },
  {
    key: "18",
    stockKey: "00878",
    aTitle: "全名",
    aInfo:
      "國泰台灣高股息傘型證券投資信託基金之台灣ESG永續高股息ETF證券投資信託基金",
    bTitle: "追蹤指數",
    bInfo: "MSCI臺灣ESG永續高股息精選30指數",
    cTitle: "保管費率",
    cInfo: "0.04%",
    dTitle: "資產規模",
    dInfo: "137,534.00(百萬)",
    eTitle: "經理人",
    eInfo: "鍾郁婕",
    fTitle: "管理費率",
    fInfo: "0.2500%",
    gTitle: "公司網站",
    gInfo: "https://www.cathaysite.com.tw/",
    hTitle: "發行公司",
    hInfo: "國泰證券投資信託股份有限公司",
  },
  {
    key: "19",
    stockKey: "2002",
    aTitle: "公司名稱",
    aInfo: "中鋼",
    bTitle: "產業類別",
    bInfo: "鋼鐵",
    cTitle: "董監持股比",
    cInfo: "20.10%",
    dTitle: "市值",
    dInfo: "468,898.828(百萬)",
    eTitle: "董事長",
    eInfo: "翁朝棟",
    fTitle: "已發行股數",
    fInfo: "15,734,860,997",
    gTitle: "公司網站",
    gInfo: "http://www.csc.com.tw",
    hTitle: "主要業務",
    hInfo:
      "鋼品設計製造買賣儲運及其他相關業務（含輕金屬，尖端材料）；鋼廠之籌建。",
  },
  {
    key: "20",
    stockKey: "2409",
    aTitle: "公司名稱",
    aInfo: "友達",
    bTitle: "產業類別",
    bInfo: "光電",
    cTitle: "董監持股比",
    cInfo: "7.08%",
    dTitle: "市值",
    dInfo: "115,490.94(百萬)",
    eTitle: "董事長",
    eInfo: "彭又又浪",
    fTitle: "已發行股數",
    fInfo: "7,699,396,092",
    gTitle: "公司網站",
    gInfo: "http://www.auo.com",
    hTitle: "主要業務",
    hInfo: "液晶顯示器；有機發光顯示器。",
  },
];

const MainStock = () => {
  const resultsValues = useContext(resultsContext);
  const myStockCollection = useContext(myStockCollectionContext);
  const { category, setCategory } = useContext(categoryContext);
  const { myStockCollectionTemp, setMyStockCollectionTemp } = useContext(
    myStockCollectionTempContext
  );

  const [originData, setOriginData] = useState(myStockCollection);

  const mapValue = () => {
    if (resultsValues !== []) {
      const mapThreeValue = resultsValues.map((e) => {
        const temp = stockBasicInfo.find((ele) => e.c === ele.stockKey);
        const temp2 = myStockCollectionTemp.find((ele) => e.c === ele.stockKey);
        if (temp !== undefined && temp2 !== undefined) {
          e.aTitle = temp.aTitle;
          e.bTitle = temp.bTitle;
          e.cTitle = temp.cTitle;
          e.dTitle = temp.dTitle;
          e.eTitle = temp.eTitle;
          e.fTitle = temp.fTitle;
          e.gTitle = temp.gTitle;
          e.hTitle = temp.hTitle;
          e.aInfo = temp.aInfo;
          e.bInfo = temp.bInfo;
          e.cInfo = temp.cInfo;
          e.dInfo = temp.dInfo;
          e.eInfo = temp.eInfo;
          e.fInfo = temp.fInfo;
          e.gInfo = temp.gInfo;
          e.hInfo = temp.hInfo;
          e.collection = temp2.collection;
          e.key = temp2.key;
        }
        return e;
      });
      setOriginData(mapThreeValue);
      return;
    }
  };

  useEffect(() => mapValue(), [resultsValues, myStockCollectionTemp]);

  const [displayKChart, setDisplayKChart] = useState("block");
  const [displayInfo, setDisplayInfo] = useState("none");
  const [KChartBorder, setKChartBorder] = useState("0px 4px #e23965");
  const [InfoBorder, setInfoBorder] = useState("none");
  const dotNumber = new Intl.NumberFormat("en-US");

  useEffect(() => {
    setShowData(dataMap());
  }, [originData, category, displayKChart, displayInfo, myStockCollectionTemp]);

  const seeDisplayKChart = () => {
    setDisplayKChart("block");
    setDisplayInfo("none");
    setKChartBorder("0px 4px #e23965");
    setInfoBorder("none");
  };

  const seeDisplayInfo = () => {
    setDisplayKChart("none");
    setDisplayInfo("block");
    setKChartBorder("none");
    setInfoBorder("0px 4px #e23965");
  };

  const addOrRemoveCollection = (n) => {
    for (let m = 0; m < originData.length; m++) {
      if (n == originData[m].key && originData[m].collection == true) {
        originData[m].collection = false;
        myStockCollection[m].collection = false;
        myStockCollectionTemp[m].collection = false;
        setMyStockCollectionTemp(myStockCollection);
        // mapValue();
        // setShowData(dataMap());
        return;
      }
      if (n == originData[m].key && originData[m].collection == false) {
        originData[m].collection = true;
        myStockCollection[m].collection = true;
        myStockCollectionTemp[m].collection = true;
        setMyStockCollectionTemp(myStockCollection);
        console.log(myStockCollectionTemp);
        // mapValue();
        // setShowData(dataMap());
        return;
      }
    }
  };

  const dataMap = () =>
    originData.map((originData) => {
      if (category === originData.n && originData.collection) {
        let stockBig = originData.g
          .split("_")
          .concat(originData.f.split("_"))
          .sort((a, b) => {
            return b - a;
          });
        let gTotal =
          Number(originData.g.split("_")[0]) +
          Number(originData.g.split("_")[1]) +
          Number(originData.g.split("_")[2]) +
          Number(originData.g.split("_")[3]) +
          Number(originData.g.split("_")[4]);
        let fTotal =
          Number(originData.f.split("_")[0]) +
          Number(originData.f.split("_")[1]) +
          Number(originData.f.split("_")[2]) +
          Number(originData.f.split("_")[3]) +
          Number(originData.f.split("_")[4]);
        return (
          <div key={originData.key}>
            <h1>
              {originData.n}
              <span>{originData.c}</span>
              <svg
                className="collection"
                width="20"
                height="26"
                viewBox="0 0 20 26"
                fill="#E23965"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => addOrRemoveCollection(originData.key)}
              >
                <path
                  className="collectionBackground"
                  d="M2.85714 0H17.1429C18.7143 0 20 1.3 20 2.88889V26L10 21.6667L0 26L0.014286 2.88889C0.014286 1.3 1.28571 0 2.85714 0Z"
                />
                <path
                  className="collectionBorder"
                  d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
                  fill="#E23965"
                />
              </svg>
            </h1>
            <div className="stockInfoContainer">
              <div className="stockInfoBox">
                <h2 style={{ color: "#38e54d" }}>
                  {Number(originData.b.split("_")[0]).toFixed(2)}
                  <span>
                    {Number(originData.b.split("_")[0] - originData.y).toFixed(
                      2
                    )}
                  </span>
                  <span>
                    {"(" +
                      (
                        (Number(originData.b.split("_")[0] - originData.y) /
                          Number(originData.b.split("_")[0])) *
                        100
                      ).toFixed(2) +
                      "%)"}
                  </span>
                </h2>
                <h3>成交量：{dotNumber.format(originData.v)}</h3>
                <h6>
                  最後更新時間：
                  {originData.d.slice(0, 4) +
                    "-" +
                    originData.d.slice(4, 6) +
                    "-" +
                    originData.d.slice(6, 8) +
                    " " +
                    originData.t}
                </h6>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>成交價</td>
                    <td>{Number(originData.b.split("_")[0]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>開盤價</td>
                    <td>{Number(originData.o).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>漲跌</td>
                    <td>
                      {Number(
                        originData.b.split("_")[0] - originData.y
                      ).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>最高價</td>
                    <td>{Number(originData.h).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>最低價</td>
                    <td>{Number(originData.l).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>昨收</td>
                    <td>{Number(originData.y).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>買價</td>
                    <td>{Number(originData.b.split("_")[0]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>賣價</td>
                    <td>{Number(originData.b.split("_")[4]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>總量</td>
                    <td>{dotNumber.format(originData.v)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="stockTab">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h2
                        onClick={seeDisplayKChart}
                        style={{ boxShadow: `${KChartBorder}` }}
                      >
                        即時圖
                      </h2>
                    </td>
                    <td></td>
                    <td>
                      <h2
                        onClick={seeDisplayInfo}
                        style={{ boxShadow: `${InfoBorder}` }}
                      >
                        基本資訊
                      </h2>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div
                className="tabKChart"
                style={{ display: `${displayKChart}` }}
              >
                <div className="chartBox" width="780px" height="326px">
                  <Line
                    options={options}
                    data={data}
                    width="600px"
                    height="326px"
                  />
                </div>

                <table className="nowPrice">
                  <tbody>
                    <tr>
                      <td>
                        <p>量</p>
                      </td>
                      <td>
                        <p>委買價</p>
                      </td>
                      <td></td>
                      <td>
                        <p>委賣價</p>
                      </td>
                      <td>
                        <p>量</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[0]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[0]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[0]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[0]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[1]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[1]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[1]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[1]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[2]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[2]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[2]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[2]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[3]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[3]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[3]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[3]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[4]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[4]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[4]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[4]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(gTotal)}
                        </p>
                      </td>
                      <td>
                        <p>小計</p>
                      </td>
                      <td></td>
                      <td>
                        <p>小計</p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(fTotal)}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="bBackground"></div>
                <div
                  className="b0"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[0]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="b1"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[1]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="b2"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[2]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="b3"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[3]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="b4"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[4]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a0"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[0]),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a1"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[1]),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a2"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[2]),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a3"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[3]),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a4"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[4]),
                    maxWidth: "170px",
                  }}
                ></div>
              </div>
              <div className="tabInfo" style={{ display: `${displayInfo}` }}>
                <table className="stockBasicInfo">
                  <tbody>
                    <tr>
                      <td>
                        <p>{originData.aTitle}</p>
                      </td>
                      <td colSpan="3">
                        <p>{originData.aInfo}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{originData.bTitle}</p>
                      </td>
                      <td>
                        <p>{originData.bInfo}</p>
                      </td>
                      <td>
                        <p>{originData.cTitle}</p>
                      </td>
                      <td>
                        <p>{originData.cInfo}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{originData.dTitle}</p>
                      </td>
                      <td>
                        <p>{originData.dInfo}</p>
                      </td>
                      <td>
                        <p>{originData.eTitle}</p>
                      </td>
                      <td>
                        <p>{originData.eInfo}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{originData.fTitle}</p>
                      </td>
                      <td>
                        <p>{originData.fInfo}</p>
                      </td>
                      <td>
                        <p>{originData.gTitle}</p>
                      </td>
                      <td>
                        <p>{originData.gInfo}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{originData.hTitle}</p>
                      </td>
                      <td colSpan="3">
                        <p>{originData.hInfo}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
      if (category === originData.n && !originData.collection) {
        let stockBig = originData.g
          .split("_")
          .concat(originData.f.split("_"))
          .sort((a, b) => {
            return b - a;
          });
        let gTotal =
          Number(originData.g.split("_")[0]) +
          Number(originData.g.split("_")[1]) +
          Number(originData.g.split("_")[2]) +
          Number(originData.g.split("_")[3]) +
          Number(originData.g.split("_")[4]);
        let fTotal =
          Number(originData.f.split("_")[0]) +
          Number(originData.f.split("_")[1]) +
          Number(originData.f.split("_")[2]) +
          Number(originData.f.split("_")[3]) +
          Number(originData.f.split("_")[4]);
        return (
          <div key={originData.key}>
            <h1>
              {originData.n}
              <span>{originData.c}</span>
              <svg
                className="collection"
                width="20"
                height="26"
                viewBox="0 0 20 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => addOrRemoveCollection(originData.key)}
              >
                <path
                  className="collectionBackground"
                  d="M2.85714 0H17.1429C18.7143 0 20 1.3 20 2.88889V26L10 21.6667L0 26L0.014286 2.88889C0.014286 1.3 1.28571 0 2.85714 0Z"
                />
                <path
                  className="collectionBorder"
                  d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
                  fill="#E23965"
                />
              </svg>
            </h1>
            <div className="stockInfoContainer">
              <div className="stockInfoBox">
                <h2 style={{ color: "#38e54d" }}>
                  {Number(originData.b.split("_")[0]).toFixed(2)}
                  <span>
                    {Number(originData.b.split("_")[0] - originData.y).toFixed(
                      2
                    )}
                  </span>
                  <span>
                    {"(" +
                      (
                        (Number(originData.b.split("_")[0] - originData.y) /
                          Number(originData.b.split("_")[0])) *
                        100
                      ).toFixed(2) +
                      "%)"}
                  </span>
                </h2>
                <h3>成交量：{dotNumber.format(originData.v)}</h3>
                <h6>
                  最後更新時間：
                  {originData.d.slice(0, 4) +
                    "-" +
                    originData.d.slice(4, 6) +
                    "-" +
                    originData.d.slice(6, 8) +
                    " " +
                    originData.t}
                </h6>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>成交價</td>
                    <td>{Number(originData.b.split("_")[0]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>開盤價</td>
                    <td>{Number(originData.o).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>漲跌</td>
                    <td>
                      {Number(
                        originData.b.split("_")[0] - originData.y
                      ).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>最高價</td>
                    <td>{Number(originData.h).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>最低價</td>
                    <td>{Number(originData.l).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>昨收</td>
                    <td>{Number(originData.y).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>買價</td>
                    <td>{Number(originData.b.split("_")[0]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>賣價</td>
                    <td>{Number(originData.b.split("_")[4]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>總量</td>
                    <td>{dotNumber.format(originData.v)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="stockTab">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h2
                        onClick={seeDisplayKChart}
                        style={{ boxShadow: `${KChartBorder}` }}
                      >
                        即時圖
                      </h2>
                    </td>
                    <td></td>
                    <td>
                      <h2
                        onClick={seeDisplayInfo}
                        style={{ boxShadow: `${InfoBorder}` }}
                      >
                        基本資訊
                      </h2>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div
                className="tabKChart"
                style={{ display: `${displayKChart}` }}
              >
                <div className="chartBox" width="780px" height="326px">
                  <Line
                    options={options}
                    data={data}
                    width="600px"
                    height="326px"
                  />
                </div>

                <table className="nowPrice">
                  <tbody>
                    <tr>
                      <td>
                        <p>量</p>
                      </td>
                      <td>
                        <p>委買價</p>
                      </td>
                      <td></td>
                      <td>
                        <p>委賣價</p>
                      </td>
                      <td>
                        <p>量</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[0]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[0]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[0]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[0]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[1]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[1]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[1]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[1]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[2]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[2]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[2]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[2]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[3]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[3]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[3]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[3]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(Number(originData.g.split("_")[4]))}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {Number(originData.b.split("_")[4]).toFixed(2)}
                        </p>
                      </td>
                      <td></td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {Number(originData.a.split("_")[4]).toFixed(2)}
                        </p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(Number(originData.f.split("_")[4]))}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ color: "#38e54d" }}>
                          {dotNumber.format(gTotal)}
                        </p>
                      </td>
                      <td>
                        <p>小計</p>
                      </td>
                      <td></td>
                      <td>
                        <p>小計</p>
                      </td>
                      <td>
                        <p style={{ color: "#e23965" }}>
                          {dotNumber.format(fTotal)}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="bBackground"></div>
                <div
                  className="b0"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[0]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="b1"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[1]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="b2"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[2]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="b3"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[3]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="b4"
                  style={{
                    width: Math.max(
                      170 -
                        (170 / stockBig[0]) *
                          Number(originData.g.split("_")[4]),
                      0
                    ),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a0"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[0]),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a1"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[1]),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a2"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[2]),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a3"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[3]),
                    maxWidth: "170px",
                  }}
                ></div>
                <div
                  className="a4"
                  style={{
                    width:
                      (170 / stockBig[0]) * Number(originData.f.split("_")[4]),
                    maxWidth: "170px",
                  }}
                ></div>
              </div>
              <div className="tabInfo" style={{ display: `${displayInfo}` }}>
                <table className="stockBasicInfo">
                  <tbody>
                    <tr>
                      <td>
                        <p>{originData.aTitle}</p>
                      </td>
                      <td colSpan="3">
                        <p>{originData.aInfo}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{originData.bTitle}</p>
                      </td>
                      <td>
                        <p>{originData.bInfo}</p>
                      </td>
                      <td>
                        <p>{originData.cTitle}</p>
                      </td>
                      <td>
                        <p>{originData.cInfo}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{originData.dTitle}</p>
                      </td>
                      <td>
                        <p>{originData.dInfo}</p>
                      </td>
                      <td>
                        <p>{originData.eTitle}</p>
                      </td>
                      <td>
                        <p>{originData.eInfo}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{originData.fTitle}</p>
                      </td>
                      <td>
                        <p>{originData.fInfo}</p>
                      </td>
                      <td>
                        <p>{originData.gTitle}</p>
                      </td>
                      <td>
                        <p>{originData.gInfo}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{originData.hTitle}</p>
                      </td>
                      <td colSpan="3">
                        <p>{originData.hInfo}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
    });

  const [showData, setShowData] = useState(dataMap());

  return <div className="mainStock">{showData}</div>;
};

export default MainStock;
