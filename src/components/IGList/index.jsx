import { Row, Col, theme } from "antd";
import IGItem from "../IGItem";
import styles from "./iglist.module.css";

export default function IGList({ photos }) {
  const {
    token: { colorBgBase, colorTextFooter },
  } = theme.useToken();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div
      style={{
        backgroundColor: colorBgBase,
        color: colorTextFooter,
      }}
    >
      <Row gutter={[32, 32]} className={styles.section}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.head}>
            <h1 className={styles.logo}>Follow us on instagram</h1>
            <h4 className={styles.name}>@ntuedtd_ig</h4>
          </div>
        </Col>
        {photos.map((photo) => (
          <Col
            key={photo.id}
            xs={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            xxl={{ span: 4 }}
          >
            <IGItem photo={photo} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
