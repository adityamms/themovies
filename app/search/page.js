"use client";

import Swipernya from "@/components/Swipernya";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  return (
    <>
      <div className="border border-black w-full h-screen">
        <div className=" grid grid-cols-5 gap-10 ">
          <div className="relative w-40 h-30">
            <Swipernya />
          </div>
          <div className="relative w-40 h-30">
            <Swipernya />
          </div>
        </div>
      </div>
    </>
  );
}
