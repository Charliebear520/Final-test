import NavLink from "../NavLink";
import { Drawer } from "antd";
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode";
import styles from "./navbar.module.css";

export default function NavBar({ open, onClose }) {
  const NavBarContent = () => (
    <>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        SHOP
      </NavLink>
      <NavLink
        to="/products/category/cookware"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/products/category/home-accessories"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        CONTACT
      </NavLink>

      {/* <CartSummary
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      />
      <SetColorMode
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      /> */}

      {/* <NavLink
        to="/products/category/lighting"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        Lighting
      </NavLink>
      <NavLink
        to="/products/category/textile"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        Textile
      </NavLink>
      <NavLink
        to="/products/category/furniture"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        Furniture
      </NavLink> */}
    </>
  );

  return (
    <>
      <div className={styles.navBar}>
        <NavBarContent />
      </div>
      <Drawer title="CATEGORY" placement="right" onClose={onClose} open={open}>
        <div className={styles.drawer}>
          <NavBarContent />
          <CartSummary />
          <SetColorMode />
        </div>
      </Drawer>
    </>
  );
}
