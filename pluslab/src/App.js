import React from "react";
import Nav from "./components/Nav";
// import NavLogOut from "./components/NavLogOut";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import DashBoard from "./pages/DashBoard";
import VideoPage from "./pages/VideoPage";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

// import Comment from "./components/Videopage/Comment";
// import CourseAnnouncement from "./components/Videopage/CourseAnnouncement";
// import CourseIntro from "./components/Videopage/CourseIntro";
// import QuestionAnswer from "./components/Videopage/QuestionAnswer";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/video/*" element={<VideoPage />} >
          {/* <Route path="/video/intro" element={<CourseIntro />} />
          <Route path="/video/announcement" element={<CourseAnnouncement />} />
          <Route path="/video/question" element={<QuestionAnswer />} />
          <Route path="/video/comment" element={<Comment />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
