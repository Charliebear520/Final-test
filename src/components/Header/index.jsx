import { useState } from "react";
import { Row, Col } from "antd";
import Link from "../Link";
import NavBar from "../MotionNavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu";
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode";
import UserInfo from "../UserInfo";
import Favorite from "../Favorite";

export default function Header({ title, slogan }) {
  const [isOnTouch, setIsOnTouch] = useState(false);

  return (
    <div className="container">
      <div className={styles.news}>
        <Link to="/">
          <a className={styles.newsTitle}>
            Enjoy complimentary standard delivery on all orders. +
          </a>
        </Link>
      </div>
      <div>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <h1 className={styles.headerTitle}>{title}</h1>
            </Link>
            {/* <p className={styles.headerSlogan}>{slogan}</p> */}
          </div>
          <NavBar
            open={isOnTouch}
            onClose={() => setIsOnTouch(false)}
            className={styles.navbar}
          />
          {/* <Row gutter={[32, 32]}>
            <Col
              sm={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
            > */}

          {/* </Col>
          </Row> */}
          <HamburgerMenu
            onClick={() => setIsOnTouch(!isOnTouch)}
            isOnTouch={isOnTouch}
          />

          <div className={styles.iconWrap}>
            <SetColorMode
              open={isOnTouch}
              onClose={() => setIsOnTouch(false)}
            />
            <Favorite open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            <CartSummary open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            <UserInfo />
          </div>
        </header>
      </div>
    </div>
  );
}
