"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [cparams, setCparams] = useState(search);

  //   useEffect(() => {
  //     console.log(cparams);
  //   }, [cparams]);

  //   const axios = require("axios");

  //   const options = {
  //     method: "GET",
  //     url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity&append_to_response=videos,image",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWE1YjI0ZmEzMDlmMmI5YmM2M2NlOGFhOWZkOTA3MyIsInN1YiI6IjY1MDdhZjNlMTA5ZGVjMDBhZWIwMGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DATLoFluqCikZwC4W0MRKSRkEtFiz57SHNriliPRQJ4",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

  return <div>{search}</div>;
}
