"use client";

import React, { useContext } from "react";
import Styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={Styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={Styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "black" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
