import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shiwangiverma2003@gmail.com" target="_blank">Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon" 
          />
          <a href="https://www.linkedin.com/in/shiwangi-verma-97b1582a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank">
          Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Sh1wang1" target="_blank">Github</a>
        </li>
      </ul>
    </footer>
  );
};