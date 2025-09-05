
import styles from "./footer.module.css";
import Image from "next/image"; 
import Link from "next/link";

const socialIcons = [
  { href: "https://facebook.com", src: "/facebook.png", alt: "facebook" },
  { href: "https://instagram.com", src: "/instagram.png", alt: "instagram" },
  { href: "https://youtube.com", src: "/youTube.png", alt: "YouTube" },
  { href: "https://tiktok.com", src: "/tiktok.png", alt: "tiktok" },
];

const linkLists = [
  {
    title: "Links",
    links: [
      { href: "/", text: "Home" },
      { href: "/about", text: "About" },
      { href: "/contact", text: "Contact" },
      { href: "/blog", text: "Blog" },
    ],
  },
  {
    title: "Tags",
    links: [
      { href: "/styles", text: "Style" },
      { href: "/fashion", text: "Fashion" },
      { href: "/coding", text: "Coding" },
      { href: "/travel", text: "Travel" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://www.youTube.com", text: "YouTube" },
      { href: "https://www.facebook.com", text: "Facebook" },
      { href: "https://www.tiktok.com", text: "Tiktok" },
      { href: "https://www.instagram.com", text: "Instagram" },
    ],
  },
];

const Footer = () => {
  const emailTo = () => "mailto:h.garoum@gmail.com";

  return (
    <footer className={styles.container}>
      <div className={styles.infos}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/steering-wheel.ico"
              alt="GhBlog logo"
              width={50}
              height={50}
            />
            <h1 className={styles.logoTitle}>
              <span className={styles.highlightGh}>Gh</span>🚀Blog
            </h1>
          </Link>
        </div>
        <p className={styles.desc}>
          Ce coin du web est le reflet dune passion sincère pour le
          development. Construit avec Next.js et enrichi par l exploration des
          technologies full-stack, ce blog grandit au rythme de mes
          apprentissages. Developpe avec ❤️ pour partager et apprendre ensemble.{" "}
          <b>
            Copyright © 2025 Hicham Garoum email:{" "}
            <a href={emailTo()}>h.garoum@gmail.com</a>
          </b>
        </p>
        <div className={styles.icons}>
          {socialIcons.map((icon) => (
            <Link href={icon.href} key={icon.alt} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label={`Visit our ${icon.alt} page`}>
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        {linkLists.map((list) => (
          <div className={styles.list} key={list.title}>
            <span className={styles.listTitle}>{list.title}</span>
            {list.links.map((link) => (
              <Link href={link.href} key={link.text} className={styles.link}>
                {link.text}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  ); 
};

export default Footer;
