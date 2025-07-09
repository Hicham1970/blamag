import Styles from "./homepage.module.css";
import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";



export default function Home() {
  return (
    <div>
      <div className={Styles.container}>
        <Featured />
        <CategoryList />
        <div className={Styles.content}>
          <CardList />
          <Menu />
        </div>
        
      </div>
    </div>
  );
}
