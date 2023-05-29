import { UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../react-query";
import { useState } from "react";
import styles from "./userinfo.module.css";
import LoginModal from "../LoginCard";

export default function UserInfo(props) {
  const { data: userInfo } = useUserInfo();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const goToProfile = () => {
  //   if (userInfo?.name) navigate("/auth/profile");
  //   else navigate("/auth/login?redirect=/auth/profile");
  // };
  const goToProfile = () => {
    if (userInfo?.name) navigate("/auth/profile");
    else setIsOpen(!isOpen);
  };
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        onClick={goToProfile}
        // onClick={toggleOpen}
        style={{ ...props.style }}
        className={styles.userInfo}
      >
        {userInfo ? (
          <UserOutlined className={styles.userInfoOutlined} />
        ) : (
          <UserSwitchOutlined className={styles.userInfoOutlined} />
        )}
        <p className={styles.userInfoText}>
          {!!userInfo?.name ? `${userInfo.name}'s` : `請登入`}
        </p>
      </div>
      <LoginModal isOpen={isOpen} toggleModal={toggleOpen} />
    </>
  );
}
