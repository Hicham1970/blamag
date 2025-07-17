import React from 'react'
import styles from './blogPage.module.css'; 
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';

// localhost:3000/blog

const BlogPage = async ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1;
  const {cat} = await searchParams;


  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Cat Blog</h1>
          <div className={styles.content}>
        <CardList page={page} cat={cat} />
              <Menu />
      </div>
    </div>
  );
}

export default BlogPage
