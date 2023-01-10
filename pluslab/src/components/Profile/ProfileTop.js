import React from "react";
import { useState, useEffect } from "react";
import arrow from "../Homepage/homepageImg/arrow.svg";
import backStage from "./profilePageImg/backStageIcon.svg";
import userPic from "./profilePageImg/lanceProfilePic.jpg";
import Top from "../Top";

const ProfileTop = () => {
  let userInfo = [
    {
      key: 1,
      userID: "lance0608",
      password: "lovelauren8787",
      mail: "maggie40796@gmail.com",
      nickName: "Lance Chen",
      profilePic: "./profilePageImg/lanceProfilePic.jpg",
      leftMoney: 100000,
      grade: 2,
    },
    {
      key: 2,
      userID: "Sam51214",
      password: "password123",
      mail: "love51214@gmail.com",
      nickName: "汪汪汪",
      profilePic: "./profilePageImg/lanceProfilePic.jpg",
      leftMoney: 100000,
      grade: 3,
    },
  ];

  const [originUserData, setOriginUserData] = useState(userInfo);
  const [showTitle, setShowTitle] = useState([]);

  useEffect(() => {
    setShowTitle(titleDataMap());
  }, []);

  const dotNumber = new Intl.NumberFormat("en-US");

  const titleDataMap = () =>
    originUserData.map((userData) => {
      if (userData.grade == 2) {
        return (
          <div className="profileTitleBox" key={userData.key}>
            <div className="profileContainer">
              <div
                className="profilePic"
                style={{
                  backgroundImage: `url(${userPic})`,
                }}
              ></div>
              <div className="titleContainer">
                <h1>
                  {"Lv." + userData.grade}
                  <span>{userData.nickName}</span>
                </h1>
                <h2>
                  {"當前體驗金餘額：$ " + dotNumber.format(userData.leftMoney)}
                </h2>
              </div>
            </div>
            <div className="buttonBox">
              <button className="goToBackStage">
                <img src={backStage} alt="" />
                前往後臺
                <img src={arrow} alt="" />
              </button>
              <button className="changeInfo">修改個人帳戶資訊</button>
            </div>
          </div>
        );
      }
    });

  return (
    <div className="profileTop">
      {showTitle}
      <Top />
    </div>
  );
};

export default ProfileTop;
