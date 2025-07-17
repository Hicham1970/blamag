import React from "react";
import styles from "./aboutPage.module.css";
import Image from "next/image";
// import Button from "@/components/button/Button";

// generate metadata for static routes
export const metadata = {
  title: "Gh Lama About",
  description: "This is a About page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/32776132/pexels-photo-32776132.jpeg"
          alt=""
          fill={true}
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Deux passions, une vision</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences{" "}
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>How Are We?</h1>
          <h3 className={styles.title}>Mon parcours maritime</h3>
          <p className={styles.itemDesc}>
            J&apos ai commencé ma carrière comme inspecteur stagiaire sur des
            navires marchands avant de me spécialiser dans l&apos inspection
            maritime. Au fil des années, j&apos ai certifié plus de 3 000
            navires, supervisé des dizaines de surveys complexes, et géré des
            situations critiques dans les plus grands ports européens et
            asiatiques. Ma spécialité ? Les inspections de conformité MARPOL,
            les bunker surveys, et les audits de sécurité sur les navires de
            commerce international.
            <br />
            <br />
            Cette double expertise me donne une perspective unique dans
            l&apos industrie maritime. J&apos ai créé un logiciel de calcul
            automatique pour les draft surveys qui est désormais utilisé par
            plusieurs compagnies de survey. Mon système de traçabilité des
            carburants par blockchain aide à lutter contre les fraudes. J&apos ai
            aussi développé une IA qui détecte les anomalies dans les
            certificats de navires, réduisant les erreurs de 80%.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Vision d&apos avenir</h1>
          <p className={styles.itemDesc}>
            L&apos industrie maritime vit une révolution numérique. Mon rôle est de
            faire le pont entre la tradition maritime et l&apos innovation
            technologique. Je consulte désormais pour des ports intelligents,
            forme des équipes d&apos inspecteurs aux nouveaux outils digitaux, et
            contribue à l&apos élaboration de standards internationaux pour la
            digitalisation des surveys. Chaque ligne de code que j&apos écris
            améliore la sécurité en mer. Chaque inspection que je réalise
            nourrit mes algorithmes. C&apos est cette boucle vertueuse qui me
            passionne depuis deux décennies.
            <br />
            <br />
            -Creatives Illustrations
            <br />
            <br />
            -Dynamic Websites
            <br />
            <br />
            -Mobile Apps
            <br />
          </p>
          <button type="button" className={styles.button}  onClick={()=>window.location.href="/contact"}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default About;
