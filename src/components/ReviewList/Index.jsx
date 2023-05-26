import { Row, Col, theme } from "antd";
import React, { useRef, useState } from "react";
// import ReviewItem from "../ReviewItem/Index";
import styles from "./reviewlist.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import "swiper/css/pagination";

// import required modules
import { Scrollbar } from "swiper";
// import { Pagination } from "swiper";

export default function ReviewList({ reviews }) {
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
      <Row gutter={[32, 32]} className={styles.section}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.head}>
            <h1 className={styles.logo}>reviewers</h1>
            {/* <h4 className={styles.name}>@ntuedtd_ig</h4> */}
          </div>
        </Col>

        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            // modules={[Pagination]}
            // className={styles.mySwiper}
          >
            {reviews.map((review) => (
              <SwiperSlide className={styles.swiper_slide} key={review.id}>
                <img
                  className={styles.photo}
                  src={review.image}
                  alt={review.name}
                />
                <p className={styles.description}>{review.description}</p>
                {/* <p>{review.comment}</p> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </Row>
    </div>
  );
}
