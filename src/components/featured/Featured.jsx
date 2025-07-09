import React from "react";
import Styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>
        <b>Hey, Hicham Dev here !</b> { ""}Discover my stories and creatives ideas.
      </h1>
      <div className={Styles.post}>
        <div className={Styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={Styles.image} />
        </div>
        <div className={Styles.textContainer}>
          <h1 className={Styles.postTitle}>
            Blogging is fun and easy with Next.js Blog App 🚀 
          </h1>
          <p className={Styles.postDesc}>
            Gubergren amet tincidunt mazim consectetuer facilisi dolor quis sea
            amet justo volutpat sea. Diam vero amet duis dolor vulputate nostrud
            amet ipsum et magna. Lorem consectetuer amet lorem enim luptatum
            wisi sit magna vel ut iusto takimata consequat lorem et dolores
            exerci. Iriure takimata et sanctus lorem tempor nonumy eirmod dolore
            rebum elitr amet duo takimata facilisi nobis kasd lorem. Ea sanctus
            augue tempor sanctus diam eos ipsum dolores vulputate nihil
            imperdiet in labore luptatum. Elitr amet sadipscing eirmod dolore
            minim sea duo feugait elitr eos. Duo stet odio magna stet lorem
            aliquyam. Ipsum justo no praesent. Wisi eos sit lorem ipsum sit sea
            clita sea zzril invidunt labore duis dolores sed sed rebum dolor
            stet. Lorem est lorem ea vero et kasd lorem minim eleifend eos
            invidunt quis sed. Hendrerit nostrud clita. Sed elit dolores
            gubergren luptatum et hendrerit veniam eu dolore eos ex sanctus
            dolores ut et kasd et ut. Ipsum accumsan vero velit diam takimata et
            facilisi liber dolor ut tempor sadipscing nonumy est. Aliquip amet
            est enim ipsum vulputate. Consequat in sit dolores duo voluptua
            diam. Accumsan clita esse duo takimata sed et at et vel no eum.
          </p>
          <button className={Styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
