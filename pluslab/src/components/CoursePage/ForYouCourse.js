import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const ForYouCourse = () => {
  return (
    <div className="divToYou">
      <div className="dBecause">
        因為你曾經瀏覽了「量價交易精髓：打造股票、期貨完美交易策略」
      </div>
      <div className="divItems">
        <div className="imgClass">
          <img src="https://picsum.photos/500/300" />
        </div>
        <div className="dClasstext">
          <div className="score">
            <span className="sStar">4</span>
            <span>
              <svg
                className="sOnStar"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                  fill="#9d9faa"
                />
              </svg>
              <svg
                className="sOnStar"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                  fill="#9d9faa"
                />
              </svg>
              <svg
                className="sOnStar"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                  fill="#9d9faa"
                />
              </svg>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                  fill="#9d9faa"
                />
              </svg>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                  fill="#9d9faa"
                />
              </svg>
            </span>
            <span>(41)</span>
            <span className="sPersonCount">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                  fill="#9d9faa"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
                  fill="#9d9faa"
                />
              </svg>
              752人
            </span>
            <span className="sClock">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4Z"
                  fill="#9d9faa"
                />
                <path
                  d="M8.53334 4.2666H7.46667V8.46332L11.2 10.6666L11.7333 9.80627L8.53334 7.93873V4.2666Z"
                  fill="#9d9faa"
                />
              </svg>
              2.5小時
            </span>
          </div>
          <div>
            <h5>新手必學的3件事 - 進場點、停損點、停利點</h5>
          </div>
          <div>
            <p>
              一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中
            </p>
          </div>
          <div className="dClassPrice">
            <span>限時專屬價 NT$ 3,200</span>
            <button>立即購買</button>
          </div>
        </div>
      </div>
      <button className="btnToYouPre">
        <svg
          width="33"
          height="56"
          viewBox="0 0 33 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33 49.42L12.6032 28L33 6.58L26.7206 0L0 28L26.7206 56L33 49.42Z"
            fill="#6F717B"
          />
        </svg>
      </button>
      <button className="btnToYouNext">
        <svg
          width="33"
          height="56"
          viewBox="0 0 33 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.32043e-06 6.58L20.3968 28L5.75242e-07 49.42L6.27935 56L33 28L6.27936 -2.33599e-06L4.32043e-06 6.58Z"
            fill="#6F717B"
          />
        </svg>
      </button>
      <div className="dToYouBottom">
        <button className="btn hActive"></button>
        <button className="btn"></button>
        <button className="btn"></button>
      </div>
    </div>
  );
};

export default ForYouCourse;