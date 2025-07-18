import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Hicham Dev here !</b> {""}Discover my stories and creatives
        ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Blogging is fun and easy with Next.js Blog App 🚀
          </h1>
          <p className={styles.postDesc}>
            <b>Le Blogging : </b>De la Révolution Numérique à l Outil Global de
            Communication{" "}
            <b>Introduction Le blogging, contraction de web log</b>
            (journal web), représente l une des innovations les plus
            démocratiques d internet. Cette forme de publication en ligne a
            transformé radicalement la façon dont l information circule, se
            consomme et se produit à travers le monde. Depuis ses humbles débuts
            dans les années 1990 jusqu à son statut actuel d outil
            incontournable de communication, le blogging a révolutionné
            l expression personnelle, le journalisme, le marketing et
            l éducation. <b> Les Origines du Blogging (1990-1999) </b> Les
            Premiers Pas de l histoire du blogging commence en 1994 avec Justin
            Hall, étudiant américain qui crée Justin Links from the
            Underground, considéré comme le premier blog de l&apos; histoire. Ce site
            personnel partageait des liens commentés et des réflexions
            personnelles, établissant les bases de ce qui deviendrait une
            révolution communicationnelle. <b> L évolution du Concept</b> Le terme
            "weblog" fut inventé en 1997 par Jorn Barger pour décrire son site
            Robot Wisdom. En 1999, Peter Merholz raccourcit ce terme en blog 
            sur son propre site, créant ainsi l appellation qui s imposera
            mondialement. Cette époque pionnière était caractérisée par des
            blogs personnels, souvent techniques, tenus par des passionnés
            d informatique et d Internet. <b>Les Premières Plateformes</b> Les
            premiers blogs étaient codés manuellement en HTML, limitant leur
            création aux personnes techniquement compétentes. Cette barrière
            technique explique pourquoi la communauté blogueuse initiale .......
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
