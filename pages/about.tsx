import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tom's About</title>
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
          ./tomasellis/about @ <a href="/">home</a>
        </h1>
      </div>
      <main className={styles.main}>
        <div className={styles.go}>
          <a href="./projects">projects ™</a>
          <a href="/notes">notes 🙏</a>
        </div>
        <div className={styles.about}>
          <p>
            Hey, I'm{" "}
            <a href="https://twitter.com/tomas_ellis0" target="_blank">
              <b>Tomás</b>
            </a>
            . I'm a developer based in Buenos Aires, Argentina who has a passion
            for all things learning, physics and videogames. <br></br>
            <br></br>A lot of challenges have been overcome to reach the place
            I'm in right now, but there are more in the way and I'm not
            stopping. The uncertainty of the future keeps me going. <br></br>
            <br></br>I love trying{" "}
            <a href="./projects">
              <b>new things</b>
            </a>{" "}
            that keep my mind running. I love creating. Be it digital or
            physical.<br></br>I dabble in language learning and drawing.
            <br></br>
            <br></br>
            I'm developing my skills every single day. I love solving
            challenging problems. <br></br>
            <br></br>
            In the future, my plan is to start a researching startup to bring my{" "}
            <b>love</b> of physics and programming togheter, and make it reach
            others.
          </p>
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
