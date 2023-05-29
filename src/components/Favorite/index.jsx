import { Badge, theme } from "antd";
import { FavoriteIcon2 } from "../Icons";
import { useState } from "react";
import { useUserInfo } from "../../react-query";
import FavoriteModal from "../FavoriteModal";
import styles from "./favorite.module.css";

export default function Favorite() {
  const {
    token: { colorTextBase },
  } = theme.useToken();
  const { data: userInfo } = useUserInfo() || {};
  const [isOpen, setIsOpen] = useState(false);
  const favorites = userInfo.favorites || [];
  const count = favorites.length;
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div onClick={toggleOpen} className={styles.favorite}>
        <Badge count={count} color="#F19D38" style={{ color: "white" }}>
          <FavoriteIcon2 color={colorTextBase} />
        </Badge>
      </div>
      <FavoriteModal isOpen={isOpen} toggleModal={toggleOpen} />
    </>
  );
}
