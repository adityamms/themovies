"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Posterbesar from "./Posterbesar";
export default function Nowplaying() {
  const [upclist, setUpclist] = useState();

  useEffect(() => {
    const axios = require("axios");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWE1YjI0ZmEzMDlmMmI5YmM2M2NlOGFhOWZkOTA3MyIsInN1YiI6IjY1MDdhZjNlMTA5ZGVjMDBhZWIwMGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DATLoFluqCikZwC4W0MRKSRkEtFiz57SHNriliPRQJ4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setUpclist(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        draggable={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" mt-5 mb-10"
      >
        {upclist &&
          upclist.results.map((item) => {
            return (
              <SwiperSlide key={crypto.randomUUID()}>
                <Posterbesar data={item} key={crypto.randomUUID()} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
