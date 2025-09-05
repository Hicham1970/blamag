import React from "react";
import styles from "./footer.module.css";
import Image from 'next/image'; 
import Link from "next/link";



const Footer = () => {
  const emailTo = () => "mailto:h.garoum@gmail.com";

  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <div className={styles.logo}>
          <Image src="/steering-wheel.ico" alt="logo" width={50} height={50} />
          <h1 className={styles.logoTitle}>
            <span className={styles.highlightGh}>Gh</span>🚀Blog
          </h1>
        </div>
        <p className={styles.desc}>
          Ce coin du web est le reflet d'une passion sincère pour le
          développement. Construit avec Next.js et enrichi par l exploration des
          technologies full-stack, ce blog grandit au rythme de mes
          apprentissages. Développé avec ❤️ pour partager et apprendre ensemble.{" "}
          <b>
            Copyright © 2025 Hicham Garoum email:{" "}
            <a href={emailTo()}>h.garoum@gmail.com</a>
          </b>
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/youTube.png" alt="YouTube" width={24} height={24} />
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/styles" className={styles.link}>
            Style
          </Link>
          <Link href="/fashion" className={styles.link}>
            Fashion
          </Link>
          <Link href="/coding" className={styles.link}>
            Coding
          </Link>
          <Link href="/travel" className={styles.link}>
            Travel
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.youTube.com" className={styles.link}>
            YouTube
          </Link>
          <Link href="https://www.facebook.com" className={styles.link}>
            Facebook
          </Link>
          <Link href="https://www.tiktok.com" className={styles.link}>
            Tiktok
          </Link>
          <Link href="https://www.instagram.com" className={styles.link}>
            Instagram
          </Link>
        </div>
      </div>
    </div>
  ); 
};

export default Footer;
