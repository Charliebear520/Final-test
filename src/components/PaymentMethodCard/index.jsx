import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Radio, Button } from "antd";
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
          <Form.Item name="paymentMethod" label="Payment Method: ">
            <Radio.Group>
              <Radio value="Google">Google</Radio>
              <Radio value="PayPal">PayPal</Radio>
              <Radio value="Line">Line</Radio>
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
