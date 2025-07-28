import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaServer, FaDatabase, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import styles from "./WorkExperience.module.css";

export const WorkExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={`${styles.container} ${isVisible ? styles.visible : ''}`} id="work-experience" ref={sectionRef}>
      <h2 className={`${styles.title} ${isVisible ? styles.slideInDown : ''}`}>Professional Experience & Education</h2>
      
      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>
        
        {/* Bluestock Fintech */}
        <div className={`${styles.timelineItem} ${isVisible ? styles.fadeInLeft : ''}`} style={{animationDelay: '0.2s'}}>
          <div className={styles.timelinePoint}>
            <FaBriefcase size={16} />
          </div>
          <div className={styles.experienceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.companyLogo}>
                <FaCode size={24} />
              </div>
              <div className={styles.headerInfo}>
                <h3 className={styles.companyName}>100 Gaj</h3>
                <span className={styles.role}>Full Stack Development </span>
              </div>
              <div className={styles.period}>July 2025</div>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.description}>
             Built and maintained full-stack web applications.
            Designed and managed scalable databases and REST APIs.
            Worked on responsive UI with <b>Tailwind CSS</b> for a seamless user experience across devices.
          
              </p>
              <div className={styles.techTags}>
                <span className={styles.tag}>HTML</span>
                <span className={styles.tag}>Tailwind CSS</span>
                <span className={styles.tag}>JavaScript</span>
                <span className={styles.tag}>React.js</span>
                <span className={styles.tag}>Next.js</span>
                <span className={styles.tag}>Express</span>
                <span className={styles.tag}>REST API</span>
              </div>
            </div>
          </div>
        </div>

  

        {/* Education - B.Tech */}
        <div className={`${styles.timelineItem} ${isVisible ? styles.fadeInLeft : ''}`} style={{animationDelay: '0.6s'}}>
          <div className={styles.timelinePoint}>
            <FaGraduationCap size={16} />
          </div>
          <div className={styles.experienceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.companyLogo}>
                <FaGraduationCap size={24} />
              </div>
              <div className={styles.headerInfo}>
                <h3 className={styles.companyName}>B.Tech – Information Technology</h3>
                <span className={styles.role}>Education</span>
              </div>
              <div className={styles.period}>2022-2026</div>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.description}>ABES Engineering College, Ghaziabad</p>
              <div className={styles.gpaTag}>
                <span className={styles.gpaLabel}>GPA: 8.5  (till 5th semester)</span>
              </div>
              <div className={styles.techTags}>
                <span className={styles.tag}>Computer Science</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education - Higher Secondary */}
        <div className={`${styles.timelineItem} ${isVisible ? styles.fadeInRight : ''}`} style={{animationDelay: '0.8s'}}>
          <div className={styles.timelinePoint}>
            <FaGraduationCap size={16} />
          </div>
          <div className={styles.experienceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.companyLogo}>
                <FaDatabase size={24} />
              </div>
              <div className={styles.headerInfo}>
                <h3 className={styles.companyName}>Higher Secondary Education</h3>
                <span className={styles.role}>Class 12</span>
              </div>
              <div className={styles.period}>2020-2021</div>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.description}>Govt. Girls Senior Secondary School, HBSE Board</p>
              <div className={styles.gpaTag}>
                <span className={styles.gpaLabel}>Percentage: 98%</span>
              </div>
            </div>
          </div>
        </div>
         <div className={`${styles.timelineItem} ${isVisible ? styles.fadeInRight : ''}`} style={{animationDelay: '0.8s'}}>
          <div className={styles.timelinePoint}>
            <FaGraduationCap size={16} />
          </div>
          <div className={styles.experienceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.companyLogo}>
                <FaDatabase size={24} />
              </div>
              <div className={styles.headerInfo}>
                <h3 className={styles.companyName}> Secondary Education</h3>
                <span className={styles.role}>Class 10</span>
              </div>
              <div className={styles.period}>2018-2019</div>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.description}>Deepika Public School, HBSE Board</p>
              <div className={styles.gpaTag}>
                <span className={styles.gpaLabel}>Percentage: 96%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
