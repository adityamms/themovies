"use client";
import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeContext } from "@/app/layout";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const [typing, setTyping] = useState();
  const { theme } = useContext(ThemeContext);

  const router = useRouter();
  const handleTyping = (e) => {
    if (e.target.value !== null) {
      setTyping(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?search=${typing}`);
  };

  return (
    <div className=" mt-10">
      <form onSubmit={handleSubmit}>
        <div className=" justify-center flex">
          <div className=" flex border border-black w-3/4 md:w-1/2 rounded-lg pl-5 bg-white">
            <SearchIcon className=" self-center" color="primary" />
            <input
              placeholder="Search-bar"
              className={`p-5 rounded-md h-10 outline-none w-full text-black`}
              onChange={handleTyping}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
