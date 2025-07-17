"use client";

import { useState, useEffect } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

// Import ReactQuill dynamiquement pour désactiver le SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const storage = getStorage(app);

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  // upload the image:
  useEffect(() => {
    const upload = () => {
      const newName = new Date().getTime() + file.name;
      const storageRef = ref(storage, newName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w ]+/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleSubmit = async () => {
    if (!catSlug) {
      alert("Veuillez sélectionner une catégorie.");
      return;
    }

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img: media,
          slug: slugify(title),
          catSlug: catSlug,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.slug) {
          router.push(`/posts/${data.slug}`);
        } else {
          console.error("API did not return a slug in the response.", data);
          alert("Post créé, mais la redirection a échoué. Le slug est manquant dans la réponse de l'API.");
        }
      } else {
        const errorText = await res.text();
        console.error("Échec de la publication. Statut:", res.status, "Réponse:", errorText);
        alert(`Échec de la publication: ${errorText}`);
      }
    } catch (error) {
      console.error("Une erreur est survenue lors de la soumission du post:", error);
      alert("Une erreur inattendue est survenue. Veuillez vérifier la console.");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className={styles.select}
        value={catSlug}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="">Sélectionner une catégorie</option>
        <option value="style">Style</option>
        <option value="fashion">Fashion</option>
        <option value="food">Food</option>
        <option value="culture">Culture</option>
        <option value="travel">Travel</option>
        <option value="coding">Coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/add-line.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/mail-line.png" alt="" width={16} height={16} />
              </label>
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
        <ReactQuill
          theme="bubble"
          value={desc}
          onChange={setDesc}
          placeholder="Write something..."
          className={styles.textArea}
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
