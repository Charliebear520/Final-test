import { Row, Col, theme, Skeleton } from "antd";
import CategoryItem from "../CategoryItem";
import styles from "./categorylist.module.css";

export default function CategoryList({ categories, isLoading }) {
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
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.head}>
            <h1 className={styles.logo}>Our Products</h1>
          </div>
        </Col>
        {categories.map((category) => (
          <Col
            key={category.id}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            xxl={{ span: 4 }}
          >
            <Skeleton loading={isLoading} avatar active>
              <CategoryItem category={category} />
            </Skeleton>
          </Col>
        ))}
      </Row>
    </div>
  );
}
