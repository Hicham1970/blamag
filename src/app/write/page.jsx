"use client";

import { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const {status } = useSession();
    const router = useRouter();
  
    if (status === "loading") {
      return <div className={styles.loading}>Loading....</div>;
    }
  
    if (status === "unauthenticated") {
      router.push("/");
    }
  

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/add-line.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/mail-line.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external-link-line.png"
                alt=""
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image src="/video-chat-line.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Write something..." className={styles.textArea}  />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
