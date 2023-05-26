import { Row, Col, theme } from "antd";
import React, { useRef, useState } from "react";
// import ReviewItem from "../ReviewItem/Index";
import styles from "./suggestlist.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";

export default function SuggestList({ suggestions }) {
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
      <Row gutter={[32, 32]} className={styles.section}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.head}>
            <h1 className={styles.logo}>You may also like</h1>
            {/* <h4 className={styles.name}>@ntuedtd_ig</h4> */}
          </div>
        </Col>

        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className={styles.mySwiper}
          >
            {suggestions.map((suggestion) => (
              <SwiperSlide className={styles.swiper_slide} key={suggestion.id}>
                <img
                  className={styles.photo}
                  src={suggestion.image}
                  alt={suggestion.name}
                />
                <p>{suggestion.name}</p>
                <p>{suggestion.description}</p>
                {/* <p>{review.comment}</p> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </Row>
    </div>
  );
}
