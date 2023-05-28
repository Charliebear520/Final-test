import React from "react";
import { useState } from "react";
import { Steps } from "antd";
import styles from "./checkoutsteps.module.css";

export default function CheckoutSteps(props) {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  return (
    <div className="container checkout-steps">
      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            status: "finish",
            title: "Sign-In",
          },
          {
            status: "process",
            title: "Shipping",
          },
          {
            status: "wait",
            title: "Payment",
          },
          {
            status: "wait",
            title: "Place Order",
          },
        ]}
      />
      {/* <div className={props.step1 ? "active" : ""}>Sign-In</div>
        <div className={props.step2 ? "active" : ""}>Shipping</div>
        <div className={props.step3 ? "active" : ""}>Payment</div>
        <div className={props.step4 ? "active" : ""}>Place Order</div> */}
    </div>
  );
}
