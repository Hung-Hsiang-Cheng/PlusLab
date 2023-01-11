import React, { useState, useRef } from "react";
import ClassList from "../components/Videopage/ClassList";
import VideoInterface from "../components/Videopage/VideoInterface";
import InfoHead from "../components/Videopage/InfoHead";
import InfoTabs from "../components/Videopage/InfoTabs";
// import InfoContent from "../components/Videopage/InfoContent";
import Comment from "../components/Videopage/Comment";
import CourseAnnouncement from "../components/Videopage/CourseAnnouncement";
import CourseIntro from "../components/Videopage/CourseIntro";
import Note from "../components/Videopage/Note";

const VideoPage = () => {
  const [currentTime, setCurrentTime] = useState('00:00');
  const [currentTab, setCurrentTab] = useState("intro");
  const videoRefProps = useRef(null);

  return (
    <div className="allV">

      <div className="videoContainer">
        <VideoInterface getCurrentTime={setCurrentTime} videoRefProps={videoRefProps} />
        <ClassList />
      </div>

      <div className="infoContainer">
        <InfoHead />
        <InfoTabs onClickTab={setCurrentTab} />
        {currentTab === "intro" && <CourseIntro />}
        {currentTab === "question" && <CourseAnnouncement />}
        {currentTab === "note" && <Note b={currentTime} videoRefProps={videoRefProps} />}
        {currentTab === "comment" && <Comment />}
      </div>
    </div>
  );
}
export default VideoPage;