"use client";

import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";


const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
              <Image src="/6.jpg" alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>10.12.2012 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>
            {item.title}
          </h1>
        </Link>
        <p className={styles.desc}>
          Veniam labore lorem elitr eum takimata commodo eirmod nulla feugiat
          elit diam aliquyam delenit et lorem quis gubergren esse eos dolores ut
          et enim ipsum nonumy consetetur elitr sanctus sed vero quis iusto
          sanctus magna eos nisl et takimata dolore veniam lorem at magna
          takimata no esse dolor.
        </p>
        <Link className={styles.link} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
