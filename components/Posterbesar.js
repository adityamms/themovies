"use client";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { youtoube } from "@/context/Youtoube_context";
import { YouTube } from "@mui/icons-material";
import axios from "axios";

export default function Posterbesar({ data }) {
  const [ishover, setIshover] = useState();
  const { yview, setYview } = useContext(youtoube);
  const [video, setVideo] = useState();

  useEffect(() => {
    data &&
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${data.id}?api_key=caa5b24fa309f2b9bc63ce8aa9fd9073&append_to_response=videos`
        )
        .then((data) => {
          setVideo(data.data.videos.results[0]);
        });
  }, []);

  const handleMouse = () => {
    setIshover(true);
  };

  const handleMouseLeave = () => {
    setIshover(false);
  };

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

  let title = data.title;

  return (
    <>
      <div className="p-5 md:p-10 rounded-sm">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          className="w-full h-60 md:h-96  bg-clip-content shadow-md shadow-white"
          onMouseOver={handleMouse}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      {ishover && (
        <div
          className="absolute top-20 md:top-40 right-20 md:left-1/2 left-40 m-auto"
          onMouseOver={handleMouse}
        >
          <button onClick={handleClick}>
            <YouTube sx={{ fontSize: 100, color: "white" }} />
          </button>
        </div>
      )}

      <div className="p-5 flex justify-center">
        <h2 className=" font-bold  text-2xl">{title}</h2>
      </div>
    </>
  );
}
