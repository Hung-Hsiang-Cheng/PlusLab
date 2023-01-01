import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Coursepage = () => {
  return (
    <Fragment>
      <Link to="/" className="dTop">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM32 26.5479L15.935 42L11 37.2429L32 17L53 37.2429L48.065 42L32 26.5479Z"
            fill="#6F717B"
          />
        </svg>
      </Link>
      <div className="divSale">
        【限時一週66折】SAM老師的全方位股票分析法<span>02</span>天
        <span>05</span>時<span>02</span>分
        <button>
          立即查看
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
      <div className="divText divHot">
        <span>熱門課程</span>
      </div>
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
      <div className="divText divToYouText">
        <span>為你推薦</span>
      </div>
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
      <div className="divText">
        <span>最近開課</span>
      </div>
      <div className="divNEW">
        <ul className="divNewContainer">
          <li className="dCard">
            <img className="imgCard" src="https://picsum.photos/250/150" />
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
                <span className="dCardStar">4</span>
                <span>
                  <svg
                    className="dCardStarActive"
                    width="18"
                    height="18"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                      fill="#9d9faa"
                    />
                  </svg>
                  <svg
                    className="dCardStarActive"
                    width="18"
                    height="18"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                      fill="#9d9faa"
                    />
                  </svg>
                  <svg
                    className="dCardStarActive"
                    width="18"
                    height="18"
                    viewBox="0 0 18 20"
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
                    height="18"
                    viewBox="0 0 18 20"
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
                    height="18"
                    viewBox="0 0 18 20"
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
              </div>
              <div className="dCardTitle">20堂課教你存好股，打造投資現金流</div>
              <div className="dCardTeacher">某某某</div>
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
                765人
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
                2.5小時
              </div>
              <div className="dCardPrice">NT$ 1,600</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="divText">
        <span>精選課程</span>
      </div>
      <div className="divNEW">
        <ul className="divNewContainer">
          <li className="dCard">
            <img className="imgCard" src="https://picsum.photos/250/150" />
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
                <span className="dCardStar">4</span>
                <span>
                  <svg
                    className="dCardStarActive"
                    width="18"
                    height="18"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                      fill="#9d9faa"
                    />
                  </svg>
                  <svg
                    className="dCardStarActive"
                    width="18"
                    height="18"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                      fill="#9d9faa"
                    />
                  </svg>
                  <svg
                    className="dCardStarActive"
                    width="18"
                    height="18"
                    viewBox="0 0 18 20"
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
                    height="18"
                    viewBox="0 0 18 20"
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
                    height="18"
                    viewBox="0 0 18 20"
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
              </div>
              <div className="dCardTitle">20堂課教你存好股，打造投資現金流</div>
              <div className="dCardTeacher">某某某</div>
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
                765人
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
                2.5小時
              </div>
              <div className="dCardPrice">NT$ 1,600</div>
            </div>
          </li>
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
export default Coursepage;
