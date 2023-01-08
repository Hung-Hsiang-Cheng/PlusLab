import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Top from "../components/Top";
import OrderGoup from "../components/orderhistory/OrderGoup";
import Mark from "../components/CartPage/Mark";
import cart from "../components/CartPage/img/cart.svg";
import history from "../components/orderhistory/img/history.svg";
import collectCourse from "../components/CartPage/img/collectCourse.svg";
const OrderHistory = () => {
  let title = [
    {
      key: 1,
      title: "訂單紀錄",
      iconPath: history,
      compos: OrderGoup,
    },
  ];

  return (
    <Fragment>
      <div className="headerss"></div>

      {title.map((t) => {
        return (
          <div className="dCartContainer" key={t.key}>
            <div className="dcartPageTitle">
              <span className="dCartTitle">
                {t.title}
                <img src={t.iconPath} />
              </span>
            </div>
            <div className="cartcompos">
              <t.compos />
            </div>
          </div>
        );
      })}
      <Top />

    
    </Fragment>
  );
};
export default OrderHistory;
