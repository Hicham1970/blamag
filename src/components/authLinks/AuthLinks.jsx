"use client"; 

// next-blog/src/components/authLinks/AuthLinks.jsx
import React, {useState} from "react";
import Styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {

  const [open, setOpen] = useState(false); 

  const status = "notauthenticated"; 

  return (
    <>
      {status === "notauthenticated" ? (
        <>
          <Link href="/login" className={Styles.link}>
            Login
          </Link>
        </>
      ) : (
        <>
          <Link href="/write" className={Styles.link}>
            Write
          </Link>
          <span className={Styles.link}>Logout</span>
        </>
      )}
      <div className={Styles.burger} onClick={() => setOpen(!open)}>
        <div className={Styles.line}></div>
        <div className={Styles.line}></div>
        <div className={Styles.line}></div>
      </div>
      {open && (
        <div className={Styles.responsiveMenu}>
          <Link href="/" className={Styles.link}>
            Home
          </Link>
          <Link href="/about" className={Styles.link}>
            About
          </Link>
          <Link href="/contact" className={Styles.link}>
            Contact
          </Link>
          {status === "notauthenticated" ? (
            <>
              <Link href="/login" className={Styles.link}>
                Login
              </Link>
            </>
          ) : (
            <>
              <Link href="/write" className={Styles.link}>
                Write
              </Link>
              <span className={Styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
