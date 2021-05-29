import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tom's Emporium</title>
        <meta name="description" content="Made with 🧡" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="https://i.imgur.com/BHteyOi.png"
        ></link>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className={styles.header}>
        <h1 className={styles.title}>
          ./tomasellis @ <a href="/">home</a>
        </h1>
      </div>
      <div className={styles.main}>
        <h2 className={styles.description}>dev, physics undergrad</h2>
        <img src="https://i.imgur.com/BHteyOi.png" alt="boi" width="200px" />
        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>about &#10150;</h2>
          </a>
          <a href="/projects" className={styles.card}>
            <h2>projects &#10150;</h2>
          </a>
          <a href="/notes" className={styles.card}>
            <h2>notes &#10150;</h2>
          </a>
        </div>
        <div className={styles.sites}>
          <a href="https://github.com/tomasellis" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} size="3x" fixedWidth />
          </a>
          <a href="https://twitter.com/tomas_ellis0" target="_blank">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" fixedWidth />
          </a>
          <a
            href="https://www.linkedin.com/in/tomas-ellis-dev/"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" fixedWidth />
          </a>
          <a href="mailto:tomas.sydney.ellis@gmail.com" target="_blank">
            <FontAwesomeIcon icon={["fas", "envelope"]} size="3x" fixedWidth />
          </a>
        </div>
      </div>
      <footer className={styles.footer}>
        <span>
          Made with{" "}
          <em>
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={["fas", "heart"]}
              size="1x"
              fixedWidth
            />
          </em>{" "}
          <sup>
            {" "}
            tears{" "}
            <sup>
              {" "}
              and <sup> blood</sup>
            </sup>
          </sup>{" "}
          by Tomás Ellis<span className={styles.logo}></span>
        </span>
      </footer>
    </div>
  );
}
