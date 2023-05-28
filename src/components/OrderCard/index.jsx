import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { useState } from "react";
import detail2 from "../../../src/assets/images/place_order.png";
import styles from "./ordercard.module.css";
import {
  selectCartItems,
  selectPaymentMethod,
  savePrice,
  selectShippingAddress,
} from "../../redux/cartSlice";

export default function OrderCard() {
  const dispatch = useDispatch();
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
    navigate("/");
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
        <h1 className={styles.ordertext}>Order</h1>
        <div>
          <div className={styles.card_body}>
            <h2 className={styles.titleText}>SHIPPING</h2>
            <hr className={styles.hrFooterLine} />
            <p className={styles.infoText}>
              <strong>Name:</strong> {shippingAddress.fullName} <br />
              <hr className={styles.hrNormalLine} />
              <strong>Address: </strong> {shippingAddress.address},
              {shippingAddress.city}, {shippingAddress.postalCode},
              {shippingAddress.country}
            </p>
          </div>
        </div>

        <div>
          <div className={styles.card_body}>
            <h2 className={styles.titleText}>PAYMENT</h2>
            <hr className={styles.hrFooterLine} />
            <p className={styles.infoText}>
              <strong>Method:</strong> {paymentMethod}
            </p>
          </div>
        </div>

        <div>
          <div className={styles.card_body}>
            <h2 className={styles.titleText}>ORDER ITEMS</h2>
            <hr className={styles.hrFooterLine} />

            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              cartItems.map((item) => (
                <Col key={item.id}>
                  <div className={styles.cart_item}>
                    <div className={styles.img_box}>
                      <img
                        className={styles.cart_img}
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.qty}>Qty: {item.qty}</div>
                    </div>
                    <div className={styles.price_content}>
                      <div className={styles.price}>
                        ${item.price * item.qty}
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr className={styles.hrNormalLine} />
                  </div>
                </Col>
              ))
            )}

            <div className={styles.total_content}>
              Total
              <div className={styles.total}>${getTotalPrice()}</div>
            </div>
          </div>
        </div>

        <div className={styles.card_body}>
          <h2 className={styles.titleText}>Order Summary</h2>
          <hr className={styles.hrFooterLine} />
          <div className={styles.total_content}>
            <div>Items</div>
            <div className={styles.total}>${itemsPrice}</div>
          </div>
          <div className={styles.total_content}>
            <div>Shipping</div>
            <div className={styles.total}>${shippingPrice}</div>
          </div>
          <div className={styles.total_content}>
            <div>Tax</div>
            <div className={styles.total}>${taxPrice}</div>
          </div>
          <div>
            <hr className={styles.hrNormalLine} />
          </div>
          <div className={styles.total_content}>
            <div>
              <strong> Order Total</strong>
            </div>
            <div className={styles.total}>
              <strong>${totalPrice}</strong>
            </div>
          </div>
        </div>

        <Button
          className={styles.placeorder__button}
          block
          type="primary"
          onClick={placeOrderHandler}
        >
          Back Home
        </Button>
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
