import React, { useState } from "react";
import ClassList from "../components/Videopage/ClassList";
import VideoInterface from "../components/Videopage/VideoInterface";
import InfoHead from "../components/Videopage/InfoHead";
import InfoTabs from "../components/Videopage/InfoTabs";
// import InfoContent from "../components/Videopage/InfoContent";
import Comment from "../components/Videopage/Comment";
import CourseAnnouncement from "../components/Videopage/CourseAnnouncement";
import CourseIntro from "../components/Videopage/CourseIntro";
import QuestionAnswer from "../components/Videopage/QuestionAnswer";
// import { Routes, Route } from "react-router-dom";


const VideoPage = () => {
  const [currentTime, setCurrentTime] = useState('00:00')
  // const [currentTab, setCurrentTab] = useState("intro");
  return (
    <div className="allV">

      <div className="videoContainer">
        <VideoInterface getCurrentTime={setCurrentTime} />
        <ClassList />
      </div>

      <div className="infoContainer">
        <InfoHead />
        <InfoTabs />
        {/* <CourseIntro /> */}
        {/* <CourseAnnouncement /> */}
        <QuestionAnswer b={currentTime} />
        {/* <Comment /> */}

        {/* <Routes>
          <Route path="/video/intro" element={<CourseIntro />} />
          <Route path="/video/announcement" element={<CourseAnnouncement />} />
          <Route path="/video/question" element={<QuestionAnswer />} />
          <Route path="/video/comment" element={<Comment />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default VideoPage;