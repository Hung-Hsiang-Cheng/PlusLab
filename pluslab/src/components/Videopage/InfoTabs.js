import React from "react";

const InfoTabs = ({ onClickTab }) => {
  return (
    <div className="infoBtn">
      <div>
        <button type="button" onClick={() => onClickTab("intro")}><span>課程介紹</span></button>
      </div>
      <div>
        <button type="button" onClick={() => onClickTab("announcement")}><span>課程公告</span></button>
      </div>
      <div>
        <button type="button" onClick={() => onClickTab("question")}><span>問與答</span></button>
      </div>
      <div>
        <button type="button" onClick={() => onClickTab("comment")}><span>評論</span></button>
      </div>
    </div>
  )
}

export default InfoTabs;
