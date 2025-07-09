"use client";

import Styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";


const Card = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imageContainer}>
              <Image src="/6.jpg" alt="post" fill className={Styles.image} />
      </div>
      <div className={Styles.textContainer}>
        <div className={Styles.details}>
          <span className={Styles.date}>10.12.2012 - </span>
          <span className={Styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1 className={Styles.title}>
            Lorem ipsum dolor sit amet consectetur. 
          </h1>
        </Link>
        <p className={Styles.desc}>
          Veniam labore lorem elitr eum takimata commodo eirmod nulla feugiat
          elit diam aliquyam delenit et lorem quis gubergren esse eos dolores ut
          et enim ipsum nonumy consetetur elitr sanctus sed vero quis iusto
          sanctus magna eos nisl et takimata dolore veniam lorem at magna
          takimata no esse dolor.
        </p>
        <Link className={Styles.link} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
