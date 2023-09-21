"use client";
import Link from "next/link";
import React from "react";

export default function Footbar() {
  return (
    <div className=" bg-slate-800 h-20 justify-center flex">
      <Link
        href={"https://www.instagram.com/adityamms_/"}
        className=" self-center hover:text-white"
      >
        @adityamms
      </Link>
    </div>
  );
}
