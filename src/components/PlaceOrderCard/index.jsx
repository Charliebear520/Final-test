import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { useState } from "react";
import { Steps } from "antd";
import detail2 from "../../../src/assets/images/place_order.png";
import styles from "./placeorder.module.css";
import {
  selectCartItems,
  selectPaymentMethod,
  savePrice,
  selectShippingAddress,
} from "../../redux/cartSlice";

export default function PlaceOrderCard() {
  const cartItems = useSelector(selectCartItems);
  const shippingAddress = useSelector(selectShippingAddress);
  const paymentMethod = useSelector(selectPaymentMethod);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const placeOrderHandler = () => {
    dispatch(
      savePrice({
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
    navigate("/shopping/order");
  };

  const getTotalPrice = () => {
    return cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
      : 0;
  };

  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  const itemsPrice = toPrice(
    cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  const shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
  const taxPrice = toPrice(0.15 * itemsPrice);
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  return (
    <Row gutter={[32, 32]} className={styles.section}>
      <Col
        sm={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 15 }}
        xxl={{ span: 15 }}
        className={styles.detail_col}
      >
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
              status: "finish",
              title: "Shipping",
            },
            {
              status: "finish",
              title: "Payment",
            },
            {
              status: "process",
              title: "Place Order",
            },
          ]}
        />
        <div className="card card-body">
          <h2>Shipping</h2>
          <p>
            <strong>Name:</strong> {shippingAddress.fullName} <br />
            <strong>Address: </strong> {shippingAddress.address},
            {shippingAddress.city}, {shippingAddress.postalCode},
            {shippingAddress.country}
          </p>
        </div>
        <div className="card card-body">
          <h2>Payment</h2>
          <p>
            <strong>Method:</strong> {paymentMethod}
          </p>
        </div>
        <div className="card card-body">
          <h2>Order Items</h2>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                {/* <div className="cart-image">
                  <img src={item.image} alt={item.name} />
                </div> */}
                <div className="cart-item-content">
                  <div className="cart-name">{item.name}</div>
                  <div className="product-qty">Qty: {item.qty}</div>
                </div>
                <div className="cart-item-end">
                  <div className="cart-price">${item.price * item.qty}</div>
                </div>
              </li>
            ))
          )}
          <div className="cart-total-price-wrap">
            Total
            <div className="cart-total-price">${getTotalPrice()}</div>
          </div>
        </div>
        <div className="card card-body">
          <h2>Order Summary</h2>
          <div className="row">
            <div>Items</div>
            <div>${itemsPrice}</div>
          </div>
          <div className="row">
            <div>Shipping</div>
            <div>${shippingPrice}</div>
          </div>
          <div className="row">
            <div>Tax</div>
            <div>${taxPrice}</div>
          </div>
          <div className="row">
            <div>
              <strong> Order Total</strong>
            </div>
            <div>
              <strong>${totalPrice}</strong>
            </div>
          </div>
          <Button
            className="primary-btn"
            block
            type="primary"
            onClick={placeOrderHandler}
          >
            Place Order
          </Button>
        </div>
      </Col>
      <Col
        sm={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 9 }}
        xxl={{ span: 9 }}
        className={styles.image_col}
      >
        <img
          src={detail2}
          alt="detail"
          style={{ width: "100%", maxWidth: "100%" }}
        />
      </Col>
    </Row>
  );
}
