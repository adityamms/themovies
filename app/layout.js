"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footbar from "@/components/Footbar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { useState, createContext, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Youtoube_context from "@/context/Youtoube_context";
import { dark } from "@mui/material/styles/createPalette";

register();

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "THE MOVIES LIST",
//   description: "Sea current trend,poppular movie",
// };

export const ThemeContext = createContext();

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    // Check if localStorage is available (client-side).
    if (typeof window !== "undefined") {
      setTheme(JSON.parse(window.localStorage.getItem("dark") || false));
    }
  }, [theme]);

  const darkTheme = createTheme({
    palette: {
      mode: theme ? "dark" : "light",
    },
  });

  const handleClick = () => {
    setTheme((e) => {
      localStorage.setItem("dark", !e);
      return !e;
    });
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Navbar onClick={handleClick} chek={theme} />
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Youtoube_context>{children}</Youtoube_context>
          </ThemeProvider>

          <Footbar />
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
