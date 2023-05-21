import { Row, Col, theme, Skeleton } from "antd";
import ProductItem from "../ProductItem";
import styles from "./productlist.module.css";

export default function ProductList({ products, isLoading }) {
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
        {products.map((product) => (
          <Col
            key={product.id}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
            xxl={{ span: 4 }}
          >
            <Skeleton loading={isLoading} avatar active>
              <ProductItem product={product} />
            </Skeleton>
          </Col>
        ))}
      </Row>
    </div>
  );
}
