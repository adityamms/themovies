"use client";
import React from "react";
import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function Navbar({ onClick, chek }) {
  return (
    <div className=" bg-slate-800 h-20 p-5">
      <div className=" flex justify-between">
        <a href="/" className="text-white underline ">
          THE MOVIES
        </a>
        <div className="flex gap-5">
          <Switch onChange={onClick} checked={chek} />
          <button>LOGIN</button>
          <button>REGISTER</button>
        </div>
      </div>
    </div>
  );
}
