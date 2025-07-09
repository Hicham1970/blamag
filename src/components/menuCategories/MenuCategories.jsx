import React from 'react'
import Link from 'next/link'
import Styles from './menuCategories.module.css'


const MenuCategories = () => {
  return (
    <div className={Styles.categoryList}>
      <Link
        href="/blog?cat=travel"
        className={`${Styles.categoryItem} ${Styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=Styles"
        className={`${Styles.categoryItem} ${Styles.Styles}`}
      >
        Styles
      </Link>
      <Link
        href="/blog?cat=fashion"
        className={`${Styles.categoryItem} ${Styles.fashion}`}
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${Styles.categoryItem} ${Styles.coding}`}
      >
        Coding
      </Link>
      <Link
        href="/blog?cat=food"
        className={`${Styles.categoryItem} ${Styles.food}`}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${Styles.categoryItem} ${Styles.culture}`}
      >
        Culture
      </Link>
    </div>
  );
}

export default MenuCategories
