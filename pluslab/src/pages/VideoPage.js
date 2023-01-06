import React from "react";
import ClassList from "../components/Videopage/ClassList";
import VideoInterface from "../components/Videopage/VideoInterface";
import InfoHead from "../components/Videopage/InfoHead";
// import InfoBtn from "../components/Videopage/InfoBtn";
import InfoTabs from "../components/Videopage/InfoTabs";


const VideoPage = () => {
  return (
    <div className="allV">
      <div className="videoContainer">
        <VideoInterface />
        <ClassList />

      </div>
      <div className="infoContainer">
        <InfoHead />

        <div className="infoStar"></div>
        {/* <InfoBtn /> */}
        <InfoTabs />
        <div className="infoContent">
          <div className="infoContentText"></div>
          <div className="infoTeacher"></div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;