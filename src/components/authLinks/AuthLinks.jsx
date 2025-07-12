"use client"; 

// next-blog/src/components/authLinks/AuthLinks.jsx
import React, {useState} from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react"


const AuthLinks = () => {
  const {status} = useSession()

  const [open, setOpen] = useState(false); 

  return (
    <>
      {status === "unauthenticated" ? (
        <>
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        </>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={()=> signOut()}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          {status === "notauthenticated" ? (
            <>
              <Link href="/login" className={styles.link}>
                Login
              </Link>
            </>
          ) : (
            <>
              <Link href="/write" className={styles.link}>
                Write
              </Link>
              <span className={styles.link} onClick={()=> signOut()}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
