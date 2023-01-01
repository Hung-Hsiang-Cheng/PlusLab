import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Cartpage = () => {
  return (
    <Fragment>
      <Link class="dTop" to="/">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM32 26.5479L15.935 42L11 37.2429L32 17L53 37.2429L48.065 42L32 26.5479Z"
            fill="#6F717B"
          />
        </svg>
      </Link>
      <div class="header"></div>
      <div class="orderdetail">
        <div class="dOrderTitle">訂單明細</div>
        <div>
          <span class="sSubtotaltitle">小計</span>
          <span class="sSubtotal">NT $2,400</span>
        </div>
        <div class="sDiscount">
          <input type="checkbox" />
          我要使用折扣碼<span class="sNoSpecial">無法使用</span>
        </div>
        <div class="icodeitems">
          <input class="iDiscountCode" type="text" />
          <input class="iCodeSubmit" type="submit" value="確定" />
        </div>
        <div class="dTotalPrice">NT$ 2,400</div>
        <input class="iorder" type="button" value="結帳" />
      </div>
      <div class="dCartContainer">
        <div>
          <span class="dCartTitle">
            購物車
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.2 19.2C5.88 19.2 4.812 20.28 4.812 21.6C4.812 22.92 5.88 24 7.2 24C8.52 24 9.6 22.92 9.6 21.6C9.6 20.28 8.52 19.2 7.2 19.2ZM0 0V2.4H2.4L6.72 11.508L5.1 14.448C4.908 14.784 4.8 15.18 4.8 15.6C4.8 16.92 5.88 18 7.2 18H21.6V15.6H7.704C7.536 15.6 7.404 15.468 7.404 15.3L7.44 15.156L8.52 13.2H17.46C18.36 13.2 19.152 12.708 19.56 11.964L23.856 4.176C23.952 4.008 24 3.804 24 3.6C24 2.94 23.46 2.4 22.8 2.4H5.052L3.924 0H0ZM19.2 19.2C17.88 19.2 16.812 20.28 16.812 21.6C16.812 22.92 17.88 24 19.2 24C20.52 24 21.6 22.92 21.6 21.6C21.6 20.28 20.52 19.2 19.2 19.2Z"
                fill="#4967FF"
              />
            </svg>
          </span>
        </div>

        <ul class="dCartList">
          <li>
            <img src="https://picsum.photos/250/150" alt="" />
            <div class="dCartitem">
              <a>
                <div class="dCartTiltle">20堂課教你存好股，打造投資現金流</div>
              </a>
              <div class="dCartTeacher">Mr. 某男的</div>
            </div>
            <div class="dOldPrice">NT$ 1,600</div>
            <div class="dSpecailPrice">NT$ 1,200</div>
            <div class="dHr"></div>
          </li>
        </ul>
      </div>
      <div class="dCollectClass">
        <div>
          <span class="dCartTitle">
            我收藏的課程
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
          </span>
        </div>

        <ul class="dCollectlist">
          <li>
            <div class="dCard">
              <img class="imgCard" src="https://picsum.photos/250/150" />
              <div class="shopCart">
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
              <div class="dCardMark">
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
              <div class="dCardtext">
                <div class="dCardScore">
                  <span class="dCardStar">4</span>
                  <span>
                    <svg
                      class="dCardStarActive"
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
                      class="dCardStarActive"
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
                      class="dCardStarActive"
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
                <div class="dCardTitle">20堂課教你存好股，打造投資現金流</div>
                <div class="dCardTeacher">某某某</div>
                <div class="dCardPersonCount">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
                      fill="#9d9faa"
                    />
                  </svg>
                  765人
                </div>
                <div class="dCardClock">
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
                <div class="dCardPrice">NT$ 1,600</div>
              </div>
            </div>
          </li>
        </ul>
        <button class="btnToYouPre">
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
        <button class="btnToYouNext">
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
      </div>
    </Fragment>
  );
};
export default Cartpage;
