import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/moi.jpg"
              alt="post"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Cali Hilton</span>
              <span className={styles.date}>12.11.1983</span>
            </div>
          </div>
          <p className="styles.description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            dolore eum harum pariatur ex enim, asperiores fuga iusto nostrum
            quo, corrupti aspernatur reprehenderit quis, et exercitationem eos!
            Pariatur qui ipsa quod cupiditate doloremque, earum sed!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/moi.jpg"
              alt="post"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Cali Hilton</span>
              <span className={styles.date}>12.11.1983</span>
            </div>
          </div>
          <p className="styles.description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            dolore eum harum pariatur ex enim, asperiores fuga iusto nostrum
            quo, corrupti aspernatur reprehenderit quis, et exercitationem eos!
            Pariatur qui ipsa quod cupiditate doloremque, earum sed!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/moi.jpg"
              alt="post"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Cali Hilton</span>
              <span className={styles.date}>12.11.1983</span>
            </div>
          </div>
          <p className="styles.description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            dolore eum harum pariatur ex enim, asperiores fuga iusto nostrum
            quo, corrupti aspernatur reprehenderit quis, et exercitationem eos!
            Pariatur qui ipsa quod cupiditate doloremque, earum sed!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/moi.jpg"
              alt="post"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Cali Hilton</span>
              <span className={styles.date}>12.11.1983</span>
            </div>
          </div>
          <p className="styles.description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            dolore eum harum pariatur ex enim, asperiores fuga iusto nostrum
            quo, corrupti aspernatur reprehenderit quis, et exercitationem eos!
            Pariatur qui ipsa quod cupiditate doloremque, earum sed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
