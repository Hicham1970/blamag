"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./menuPosts.module.css";
import Image from "next/image";

const getData = async (cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?cat=${cat}`,  // Assurez-vous que l'URL est correcte
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};


const MenuPosts = ({ withImage }) => {
  const [foodPosts, setFoodPosts] = useState([]);
  const [fashionPosts, setFashionPosts] = useState([]);
  const [codingPosts, setCodingPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const foodData = await getData("food");
        setFoodPosts(foodData?.posts || []);

        const fashionData = await getData("fashion");
        setFashionPosts(fashionData?.posts || []);

        const codingData = await getData("coding");
        setCodingPosts(codingData?.posts || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className={styles.items}>
      {foodPosts.slice(0, 3).map((post) => (
        <Link href={`/posts/${post.slug}`} key={post._id} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img || "/moi.jpg"} alt={post.title} fill className={styles.image} />
            </div>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.details}>
              <span className={styles.username}>{post.username} - </span>
              <span className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}

      {fashionPosts.slice(0, 3).map((post) => (
        <Link href={`/posts/${post.slug}`} key={post._id} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img || "/moi.jpg"} alt={post.title} fill className={styles.image} />
            </div>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.details}>
              <span className={styles.username}>{post.username} - </span>
              <span className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}

       {codingPosts.slice(0, 3).map((post) => (
        <Link href={`/posts/${post.slug}`} key={post._id} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img || "/moi.jpg"} alt={post.title} fill className={styles.image} />
            </div>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>Coding</span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.details}>
              <span className={styles.username}>{post.username} - </span>
              <span className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
