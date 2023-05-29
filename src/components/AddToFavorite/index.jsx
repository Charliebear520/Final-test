import { Button, notification, theme } from "antd";
import { useDispatch } from "react-redux";
import { addLikeItems } from "../../redux/likeSlice";
import styles from "./addtofavorite.module.css";
import _ from "lodash";
import { Basket } from "../Icons";
import { FavoriteIcon2 } from "../Icons";
import { useToggleFavoriteProduct, useUserInfo } from "../../react-query";

export default function AddToFavorite({ product, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: "Shopping Notification",
      description: `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${
        qty > 1 ? "have" : "has"
      } been added to your cart.`,
      placement: "bottomRight",
    });
  };

  const {
    token: { colorTextBase },
  } = theme.useToken();

  //   const addToLike = () => {
  //     openNotification();
  //     dispatch(
  //       addLikeItems({
  //         id: product.id,
  //         name: product.name,
  //         image: product.image,
  //         price: product.price,
  //         countInStock: product.countInStock,
  //         qty,
  //       })
  //     );
  //   };

  const { mutate } = useToggleFavoriteProduct();
  const { data: userInfo } = useUserInfo() || {};
  const favorites = userInfo.favorites || [];
  let isFavorite = _.includes(favorites, product.id);
  const addToLike = () => {
    if (!!userInfo?.uid) mutate({ productId: product.id, uid: userInfo?.uid });
    dispatch(
      addLikeItems({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty,
      })
    );
  };

  return (
    // <Button type="primary" className={styles.btn} onClick={addToLike}>
    //   {/* <Basket color={"#ffffff"} />{" "} */}
    //   <p className={styles.qty}>Add to your cart -${product.price * qty}</p>
    // </Button>
    <div onClick={addToLike} className={styles.favorite}>
      <FavoriteIcon2 color={isFavorite ? "#F19D38" : colorTextBase} />
    </div>
  );
}
