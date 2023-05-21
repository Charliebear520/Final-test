import Link from "../Link";
import { FavoriteIcon } from "../Icons";
import { theme } from "antd";
import styles from "./productitem.module.css";

export default function ProductItem({ product }) {
  const {
    token: { colorBgBase, colorTextFooter },
  } = theme.useToken();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const toggleFavorite = () => {
    console.log("toggleFavorite", product.id);
  };

  return (
    <div
      style={{
        backgroundColor: colorBgBase,
        color: colorTextFooter,
      }}
    >
      <div className={styles.item}>
        <Link to={`/products/id/${product.id}`}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={product.image}
            alt={product.name}
          />
        </Link>
        <div className={styles.info}>
          {/* <h6 className={styles.category}>{product.category}</h6> */}
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          {/* <div className={styles.more}>
          <Link to={`/products/id/${product.id}`} className={styles.link}>
            See More ...
          </Link>
          <span className={styles.textGray}>USD {product.price}.00</span>
        </div> */}
          <div onClick={toggleFavorite} className={styles.favorite}>
            <FavoriteIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
