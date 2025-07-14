import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

// localhost:3000/blog/1

const getData = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};


const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  // Pour le débogage, ceci s'affichera dans la console de votre serveur Next.js
  console.log(`--- Données pour le slug : ${slug} ---`);
  console.log(data);

  // Une vérification robuste pour s'assurer que les données sont valides avant le rendu
  if (!data?.id) {
    return <div className={styles.container}>
      <h1>Post non trouvé</h1>
      <p>Désolé, l'article que vous cherchez n'existe pas.</p>
    </div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt={data.user.name || "User avatar"}
                  fill
                  className={styles.avatar}
                />
              </div>
            )}

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name}</span>
              <span className={styles.date}>
                {data?.createdAt?.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt={data.title || "Post image"} fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc || "" }}
          />
          <div className={styles.comments}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
