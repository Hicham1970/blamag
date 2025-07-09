import React from "react";
import Styles from "./footer.module.css";
import Image from 'next/image'; 
import Link from "next/link";



const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.infos}>
        <div className={Styles.logo}>
          <Image src="/steering-wheel.ico" alt="logo" width={50} height={50} />
          <h1 className={Styles.logoTitle}>Gh🚀Blog</h1>
        </div>
        <p className={Styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          saepe! Modi fugiat doloribus aspernatur non, autem praesentium.
          Commodi, expedita. Optio dolorum nam animi eum culpa. Copyright © 2023
          Hicham Gar
        </p>
        <div className={Styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/youTube.png" alt="YouTube" width={24} height={24} />
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        </div>
      </div>
      <div className={Styles.links}>
        <div className={Styles.list}>
          <span className={Styles.listTitle}>Links</span>
          <Link href="/" className={Styles.link}>
            Home
          </Link>
          <Link href="/about" className={Styles.link}>
            About
          </Link>
          <Link href="/contact" className={Styles.link}>
            Contact
          </Link>
          <Link href="/blog" className={Styles.link}>
            Blog
          </Link>
        </div>
        <div className={Styles.list}>
          <span className={Styles.listTitle}>Tags</span>
          <Link href="/styles" className={Styles.link}>
            Style
          </Link>
          <Link href="/fashion" className={Styles.link}>
            Fashion
          </Link>
          <Link href="/coding" className={Styles.link}>
            Coding
          </Link>
          <Link href="/travel" className={Styles.link}>
            Travel
          </Link>
        </div>
        <div className={Styles.list}>
          <span className={Styles.listTitle}>Social</span>
          <Link href="www.youTube.com" className={Styles.link}>
            YouTube
          </Link>
          <Link href="www.facebook.com" className={Styles.link}>
            Facebook
          </Link>
          <Link href="www.tiktok.com" className={Styles.link}>
            Tiktok
          </Link>
          <Link href="www.instagram.com" className={Styles.link}>
            Instagram
          </Link>
        </div>
      </div>
    </div>
  ); 
};

export default Footer;
