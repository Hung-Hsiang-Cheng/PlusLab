import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";


const SelectCourse = () => {
const State = {
  NewCourse: [
    {
      id: 1,
      img: "https://picsum.photos/500/300",
      url: "https://picsum.photos/500/300",
      title: "新手必學的3件事 - 進場點、停損點、停利點",
      special: 3200,
      text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
      star: 4,
      ratecount: 41,
      students: 752,
      videLength: 2.5,
      teacher: "王希律",
    },
    {
      id: 2,
      img: "https://picsum.photos/500/300",
      url: "https://picsum.photos/500/300",
      title: "新手必學的3件事 - 進場點、停損點、停利點",
      special: 3200,
      text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
      star: 3,
      ratecount: 41,
      students: 752,
      videLength: 2.5,
      teacher: "黃律",
    },
    {
      id: 3,
      img: "https://picsum.photos/500/300",
      url: "https://picsum.photos/500/300",
      title: "新手必學的3件事 - 進場點、停損點、停利點",
      special: 3200,
      text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
      star: 4,
      ratecount: 41,
      students: 752,
      videLength: 2.5,
      teacher: "王希律",
    },
    {
      id: 4,
      img: "https://picsum.photos/500/300",
      url: "https://picsum.photos/500/300",
      title: "新手必學的3件事 - 進場點、停損點、停利點",
      special: 3200,
      text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
      star: 4,
      ratecount: 41,
      students: 752,
      videLength: 2.5,
      teacher: "王希律",
    },
    {
      id: 5,
      img: "https://picsum.photos/500/300",
      url: "https://picsum.photos/500/300",
      title: "新手必學的3件事 - 進場點、停損點、停利點",
      special: 3200,
      text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
      star: 4,
      ratecount: 41,
      students: 752,
      videLength: 2.5,
      teacher: "王希律",
    },
    {
      id: 6,
      img: "https://picsum.photos/500/300",
      url: "https://picsum.photos/500/300",
      title: "新手必學的3件事 - 進場點、停損點、停利點",
      special: 3200,
      text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
      star: 4,
      ratecount: 41,
      students: 752,
      videLength: 2.5,
      teacher: "王希律",
    },
  ],
  seach: [
    {
      id: 1,
      title: "量價交易精髓：打造股票、期貨完美交易策略",
      time: "2023-01-02 15:15:30",
    },
  ],
};

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  dot: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 10,
};





  return (
    <Fragment>
      <div className="divAllCourse">
        <ul className="ulAllCourseContainer">
          {State.NewCourse.map((v) => {
          return (
          <a href="/">
            <li className="dCard" key={v.id}>
              <img className="imgCard" src={v.img} />
              <div className="shopCart">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.2 19.2C5.88 19.2 4.812 20.28 4.812 21.6C4.812 22.92 5.88 24 7.2 24C8.52 24 9.6 22.92 9.6 21.6C9.6 20.28 8.52 19.2 7.2 19.2ZM0 0V2.4H2.4L6.72 11.508L5.1 14.448C4.908 14.784 4.8 15.18 4.8 15.6C4.8 16.92 5.88 18 7.2 18H21.6V15.6H7.704C7.536 15.6 7.404 15.468 7.404 15.3L7.44 15.156L8.52 13.2H17.46C18.36 13.2 19.152 12.708 19.56 11.964L23.856 4.176C23.952 4.008 24 3.804 24 3.6C24 2.94 23.46 2.4 22.8 2.4H5.052L3.924 0H0ZM19.2 19.2C17.88 19.2 16.812 20.28 16.812 21.6C16.812 22.92 17.88 24 19.2 24C20.52 24 21.6 22.92 21.6 21.6C21.6 20.28 20.52 19.2 19.2 19.2Z"
                    fill="#e23965"
                  />
                </svg>
              </div>
              <div className="dCardMark">
                <svg
                  width="20"
                  height="26"
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
                    fill="#E23965"
                  />
                </svg>
              </div>

              <div className="dCardtext">
                <div className="dCardScore">
                  <span className="dCardStar">{v.star}</span>
                  <span>
                    <svg
                      className="dCardStarActive"
                      width="120"
                      height="18"
                      viewBox="0 1 160 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z"
                        fill="#FFC700"
                      />
                      <path
                        d="M46.4287 0L49.3474 8.98278H58.7924L51.1512 14.5344L54.0699 23.5172L46.4287 17.9656L38.7875 23.5172L41.7062 14.5344L34.065 8.98278H43.51L46.4287 0Z"
                        fill="#FFC700"
                      />
                      <path
                        d="M78 0L80.9187 8.98278H90.3637L82.7225 14.5344L85.6412 23.5172L78 17.9656L70.3588 23.5172L73.2775 14.5344L65.6363 8.98278H75.0813L78 0Z"
                        fill="#FFC700"
                      />
                      <path
                        d="M111.428 0L114.346 8.98278H123.791L116.15 14.5344L119.069 23.5172L111.428 17.9656L103.787 23.5172L106.705 14.5344L99.064 8.98278H108.509L111.428 0Z"
                        fill="#FFC700"
                      />
                      <path
                        d="M143 0L145.919 8.98278H155.364L147.723 14.5344L150.641 23.5172L143 17.9656L135.359 23.5172L138.277 14.5344L130.636 8.98278H140.081L143 0Z"
                        fill="#FFC700"
                      />
                    </svg>
                  </span>
                  <span>({v.ratecount})</span>
                </div>
                <div className="dCardTitle">{v.title}</div>
                <div className="dCardTeacher">{v.teacher}</div>
                <div className="dCardPersonCount">
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
                  {v.students}人
                </div>
                <div className="dCardClock">
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
                  {v.videLength}
                </div>
                <div className="dCardPrice">NT$ {v.special}</div>
              </div>
            </li>
          </a>
           )})}
        </ul>
      </div>
      <div className="dCardMore">
        <button>
          查看所有精彩課程
          <svg
            width="24"
            height="26"
            viewBox="3 3 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5964 8.69663L5.23279 12.3885C4.6925 12.7019 4 12.3228 4 11.6922L4 4.30846C4 3.67783 4.6925 3.29871 5.23279 3.61216L11.5964 7.30403C12.1345 7.6162 12.1345 8.38445 11.5964 8.69663Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </Fragment>
  );
};

export default SelectCourse;