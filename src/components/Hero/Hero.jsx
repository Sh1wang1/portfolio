import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shiwangi</h1>
        <p className={styles.description}>
        I'm a Full Stack Developer with expertise in React and JavaScript, 
        and I have also knowledge of Node.js and Express.js for backend development. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:shiwangiverma2003@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};