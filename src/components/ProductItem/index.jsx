import Link from "../Link";
import _ from "lodash";
import { FavoriteIcon2 } from "../Icons";
import { theme } from "antd";
import { useToggleFavoriteProduct, useUserInfo } from "../../react-query";
import styles from "./productitem.module.css";

export default function ProductItem({ product }) {
  const {
    token: { colorBgBase, colorTextFooter, colorTextBase },
  } = theme.useToken();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const { mutate } = useToggleFavoriteProduct();
  const { data: userInfo } = useUserInfo() || {};
  const favorites = userInfo.favorites || [];
  let isFavorite = _.includes(favorites, product.id);
  const toggleFavorite = () => {
    if (!!userInfo?.uid) mutate({ productId: product.id, uid: userInfo?.uid });
  };

  return (
    <div
      style={{
        backgroundColor: colorBgBase,
        color: colorTextFooter,
      }}
    >
      <div className={styles.item}>
        <div onClick={toggleFavorite} className={styles.favorite}>
          <FavoriteIcon2 color={isFavorite ? "#F19D38" : colorTextBase} />
        </div>
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
        </div>
      </div>
    </div>
  );
}
