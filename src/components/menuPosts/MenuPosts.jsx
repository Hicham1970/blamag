"use client";

import React from "react";
import Link from "next/link";
import styles from "./menuPosts.module.css";
import Image from "next/image";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/moi.jpg" alt="" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Hicham Gar - </span>
            <span className={styles.date}>12.09.2006</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/moi.jpg" alt="" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Hicham Gar - </span>
            <span className={styles.date}>12.09.2006</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/moi.jpg" alt="" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Hicham Gar - </span>
            <span className={styles.date}>12.09.2006</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
