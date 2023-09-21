"use client";
import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeContext } from "@/app/layout";

let data = [
  { nama: "aditya", kelas: 12 },
  { nama: "aditya", kelas: 12 },
  { nama: "aditya", kelas: 12 },
  { nama: "aditya", kelas: 12 },
  { nama: "aditya", kelas: 12 },
];

export default function Searchbar() {
  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    if (e !== undefined) {
      setImmediate();
    }
  };

  return (
    <div className=" mt-10">
      <form>
        <div className=" justify-center flex">
          <div className=" flex border border-black w-3/4 md:w-1/2 rounded-lg pl-5 bg-white">
            <SearchIcon className=" self-center" color="primary" />
            <input
              placeholder="Search-bar"
              className={`p-5 rounded-md h-10 outline-none w-full text-black`}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
