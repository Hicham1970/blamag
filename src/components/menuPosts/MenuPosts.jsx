"use client";

import React from "react";
import Link from "next/link";
import Styles from "./menuPosts.module.css";
import Image from "next/image";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={Styles.items}>
      <Link href="/" className={Styles.item}>
        {withImage && (
          <div className={Styles.imageContainer}>
            <Image src="/moi.jpg" alt="" fill className={Styles.image} />
          </div>
        )}

        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.food}`}>Food</span>
          <h3 className={Styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={Styles.details}>
            <span className={Styles.username}>Hicham Gar - </span>
            <span className={Styles.date}>12.09.2006</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={Styles.item}>
        {withImage && (
          <div className={Styles.imageContainer}>
            <Image src="/moi.jpg" alt="" fill className={Styles.image} />
          </div>
        )}

        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.fashion}`}>
            Fashion
          </span>
          <h3 className={Styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={Styles.details}>
            <span className={Styles.username}>Hicham Gar - </span>
            <span className={Styles.date}>12.09.2006</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={Styles.item}>
        {withImage && (
          <div className={Styles.imageContainer}>
            <Image src="/moi.jpg" alt="" fill className={Styles.image} />
          </div>
        )}

        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.coding}`}>Coding</span>
          <h3 className={Styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={Styles.details}>
            <span className={Styles.username}>Hicham Gar - </span>
            <span className={Styles.date}>12.09.2006</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
