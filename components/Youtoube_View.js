"use client";
import React, { useState, useEffect, useContext } from "react";
import { Backdrop } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { youtoube } from "@/context/Youtoube_context";

export default function Youtoube_View({ item }) {
  const { yview, setYview } = useContext(youtoube);

  const handleremove = () => {
    setYview((prev) => {
      return { ...prev, open: false };
    });
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={yview.open}
      className="grid"
    >
      <div className="absolute flex lg:top-20 lg:right-40 top-20 right-0  justify-evenly">
        <div>
          <button className="w-20 h-20 " onClick={handleremove}>
            <CloseIcon sx={{ fontSize: 50, textAlign: "center" }} />
          </button>
        </div>
      </div>

      {yview.open && (
        <>
          <iframe
            className="absolute h-1/2 w-3/4 top-0 left-0 right-0 bottom-0 m-auto"
            src={yview.src}
            allowFullScreen={true}
            allow="fullScreen"
            gyroscope
            vr
            id="frame"
          />
        </>
      )}
    </Backdrop>
  );
}
