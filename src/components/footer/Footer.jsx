import React from "react";
import styles from "./footer.module.css";
import Image from 'next/image'; 
import Link from "next/link";



const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <div className={styles.logo}>
          <Image src="/steering-wheel.ico" alt="logo" width={50} height={50} />
          <h1 className={styles.logoTitle}>Gh🚀Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          saepe! Modi fugiat doloribus aspernatur non, autem praesentium.
          Commodi, expedita. Optio dolorum nam animi eum culpa. Copyright © 2023
          Hicham Gar
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
          <Link href="www.youTube.com" className={styles.link}>
            YouTube
          </Link>
          <Link href="www.facebook.com" className={styles.link}>
            Facebook
          </Link>
          <Link href="www.tiktok.com" className={styles.link}>
            Tiktok
          </Link>
          <Link href="www.instagram.com" className={styles.link}>
            Instagram
          </Link>
        </div>
      </div>
    </div>
  ); 
};

export default Footer;
