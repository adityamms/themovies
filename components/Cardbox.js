"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Swipernya from "./Swipernya";
import Paginationbar from "./Paginationbar";

export default function Cardbox() {
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState();

  const changePage = (e, page) => {
    setPageNum(page);
  };

  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${
        pageNum || 1 + 1
      }`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWE1YjI0ZmEzMDlmMmI5YmM2M2NlOGFhOWZkOTA3MyIsInN1YiI6IjY1MDdhZjNlMTA5ZGVjMDBhZWIwMGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DATLoFluqCikZwC4W0MRKSRkEtFiz57SHNriliPRQJ4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [pageNum]);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-20 mb-40 p-5 md:p-20">
        {data &&
          data.map((item) => {
            return (
              <div className=" w-40 h-40 md:h-56 rounded-2xl relative mt-20 mb-20 pt-10 md:pt-0">
                <Swipernya item={item} />
                <div className=" absolute top-40 md:top-72 overflow-hidden right-0 left-0">
                  <p className=" text-center">{item.title.substring(0, 36)}</p>
                  <p className=" text-center">{item.release_date}</p>
                  <div className="flex justify-center">
                    {item.vote_average < 7 ? (
                      <p className=" text-red-500">{item.vote_average}</p>
                    ) : (
                      <p className=" text-green-500">{item.vote_average}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Paginationbar onChange={changePage} />
    </>
  );
}
