"use client";
import { createContext, useState } from "react";

const Usersearchcontext = createContext();
import React from "react";

export default function Usersearch({ children }) {
  const [check, setCheck] = useState();
  return (
    <>
      <Usersearchcontext.Provider>{children}</Usersearchcontext.Provider>
    </>
  );
}
