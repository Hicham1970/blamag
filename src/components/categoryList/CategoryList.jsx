import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const CategoryList = async () => {
  const categories = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/blog?cat=${category.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
          >
            {category.img && (
              <Image
                src={category.img}
                alt={category.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}

            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
