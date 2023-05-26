import Link from "../Link";
import { theme } from "antd";
import NavLink from "../NavLink";
import styles from "./categoryitem.module.css";

export default function CategoryItem({ category }) {
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
        <NavLink to={`/products/category/${category.name}`}>
          <img
            style={{ width: "100%" }}
            src={category.image}
            alt={category.name}
          />
        </NavLink>
      </div>
      <h3 className={styles.name}>{category.category}</h3>
    </div>
  );
}
