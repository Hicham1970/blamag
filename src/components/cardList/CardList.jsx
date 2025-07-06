import React from 'react'
import styles from "./cardList.module.css"    
import Pagination from '@/components/pagination/Pagination'
import Link from 'next/link'


const CardList = () => {
  return (
    <div className={styles.container}>
          CardList
          <Pagination />
      
    </div>
  )
}

export default CardList
