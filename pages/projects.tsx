import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tom's Projects</title>
        <meta name="description" content="Made with 🧡" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          .tomásEllis/projects @ <a href="/">home</a>
        </h1>
        <h2>web dev based in Argentina</h2>
        <p className={styles.description}>
          I enjoy the challenging puzzles programming presents, and most of all,
          I enjoy having fun!{" "}
        </p>
        <div className={styles.sites}>
          <div className={styles.innerSite}>
            <span className={styles.innerSiteText}>Look me up</span>
            <a href="https://github.com/tomasellis" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} size="3x" fixedWidth />
            </a>
            <a href="https://twitter.com/tomas_ellis0" target="_blank">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" fixedWidth />
            </a>
          </div>
          <div className={styles.innerSite}>
            <span className={styles.innerSiteText}>Contact me!</span>
            <a
              href="https://www.linkedin.com/in/tomas-ellis-dev/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                size="3x"
                fixedWidth
              />
            </a>
            <a href="mailto:tomas.sydney.ellis@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={["fas", "envelope"]}
                size="3x"
                fixedWidth
              />
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          <a href="/projects" className={styles.card}>
            <h2>Issphere idk &rarr;</h2>
            <p>Check out what I've been working on!</p>
          </a>
        </div>
      </main>

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
