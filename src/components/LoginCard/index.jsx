import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Modal } from "antd";
import { WarningOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

import { useSignInWithEmailPassword } from "../../react-query";

import styles from "./logincard.module.css";

const LoginCard = ({ redirect, isOpen, toggleModal }) => {
  const { mutate, error, isLoading, isError, isSuccess, data } =
    useSignInWithEmailPassword();
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleCancel = () => toggleModal(!isOpen);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
    }
  }, [isSuccess, redirect]);

  const modalBodyStyle = {
    backgroundColor: "#FEFCF9",
  };

  return (
    <Modal
      title="Member Login"
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      bodyStyle={modalBodyStyle}
    >
      <Form
        name="normal_login"
        className={styles.loginForm}
        form={form}
        layout="vertical"
        initialValues={{
          isRemember: true,
        }}
        onFinish={onFinish}
        // onFihishFailed={onFinishFailed}
      >
        <Form.Item
          label="email "
          name="email"
          className={styles.loginInput}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input bordered={false} placeholder="E-Mail" />
        </Form.Item>
        <Form.Item
          label="password "
          name="password"
          className={styles.loginInput}
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            // prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            bordered={false}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox
              onChange={() => setIsRemember(!isRemember)}
              checked={isRemember}
            >
              Remember me
            </Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          {isLoading ? (
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginForm__button}
              loading
            >
              Log in
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginForm__button}
            >
              Log in
            </Button>
          )}
          {/* Or{" "} */}

          {!isError ? (
            <></>
          ) : (
            <div className={styles.loginForm__errorWrap}>
              <h3 className={styles.loginForm__errorTitle}>
                <WarningOutlined />
                {"  "}There was a problem
              </h3>
              <p className={styles.loginForm__errorMessage}>{error.message}</p>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          <Link className={styles.loginForm__forgot} to={"/"}>
            forget password？
          </Link>
        </Form.Item>
        <p>Join a member</p>
        <Button
          // type="primary"
          htmlType="submit"
          className={styles.registerForm__button}
        >
          <Link to={`/auth/register?redirect=${redirect}`}>register</Link>
        </Button>
      </Form>
    </Modal>
  );
};

export default LoginCard;
