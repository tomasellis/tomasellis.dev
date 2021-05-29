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
      <div className={styles.header}>
        <h1 className={styles.title}>
          ./tomasellis/projects @ <a href="/">home</a>
        </h1>
      </div>
      <main className={styles.main}>
        <div className={styles.go}>
          <a href="./projects">about 🤔</a>
          <a href="/notes">notes 🙏</a>
        </div>
        <div className={styles.properList}>
          <a
            href="https://github.com/tomasellis/issphere"
            className={styles.card}
          >
            <h2>issphere &rarr;</h2>
            <p>Here I display the ISS position in a 3D sphere.</p>
          </a>
          <a href="https://twitter.com/daily_ubi_bot" className={styles.card}>
            <h2>UBI Bot &rarr;</h2>
            <p>
              A Twitter bot that display every 24hs the price of the $ubi💧
              token
            </p>
          </a>
          <a href="https://twitter.com/poh_dispute_bot" className={styles.card}>
            <h2>Proof of Humanity Bot &rarr;</h2>
            <p>
              A Twitter bot that tweets every time a PoH profile is challenged.
            </p>
          </a>
          <a href="https://github.com/tomasellis" className={styles.card}>
            <h2>Coming soon 👺</h2>
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
