import { Col, Row, Button } from "antd";
import styles from "./intro.module.css";
import { RightOutlined } from "@ant-design/icons";
import image from "../../assets/images/bg.png";

export default function Intro() {
  return (
    <div className={styles.container}>
      <Row gutter={[32, 32]}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.photo}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                testAlign: "center",
                top: 0,
                left: 0,
                height: "100vh",
              }}
            >
              <Row gutter={[32, 32]} className={styles.content}>
                <Col
                  sm={{ span: 12 }}
                  lg={{ span: 12 }}
                  xl={{ span: 9 }}
                  xxl={{ span: 8 }}
                  className={styles.col}
                >
                  {" "}
                  <Row>
                    <div className={styles.name}>
                      <h1>Introducing Aromatique Incense</h1>
                    </div>
                  </Row>
                  <Row>
                    <div className={styles.description}>
                      <h3>
                        Discover a trio of transportive aromas for wandering
                        minds—Murasaki, Kagerou and Sarashina Aromatique
                        Incense—and the Bronze Incense Holder that elevates
                        their unassuming form.
                      </h3>
                    </div>
                  </Row>
                  <Row>
                    <Button className={styles.button}>
                      <span style={{ marginRight: "4rem" }}>
                        Explore the collection
                      </span>
                      <RightOutlined style={{ fontSize: "18px" }} />
                    </Button>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
