import Link from "../Link";
import styles from "./suggestitem.module.css";
import { theme } from "antd";

export default function SuggestItem({ suggestion }) {
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
      <div className={styles.item}>
        <Link to={`/suggestions/id/${suggestion.id}`}>
          <img
            style={{ width: "100%" }}
            src={suggestion.image}
            alt={suggestion.name}
          />
        </Link>
        {/* <div className={styles.info}>
        <h6 className={styles.category}>{product.category}</h6>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
      </div> */}
      </div>
    </div>
  );
}
