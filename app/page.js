"use client";
import Nowplaying from "@/components/Nowplaying";
import SlideCard from "@/components/SlideCard";
import Searchbar from "@/components/Searchbar";
import Cardbox from "@/components/Cardbox";
import { useEffect, useState } from "react";
import Youtoube_View from "@/components/Youtoube_View";

export default function Home() {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();

  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWE1YjI0ZmEzMDlmMmI5YmM2M2NlOGFhOWZkOTA3MyIsInN1YiI6IjY1MDdhZjNlMTA5ZGVjMDBhZWIwMGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DATLoFluqCikZwC4W0MRKSRkEtFiz57SHNriliPRQJ4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        //top rated
        setData1(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWE1YjI0ZmEzMDlmMmI5YmM2M2NlOGFhOWZkOTA3MyIsInN1YiI6IjY1MDdhZjNlMTA5ZGVjMDBhZWIwMGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DATLoFluqCikZwC4W0MRKSRkEtFiz57SHNriliPRQJ4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        //data 2
        setData2(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        <Nowplaying />
        <SlideCard item={data1} />

        <SlideCard item={data2} />
        <Youtoube_View />
        <Searchbar />

        <Cardbox />
      </div>
    </>
  );
}
