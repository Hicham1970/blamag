import React from "react";
import Styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "@/components/authLinks/AuthLinks";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={Styles.logo}>Gh🚀Blog</div>
      <div className={Styles.links}>
        <ThemeToggle />
        <Link href="/" className={Styles.link}>
          Home
        </Link>
        <Link href="/about" className={Styles.link}>
          About
        </Link>
        <Link href="/contact" className={Styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
