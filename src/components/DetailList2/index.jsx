import { Row, Col, theme } from "antd";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import detail2 from "../../../src/assets/images/detail2.png";
import styles from "./detaillist2.module.css";

export default function DetailList2() {
  const {
    token: { colorBgFooter, colorTextFooter },
  } = theme.useToken();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div
      style={{
        backgroundColor: colorBgFooter,
        color: colorTextFooter,
      }}
    >
      <Row gutter={[32, 32]} className={styles.section}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 9 }}
          xxl={{ span: 9 }}
          className={styles.detail_col}
        >
          <Row>
            <div className={styles.name}>
              <h1>Store Locator</h1>
            </div>
          </Row>
          <Row>
            <div className={styles.description}>
              <h3>
                Our consultants are available to host you in-store  and
                provide tailored guidance on gift purchases. 
              </h3>
            </div>
          </Row>
          <Row>
            <Button className={styles.button}>
              <span style={{ marginRight: "4rem" }}>Find a nearby store</span>
              <RightOutlined style={{ fontSize: "18px" }} />
            </Button>
          </Row>
        </Col>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 15 }}
          xxl={{ span: 15 }}
          className={styles.image_col}
        >
          <img
            src={detail2}
            alt="detail"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
}
