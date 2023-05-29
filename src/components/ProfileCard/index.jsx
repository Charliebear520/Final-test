import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { Row, Col } from "antd";
import styles from "./profilecard.module.css";
import { useUpdateProfile, useLogout, useUserInfo } from "../../react-query";
import detail2 from "../../../src/assets/images/profile.png";

const ProfileCard = ({ redirect }) => {
  const { data: userInfo } = useUserInfo() || {};
  const update = useUpdateProfile();
  const logout = useLogout();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onUpdate = async (values) => {
    console.log("Received update info: ", values);
    update.mutate({ ...values, uid: userInfo.uid });
  };

  const onLogout = () => {
    logout.mutate();
    navigate("/");
  };

  useEffect(() => {
    form.setFieldsValue(userInfo);
  }, [userInfo]);

  return (
    <Row gutter={[32, 32]} className={styles.section}>
      <Col
        sm={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 15 }}
        xxl={{ span: 15 }}
        className={styles.detail_col}
      >
        <h1 className={styles.profiletext}>User Profile</h1>
        <Form
          onFinish={onUpdate}
          name="normal_login"
          layout="vertical"
          className={styles.profileForm}
          form={form}
          initialValues={userInfo}
        >
          <Form.Item
            label="name "
            name="name"
            className={styles.profileInput}
            rules={[
              {
                type: "string",
                message: "並非有效的姓名!",
              },
              {
                message: "請輸入你的姓名!",
              },
            ]}
          >
            <Input bordered={false} placeholder={userInfo.name} />
          </Form.Item>
          <Form.Item
            label="address "
            name="adrs"
            className={styles.profileInput}
            rules={[
              {
                type: "string",
                message: "並非有效的電話號碼!",
              },
              {
                message: "請輸入你的電話號碼!",
              },
            ]}
          >
            <Input bordered={false} placeholder={userInfo?.adrs || ""} />
          </Form.Item>
          <Form.Item
            label="phone-number "
            name="tel"
            className={styles.profileInput}
            rules={[
              {
                type: "string",
                message: "並非有效的電話號碼!",
              },
              {
                message: "請輸入你的電話號碼!",
              },
            ]}
          >
            <Input
              bordered={false}
              placeholder={userInfo?.tel || "xxxx-xxxxxx"}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.profileForm__button}
            >
              Submit
            </Button>

            <Button
              type="primary"
              style={{ marginTop: "1rem" }}
              // danger
              className={styles.logoutForm__button}
              onClick={onLogout}
            >
              Log out
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
        {" "}
        <img
          src={detail2}
          alt="detail"
          style={{ width: "100%", maxWidth: "100%" }}
        />
      </Col>
    </Row>
  );
};
export default ProfileCard;
