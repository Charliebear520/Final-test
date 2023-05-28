import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Radio, Button, Space } from "antd";
import { Row, Col } from "antd";
import { useState } from "react";
import { Steps } from "antd";
import { selectPaymentMethod, savePaymentMethod } from "../../redux/cartSlice";
import styles from "./paymentmethodcard.module.css";
import detail2 from "../../../src/assets/images/shipping&payment.png";

export default function PaymentMethodCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { paymentMethod: paymentMethod } = useSelector(selectPaymentMethod);
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const handleSubmit = ({ paymentMethod: value }) => {
    dispatch(savePaymentMethod(value));
    navigate("/shopping/placeorder");
  };

  return (
    <Row gutter={[32, 32]} className={styles.section}>
      <Col
        sm={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 15 }}
        xxl={{ span: 15 }}
        className={styles.detail_col}
      >
        <h1 className={styles.shippingtext}>Payment Method</h1>
        <Steps
          type="navigation"
          current={current}
          onChange={onChange}
          className={styles.site_navigation_steps}
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
              status: "process",
              title: "Payment",
            },
            {
              status: "wait",
              title: "Place Order",
            },
          ]}
        />
        <Form
          onFinish={handleSubmit}
          name="normal_login"
          className={styles.paymentForm}
          initialValues={paymentMethod}
          form={form}
        >
          <Form.Item name="paymentMethod">
            <Radio.Group className={styles.radiogroup}>
              <Space direction="vertical">
                <Radio value="Google" className={styles.radiotext}>
                  google
                </Radio>
                <Radio value="PayPal" className={styles.radiotext}>
                  paypal
                </Radio>
                <Radio value="Line" className={styles.radiotext}>
                  line
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.paymentForm__button}
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
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
