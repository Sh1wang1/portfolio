import React from "react";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";
import styles from "./WorkExperience.module.css";

export const WorkExperience = () => {
  return (
    <section className={styles.container} id="work-experience">
      <h2 className={styles.title}>Professional Experience & Education</h2>
      <div className={styles.timeline}>
        <div className={styles.experienceItem}>
          <div className={styles.companyRow}>
            <div className={styles.companyLogo}><FaCode size={32} /></div>
            <div>
              <h3 className={styles.companyName}>100 Gaj</h3>
            </div>
            <div className={styles.topRightInfo}>
              <span className={styles.role}>Full Stack Developer</span>
              <span className={styles.period}>July 2025</span>
            </div>
          </div>
          <ul className={styles.responsibilities}>
            <li><FaServer className={styles.icon} /> Built and maintained full-stack web applications using <b>Next.js</b>, <b>React.js</b>, <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>.</li>
            <li><FaDatabase className={styles.icon} /> Designed and managed scalable databases and REST APIs.</li>
            <li>Worked on responsive UI with <b>Tailwind CSS</b> for a seamless user experience across devices.</li>
          </ul>
        </div>
      </div>
      <br/>
       <div className={styles.timeline}>
        <div className={styles.experienceItem}>
          <div className={styles.companyRow}>
            <div className={styles.companyLogo}><FaCode size={32} /></div>
            <div>
              <h3 className={styles.companyName}>B.Tech (Computer Science)</h3>
            </div>
            <div className={styles.topRightInfo}>
              <span className={styles.period}>2022-2026</span>
            </div>
          </div>
          <ul className={styles.responsibilities}>
            <li>ABES Engineering College , Ghaziabad  </li>
            <li>CGPA:<b> 8.5/10</b></li>

          </ul>
        </div>
      </div>
      
    </section>
  );
};
