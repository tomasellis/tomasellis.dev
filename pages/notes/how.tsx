import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function How() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tom's How?</title>
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
          ./tomasellis/<a href="/notes">notes</a>/0 @ <a href="/">home</a>
        </h1>
      </div>
      <main className={styles.main}>
        <div className={styles.go}>
          <a href="/about">about 🤔</a>
          <a href="/projects">projects ™</a>
        </div>
        <div className={styles.noteTitle}>
          <span>How to how?</span>
        </div>
        <div className={styles.actualNote}>
          <p>
            <small>May 21st, 2021</small>
          </p>
          <br />
          <p>How is the question. How is the answer.</p>
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
