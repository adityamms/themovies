"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Posterbesar from "@/components/Posterbesar";
import axios from "axios";
import Youtoube_View from "@/components/Youtoube_View";
import Link from "next/link";

export default function page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [item, setItem] = useState();
  console.log(item);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${search}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWE1YjI0ZmEzMDlmMmI5YmM2M2NlOGFhOWZkOTA3MyIsInN1YiI6IjY1MDdhZjNlMTA5ZGVjMDBhZWIwMGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DATLoFluqCikZwC4W0MRKSRkEtFiz57SHNriliPRQJ4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setItem(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [search]);
  return (
    <>
      <Swiper
        centeredSlides={true}
        draggable={true}
        modules={[Pagination, Navigation]}
        className=" mt-5 mb-10"
      >
        <SwiperSlide key={crypto.randomUUID()}>
          <Posterbesar data={item} key={crypto.randomUUID()} />
        </SwiperSlide>
      </Swiper>
      <div className="p-5 gap-5 grid">
        <h2 className="gap-5">
          home page :
          <Link href={`${item && item.homepage}`}>{item && item.homepage}</Link>
        </h2>
        <p>language : {item && item.original_language}</p>
        <div className="flex gap-5">
          genres :
          {item &&
            item.genres.map((item) => {
              return <p>{item && item.name}</p>;
            })}
        </div>
        <div className="grid mb-20">
          <h2>description : </h2>
          <p>{item && item.overview}</p>
        </div>
      </div>
      <Youtoube_View />
    </>
  );
}
