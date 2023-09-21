"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swipernya from "./Swipernya";

export default function SlideCard({ item }) {
  return (
    <>
      <div className="relative p-5 ">
        <div className=" flex justify-between">
          <button className=" top-5 mr-10 self-end">more..</button>
        </div>
        <Swiper
          breakpoints={{
            200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          grabCursor={true}
          modules={[FreeMode, Pagination]}
          className=" mt-10 h-72 md:h-96 "
        >
          {item &&
            item.map((data) => {
              return (
                <SwiperSlide key={crypto.randomUUID()}>
                  <Swipernya item={data} />
                  <div className=" absolute top-48 md:top-72 overflow-hidden right-0 left-0">
                    <p className=" text-center">
                      {data.title.substring(0, 30)}
                    </p>

                    <div className="flex justify-center">
                      {data.vote_average < 7 ? (
                        <p className=" text-red-500">{data.vote_average}</p>
                      ) : (
                        <p className=" text-green-500">{data.vote_average}</p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      {/* ... */}
    </>
  );
}
