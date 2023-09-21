"use client";
import React, { createContext, useState } from "react";

export const youtoube = createContext();

export default function Youtoube_context({ children }) {
  const [yview, setYview] = useState({
    src: "https://adityamms.github.io/PersonalWebsite/",
    open: true,
  });
  return (
    <>
      <youtoube.Provider value={{ yview, setYview }}>
        {children}
      </youtoube.Provider>
    </>
  );
}
