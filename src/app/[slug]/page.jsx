import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

// localhost:3000/blog/1

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/moi.jpg" alt="post" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Gerard Lee </span>
              <span className={styles.date}>13.08.2013</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/4.jpg" alt="post" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae. Dolorum, repellat. Soluta, tempore. Dolorum, repellat.
              Soluta, tempore. Dolorum, repellat. Soluta, tempore. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Corrupti officiis
              dolore libero pariatur veniam quasi dolorum, doloremque delectus
              omnis ducimus, eius sapiente perferendis! Ut.
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem
              accusamus, quasi numquam amet nobis corporis sed, fugit rerum
              labore itaque cupiditate. Assumenda, soluta quam magni dicta
              beatae hic voluptates.
            </p>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem
              accusamus, quasi numquam amet nobis corporis sed, fugit rerum
              labore itaque cupiditate. Assumenda, soluta quam magni dicta
              beatae hic voluptates.
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
