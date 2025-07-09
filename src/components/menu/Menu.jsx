import React from "react";
import Styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.subtitle}>{"What's hot"}</h2>
      <h1 className={Styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={Styles.subtitle}>Discover by topic</h2>
      <h1 className={Styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={Styles.subtitle}>Chosen by Editors</h2>
      <h1 className={Styles.title}>Editors Pick</h1>

      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
