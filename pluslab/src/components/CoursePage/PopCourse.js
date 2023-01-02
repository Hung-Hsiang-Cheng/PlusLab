import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";


const PopCourse = () => {
  return (
    <div className="dHotCarousel">
      <div className="dHotContainer">
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
      </div>
      <div className="dHotBottom">
        <button className="btn hActive"></button>
        <button className="btn"></button>
        <button className="btn"></button>
      </div>
      <div className="dindicator">
        <button className="btnPre">
          <svg
            width="60"
            height="60"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.5 7.5C11.7761 7.5 12 7.72386 12 8C12 8.27614 11.7761 8.5 11.5 8.5H5.70711L7.85355 10.6464C8.04882 10.8417 8.04882 11.1583 7.85355 11.3536C7.65829 11.5488 7.34171 11.5488 7.14645 11.3536L4.14645 8.35355C3.95118 8.15829 3.95118 7.84171 4.14645 7.64645L7.14645 4.64645C7.34171 4.45118 7.65829 4.45118 7.85355 4.64645C8.04882 4.84171 8.04882 5.15829 7.85355 5.35355L5.70711 7.5H11.5Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="btnNext">
          <svg
            width="60"
            height="60"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM4.5 7.5C4.22386 7.5 4 7.72386 4 8C4 8.27614 4.22386 8.5 4.5 8.5H10.2929L8.14645 10.6464C7.95118 10.8417 7.95118 11.1583 8.14645 11.3536C8.34171 11.5488 8.65829 11.5488 8.85355 11.3536L11.8536 8.35355C12.0488 8.15829 12.0488 7.84171 11.8536 7.64645L8.85355 4.64645C8.65829 4.45118 8.34171 4.45118 8.14645 4.64645C7.95118 4.84171 7.95118 5.15829 8.14645 5.35355L10.2929 7.5H4.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
 
export default PopCourse;