import React from "react";
import Styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Popular Categories</h1>
      <div className={Styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${Styles.category} ${Styles.style}`}
        >
          <Image
            src="/style.png"
            alt="style"
            width={32}
            height={32}
            className={Styles.image}
          />
          Style
        </Link>

        <Link
          href={`/blog?cat=travel`}
          className={`${Styles.category} ${Styles.travel}`}
        >
          <Image
            src="/travel.png"
            alt="travel"
            width={32}
            height={32}
            className={Styles.image}
          />
          Travel
        </Link>

        <Link
          href={`/blog?cat=culture`}
          className={`${Styles.category} ${Styles.culture}`}
        >
          <Image
            src="/culture.png"
            alt="culture"
            width={32}
            height={32}
            className={Styles.image}
          />
          Culture
        </Link>

        <Link
          href={`/blog?cat=coding`}
          className={`${Styles.category} ${Styles.coding}`}
        >
          <Image
            src="/coding.png"
            alt="coding"
            width={32}
            height={32}
            className={Styles.image}
          />
          Coding
        </Link>

        <Link
          href={`/blog?cat=food`}
          className={`${Styles.category} ${Styles.food}`}
        >
          <Image
            src="/food.png"
            alt="food"
            width={32}
            height={32}
            className={Styles.image}
          />
          Food
        </Link>

        <Link
          href={`/blog?cat=fashion`}
          className={`${Styles.category} ${Styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            alt="fashion"
            width={32}
            height={32}
            className={Styles.image}
          />
          Fashion
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
