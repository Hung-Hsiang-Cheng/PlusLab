import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
const StarScore = () => {
  
  const State = {
    ToYou: [
      {
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 4,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
      },
      {
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 4,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
      },
      {
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 3,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
      },
      {
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 4,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
      },
    ],
    seach: [
      {
        "title": "量價交易精髓：打造股票、期貨完美交易策略",
        "time": "2023-01-02 15:15:30",
      },
    ],
  };

 
  let starBox = [];
 
    for (let i = 0; i < State.ToYou[0].star; i++) {
      starBox.push("sOnStar");
    }

    if (starBox.length < 5) {
      for (let i = 0; i < 5 - State.ToYou[0].star; i++) {
        starBox.push("");
      }
   

    return (
   
    <Fragment>
      {starBox.map((v,i) => {
        return (
          <span key={i}>
            <svg
              className={starBox[i]}
              width="18"
              height="18"
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
        );
      })}
    </Fragment>
  );
};
}

export default StarScore;
