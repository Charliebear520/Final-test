import React from "react";
import { useState } from "react";
import { Steps } from "antd";

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
      >
        <div className={props.step1 ? "active" : ""}>Sign-In</div>
        <div className={props.step2 ? "active" : ""}>Shipping</div>
        <div className={props.step3 ? "active" : ""}>Payment</div>
        <div className={props.step4 ? "active" : ""}>Place Order</div>
      </Steps>
    </div>
  );
}
