import { Form, Input, Button } from "antd";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectShippingAddress } from "../../redux/cartSlice";
import { useState } from "react";
import { Steps } from "antd";
import CheckoutSteps from "../CheckoutSteps";
import styles from "./shippingaddresscard.module.css";
import detail2 from "../../../src/assets/images/shipping&payment.png";

export default function ShippingAddressCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shippingAddress = useSelector(selectShippingAddress);
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const handleSubmit = (values) => {
    navigate("/shopping/payment");
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
        <h1 className={styles.shippingtext}>Shipping Information</h1>
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
        <Form
          onFinish={handleSubmit}
          name="normal_login"
          layout="vertical"
          colon="false"
          className={styles.shippingForm}
          initialValues={shippingAddress}
          form={form}
        >
          <Form.Item
            label="full name "
            className={styles.shippingInput}
            name="fullName"
            rules={[
              {
                type: "string",
              },
              {
                required: true,
                message: "Please input your full name",
              },
            ]}
            hasFeedback
          >
            <Input bordered={false} placeholder="Enter full name" />
          </Form.Item>
          <Form.Item
            label="address "
            className={styles.shippingInput}
            name="address"
            rules={[
              {
                type: "string",
              },
              {
                required: true,
                message: "Please input your address",
              },
            ]}
            hasFeedback
          >
            <Input bordered={false} placeholder="Enter Address" />
          </Form.Item>
          <Form.Item
            label="city "
            className={styles.shippingInput}
            name="city"
            rules={[
              {
                required: true,
                message: "Please input your city",
              },
            ]}
            hasFeedback
          >
            <Input bordered={false} placeholder="Enter city" />
          </Form.Item>

          <Form.Item
            label="postal code "
            className={styles.shippingInput}
            name="postalCode"
            rules={[
              {
                required: true,
                message: "Please input your postal code",
              },
            ]}
            hasFeedback
          >
            <Input bordered={false} placeholder="Enter postal code" />
          </Form.Item>

          <Form.Item
            label="country "
            className={styles.shippingInput}
            name="country"
            rules={[
              {
                required: true,
                message: "Please input your country",
              },
            ]}
            hasFeedback
          >
            <Input bordered={false} placeholder="Enter country" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.shippingForm__button}
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
