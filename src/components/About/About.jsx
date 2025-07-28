
import React, { useEffect, useRef, useState } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState(new Set());
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation when out of view to replay when scrolling back
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const handleTagClick = (tagName) => {
    setSelectedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tagName)) {
        newSet.delete(tagName);
      } else {
        newSet.add(tagName);
      }
      return newSet;
    });
  };

  return (
    <section className={`${styles.container} ${isVisible ? styles.visible : ''}`} id="about" ref={aboutRef}>
      <h2 className={`${styles.title} ${isVisible ? styles.slideInDown : ''}`}>About</h2>
      <div className={styles.content}>
        <div className={styles.aboutCards}>
          <div className={`${styles.aboutCard} ${isVisible ? styles.fadeInUp : ''}`} style={{animationDelay: '0.2s'}}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend icon" />
              </div>
              <h3>Frontend Developer</h3>
            </div>
            <p className={styles.cardDescription}>
              I'm a full stack developer proficient in React.js, JavaScript, HTML, CSS, Bootstrap, and 
              Tailwind CSS, with experience in building responsive and optimized websites. I have 
              developed multiple projects showcasing expertise in building dynamic and interactive 
              web applications.
            </p>
            <div className={styles.skillTags}>
              <span 
                className={`${styles.tag} ${selectedTags.has('React.js') ? styles.selected : ''}`}
                onClick={() => handleTagClick('React.js')}
              >
                React.js
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('JavaScript') ? styles.selected : ''}`}
                onClick={() => handleTagClick('JavaScript')}
              >
                JavaScript
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('HTML5') ? styles.selected : ''}`}
                onClick={() => handleTagClick('HTML5')}
              >
                HTML5
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('CSS3') ? styles.selected : ''}`}
                onClick={() => handleTagClick('CSS3')}
              >
                CSS3
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('Bootstrap') ? styles.selected : ''}`}
                onClick={() => handleTagClick('Bootstrap')}
              >
                Bootstrap
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('Tailwind CSS') ? styles.selected : ''}`}
                onClick={() => handleTagClick('Tailwind CSS')}
              >
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className={`${styles.aboutCard} ${isVisible ? styles.fadeInUp : ''}`} style={{animationDelay: '0.4s'}}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Backend icon" />
              </div>
              <h3>Backend Developer</h3>
            </div>
            <p className={styles.cardDescription}>
              I have experience with back-end systems and APIs, with knowledge of Node.js,Express.js, MongoDb, 
              and REST API development. Proficient with tools like Git, GitHub, and AWS for 
              development and deployment.
            </p>
            <div className={styles.skillTags}>
              <span 
                className={`${styles.tag} ${selectedTags.has('Node.js') ? styles.selected : ''}`}
                onClick={() => handleTagClick('Node.js')}
              >
                Node.js
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('Express.js') ? styles.selected : ''}`}
                onClick={() => handleTagClick('Express.js')}
              >Express.js
              </span>
               <span 
                className={`${styles.tag} ${selectedTags.has('MongoDb') ? styles.selected : ''}`}
                onClick={() => handleTagClick('MongoDb')}
              >
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('REST API') ? styles.selected : ''}`}
                onClick={() => handleTagClick('REST API')}
              >
                REST API
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('Git') ? styles.selected : ''}`}
                onClick={() => handleTagClick('Git')}
              >
                Git
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('GitHub') ? styles.selected : ''}`}
                onClick={() => handleTagClick('GitHub')}
              >
                GitHub
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('AWS') ? styles.selected : ''}`}
                onClick={() => handleTagClick('AWS')}
              >
                AWS
              </span>
            </div>
          </div>

          <div className={`${styles.aboutCard} ${isVisible ? styles.fadeInUp : ''}`} style={{animationDelay: '0.6s'}}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Problem solving icon" />
              </div>
              <h3>Problem Solving Skills</h3>
            </div>
            <p className={styles.cardDescription}>
              Strong problem-solving abilities with 4-star rating in Problem Solving and C on 
              HackerRank, and solved 100+ problems on LeetCode.
            </p>
            <div className={styles.skillTags}>
              <span 
                className={`${styles.tag} ${selectedTags.has('HackerRank ⭐⭐⭐⭐') ? styles.selected : ''}`}
                onClick={() => handleTagClick('HackerRank ⭐⭐⭐⭐')}
              >
                HackerRank ⭐⭐⭐⭐
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('LeetCode 100+') ? styles.selected : ''}`}
                onClick={() => handleTagClick('LeetCode 100+')}
              >
                LeetCode 100+
              </span>
              <span 
                className={`${styles.tag} ${selectedTags.has('C Programming') ? styles.selected : ''}`}
                onClick={() => handleTagClick('C Programming')}
              >
                C Programming
              </span>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};