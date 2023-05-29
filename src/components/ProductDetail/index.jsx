import { useState, useEffect } from "react";
import { Row, Col, Select, theme, Skeleton } from "antd";
import { useSearchParams } from "react-router-dom";
import AddToBasket from "../AddToBasket";
import styles from "./productdetail.module.css";
const { Option } = Select;

function ProductDetail({ product, isLoading }) {
  const {
    token: { colorBgFooter, colorTextFooter },
  } = theme.useToken();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [searchParams] = useSearchParams();
  const qtyFromBasket = searchParams.get("qtyFromBasket");
  const initQty = !!qtyFromBasket
    ? Number(qtyFromBasket)
    : product.countInStock > 0
    ? 1
    : 0;
  const [qty, setQty] = useState(initQty);

  useEffect(() => {
    setQty(initQty);
  }, [initQty]);

  return (
    <div
      style={{
        backgroundColor: colorBgFooter,
        color: colorTextFooter,
      }}
    >
      <Row gutter={[32, 32]} style={{ justifyContent: "center" }}>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <Skeleton loading={isLoading} active>
            <img
              alt={product.name}
              className={styles.image}
              src={product.image}
            />
          </Skeleton>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 14 }}>
          <Skeleton loading={isLoading} active>
            <div className={styles.info}>
              <h2 className={styles.category}>{product.category}</h2>
              <h1 className={styles.name}>{product.name}</h1>

              {/* {product.description_long.map((str) => (
                <p key={str} className={styles.description}>
                  {str}
                </p>
              ))} */}
              <p className={styles.description}>{product.description_long}</p>
              <hr className={styles.hrBoldLine} />
              <h3>Suited to</h3>
              <p className={styles.text}>{product.suit}</p>
              <hr className={styles.hrThinLine} />
              <h3>Aroma</h3>
              <p className={styles.text}>{product.aroma}</p>
              <hr className={styles.hrThinLine} />
              <h3>Key ingredients</h3>
              <p className={styles.text}>{product.ingredients}</p>
              <hr className={styles.hrThinLine} />
              <h3>Size</h3>
              <p className={styles.text}>{product.size}</p>

              <div className={styles.wrap}>
                {/* <p className={styles.price}>US${product.price}.00</p>
              <p className={styles.status}>
                Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
              </p> */}

                {/* <p className={styles.qty}>Total Price: {product.price * qty}</p> */}
                <div className={styles.qty}>
                  Qty: {"   "}
                  <Select
                    defaultValue={qty}
                    key={qty}
                    className={styles.selectStyle}
                    onChange={(val) => setQty(val)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <Option key={x + 1} value={x + 1}>
                        {x + 1}
                      </Option>
                    ))}
                  </Select>
                </div>
                <AddToBasket product={product} />
              </div>
            </div>
          </Skeleton>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
