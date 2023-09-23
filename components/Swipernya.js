"use client";

import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { redirect } from "next/navigation";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext, useEffect } from "react";
import { youtoube } from "@/context/Youtoube_context";
import { useRouter } from "next/navigation";

export default function Swipernya({ item }) {
  const router = useRouter();

  const [isHovering, setIsHovering] = useState(false);
  const { yview, setYview } = useContext(youtoube);
  const [video, setVideo] = useState();
  useEffect(() => {
    item &&
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${item.id}?api_key=caa5b24fa309f2b9bc63ce8aa9fd9073&append_to_response=videos`
        )
        .then((data) => {
          setVideo(data.data.videos.results[0]);
        });
  }, []);

  const handleClick = () => {
    setYview((prev) => {
      return {
        src: `https://www.youtube.com/embed/${
          video ? video.key : "dhbUMr4FR_o"
        }?&vq=hd720`,
        open: true,
      };
    });
  };

  const handleMore = () => {
    router.push(`/info?search=${item.id}`);
  };

  const handleMouseOver = (e) => {
    setIsHovering(true);
  };

  const handleMouseOut = (e) => {
    setIsHovering(false);
  };

  const handleremove = () => {
    setYview((prev) => {
      return { ...prev, open: false };
    });
  };

  return (
    <>
      {isHovering && (
        <div className="h-40 md:h-56 justify-center align-middle flex relative">
          <button
            className="absolute z-20 w-20 h-20 rounded-lg top-0 bottom-0 m-auto"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          >
            <YouTubeIcon
              sx={{
                fontSize: 80,
                alignSelf: "center",
                color: "white",
              }}
              className="absolute top:0 md:top-3 left-0 right-0 bottom-0"
            />
          </button>
        </div>
      )}
      <button className="absolute right-2 top-8 z-10" onClick={handleMore}>
        <div className="w-5 h-5 rounded-full border flex justify-center align-middle">
          <MoreHorizIcon sx={{ color: "white" }} className="w-5 h-5" />
        </div>
      </button>

      <img
        src={`https://image.tmdb.org/t/p/original/${item && item.poster_path}`}
        className={`absolute rounded-3xl z-0 right-0 left-0 top-0 hover:blur-sm ${
          isHovering && "blur-sm"
        }`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></img>
    </>
  );
}
