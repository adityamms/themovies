"use client";

import Swipernya from "@/components/Swipernya";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "@/components/Searchbar";
import Youtoube_View from "@/components/Youtoube_View";

export default function Page() {
  const searchParams = useSearchParams();
  const [data, setData] = useState();

  const search = searchParams.get("search");

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
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
  }, [search]);

  return (
    <>
      <div className=" justify-center align-middle flex">
        <h2 className=" text-lg mt-20">search your trailer</h2>
      </div>
      <Searchbar />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-20 mb-40 p-5 md:p-20">
        {data &&
          data.map((item) => {
            return (
              <div
                className=" w-40 h-40 md:h-56 rounded-2xl relative mt-20 mb-24 pt-10 md:pt-0"
                key={crypto.randomUUID()}
              >
                <Swipernya item={item} />
                <div className=" absolute top-64 md:top-72 overflow-hidden right-0 left-0">
                  <p className=" text-center">{item.title.substring(0, 30)}</p>
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
      <Youtoube_View />
    </>
  );
}
