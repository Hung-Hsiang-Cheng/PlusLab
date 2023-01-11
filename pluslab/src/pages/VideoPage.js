import React, { useState, useRef } from "react";
import ClassList from "../components/Videopage/ClassList";
import VideoInterface from "../components/Videopage/VideoInterface";
import InfoHead from "../components/Videopage/InfoHead";
import InfoTabs from "../components/Videopage/InfoTabs";
// import InfoContent from "../components/Videopage/InfoContent";
import Comment from "../components/Videopage/Comment";
import CourseAnnouncement from "../components/Videopage/CourseAnnouncement";
import CourseIntro from "../components/Videopage/CourseIntro";
import QuestionAnswer from "../components/Videopage/QuestionAnswer";

const VideoPage = () => {
  const [currentTime, setCurrentTime] = useState('00:00');
  const [currentTab, setCurrentTab] = useState("intro");
  const [VideoEleP, setVideoEleP] = useState(false);
  const videoRefProps = useRef(null);

  return (
    <div className="allV">

      <div className="videoContainer">
        <VideoInterface getCurrentTime={setCurrentTime} videoRefProps={videoRefProps} VideoEleP={setVideoEleP} />
        <ClassList />
      </div>

      <div className="infoContainer">
        <InfoHead />
        <InfoTabs onClickTab={setCurrentTab} />
        {currentTab === "intro" && <CourseIntro />}
        {currentTab === "announcement" && <CourseAnnouncement />}
        {currentTab === "question" && <QuestionAnswer b={currentTime} videoRefProps={videoRefProps} setVideoEleP={VideoEleP} />}
        {currentTab === "comment" && <Comment />}
      </div>
    </div>
  );
}
export default VideoPage;