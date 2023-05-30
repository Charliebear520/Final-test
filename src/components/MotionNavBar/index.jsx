import { Drawer } from "antd";
import { useState } from "react";
import { motion } from "framer-motion";
import { Grid } from "antd";
const { useBreakpoint } = Grid;
import MotionNavLink from "../MotionNavLink";

import styles from "./navbar.module.css";

export default function NavBar({ open, onClose }) {
  const [selected, setSelected] = useState(0);
  const { md } = useBreakpoint();

  const navAnimation = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };

  const NavBarContent = (props) => (
    <motion.ul {...props} style={{ listStyleType: "none" }}>
      <MotionNavLink
        onClick={() => setSelected(0)}
        id={0}
        selected={selected}
        to="/"
      >
        Home
      </MotionNavLink>
      <MotionNavLink
        onClick={() => setSelected(1)}
        id={1}
        selected={selected}
        to="/shop"
      >
        Shop
      </MotionNavLink>
    </motion.ul>
  );

  const NavBarContent2 = (props) => (
    <motion.ul {...props} style={{ listStyleType: "none" }}>
      <MotionNavLink
        onClick={() => setSelected(0)}
        id={0}
        selected={selected}
        to="/"
      >
        HOME
      </MotionNavLink>
      <MotionNavLink
        onClick={() => setSelected(1)}
        id={1}
        selected={selected}
        to="/shop"
      >
        SHOP
      </MotionNavLink>
      <MotionNavLink
        onClick={() => setSelected(1)}
        id={1}
        selected={selected}
        to="/shop"
      >
        BASKET
      </MotionNavLink>
      <MotionNavLink
        onClick={() => setSelected(1)}
        id={1}
        selected={selected}
        to="login"
      >
        LOGIN
      </MotionNavLink>
    </motion.ul>
  );

  return (
    <motion.div>
      {md ? (
        <motion.div>
          <NavBarContent className={styles.navBar} />
        </motion.div>
      ) : (
        <Drawer title="CATEGORY" placement="left" onClose={onClose} open={open}>
          <motion.div>
            <NavBarContent2 className={styles.Drawer} />
          </motion.div>
        </Drawer>
      )}
    </motion.div>
  );
}
