import React from "react";
import Styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination";
import Link from "next/link";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Recent Posts</h1>

      <div className={Styles.posts}>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
