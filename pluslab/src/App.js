import React from "react";
import Nav from "./components/Nav";
import NavLogOut from "./components/NavLogOut";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import DashBoard from "./pages/DashBoard";
import ProfileTop from "./components/Profile/ProfileTop";
import ProfileStockCollection from "./components/Profile/ProfileStockCollection";
import ProfileOwnCourse from "./components/Profile/ProfileOwnCourse";
import ProfileCourseCollection from "./components/Profile/ProfileCourseCollection";
import ProfileArticleCollection from "./components/Profile/ProfileArticleCollection";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route
          path="/profile"
          element={
            <>
              <ProfileTop />
              <ProfileStockCollection />
            </>
          }
        />
        <Route
          path="/profile/ownCourse"
          element={
            <>
              <ProfileTop />
              <ProfileOwnCourse />
            </>
          }
        />
        <Route
          path="/profile/courseCollection"
          element={
            <>
              <ProfileTop />
              <ProfileCourseCollection />
            </>
          }
        />
        <Route
          path="/profile/articleCollection"
          element={
            <>
              <ProfileTop />
              <ProfileArticleCollection />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
