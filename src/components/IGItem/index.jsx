import Link from "../Link";
import styles from "./igitem.module.css";
import { theme } from "antd";

export default function IGItem({ photo }) {
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
      <div className={styles.item}>
        <Link to={`/photos/id/${photo.id}`}>
          <img style={{ width: "100%" }} src={photo.image} alt={photo.name} />
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
