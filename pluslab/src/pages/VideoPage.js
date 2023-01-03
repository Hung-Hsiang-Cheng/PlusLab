import React from "react";
import ClassList from "../components/Videopage/ClassList";
import VideoInterface from "../components/Videopage/VideoInterface";
import InfoHead from "../components/Videopage/InfoHead";
// import InfoBtn from "../components/Videopage/InfoBtn";
import InfoTabs from "../components/Videopage/InfoTabs";

const VideoPage = () => {
  return (
    <vi>
      <div class="videoContainer">
        <VideoInterface />
        <ClassList />
      </div>
      <div class="infoContainer">
        <InfoHead />

        <div class="infoStar"></div>
        {/* <InfoBtn /> */}
        <InfoTabs />
        <div class="infoContent">
          <div class="infoContentText"></div>
          <div class="infoTeacher"></div>
        </div>
      </div>
    </vi>
  );
}

export default VideoPage;