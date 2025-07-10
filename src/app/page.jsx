import styles from "./homepage.module.css";
import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";



export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList />
          <Menu />
        </div>
        
      </div>
    </div>
  );
}
