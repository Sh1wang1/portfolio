import React from "react";
import styles from "./WorkExperience.module.css";

export const WorkExperience = () => {
  return (
    <section className={styles.container} id="workexperience">
      <h2 className={styles.title}>Professional Experience</h2>
      
      <div className={styles.experienceItem}>
        <div className={styles.company}>
          <h3 className={styles.companyName}>100 Gaj</h3>
          <span className={styles.role}>(Full Stack Development)</span>
        </div>
        
        <div className={styles.details}>
          <ul className={styles.responsibilities}>
            <li>
              Built and maintained full-stack web applications using Next.js, React.js, Node.js, Express, and MongoDB.
            </li>
            <li>
              Worked on responsive UI with Tailwind CSS.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
