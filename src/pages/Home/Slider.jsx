import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination } from "swiper/modules";
import ArtCard from "../../components/ArtCard/ArtCard";
import React, { useState } from "react";
import { useDataQuery } from "../../hooks/crud/data.query";
import { API_END_POINTS } from "../../utils/api-endpoint";

const ActiveSlider = ({ toggleSidebar }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [swiper, setSwiper] = useState(null);
  const { data: recommendList } = useDataQuery({
    url: API_END_POINTS.recommendation,
    params: {
      limit: 20,
      page: 1,
    },
  });

  return (
    <div className="flex items-center justify-center ">
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={"auto"}
        initialSlide={0}
        breakpoints={{
          md: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          enabled: true,
          type: "custom",
        }}
        modules={[Pagination]}
        centeredSlides={true}
        className="max-w-max h-2/3 items-center justify-center"
        onPaginationUpdate={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {recommendList?.results?.map((item, index) => {
          return (
            <SwiperSlide
              key={item.title}
              onClick={() => {
                swiper.slideTo(index);
              }}
              className="md:pt-8 pt-0"
            >
              <ArtCard
                art={item}
                navigateToArt={false}
                toggleSidebar={toggleSidebar}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="md:block hidden  m-4 bottom-0 left-0 fixed z-20 ">
        <span className=" text-2xl font-light">{activeIndex + 1}</span>{" "}
        <span className="text-solidLove text-2xl font-light">
          {recommendList?.results?.length}
        </span>
      </div>
    </div>
  );
};

export default ActiveSlider;
