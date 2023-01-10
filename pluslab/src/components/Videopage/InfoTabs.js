import React from "react";
import { Link } from "react-router-dom";

const InfoTabs = () => {
  return (
    <div className="infoBtn">
      <div>
        <Link to="/video/intro"><button type="button" ><span>課程介紹</span></button></Link>
      </div>
      <div>
        <Link to="/video/announcement"><button type="button" ><span>課程公告</span></button></Link>
      </div>
      <div>
        <Link to="/video/question"><button type="button" ><span>問與答</span></button></Link>
      </div>
      <div>
        <Link to="/video/comment"><button type="button" ><span>評論</span></button></Link>
      </div>
    </div>
  )
}

export default InfoTabs;
