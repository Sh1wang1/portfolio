import React, { useEffect, useState } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const textArray = [
    "Hi, I'm Shiwangi verma",
    "I'm a Full Stack developer"
  ];

  useEffect(() => {
    // Reset animations on every mount
    setIsLoaded(false);
    setDisplayText("");
    setShowCursor(true);
    
    // Small delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      setIsLoaded(true);
      
      const startTypewriterCycle = () => {
        let currentIndex = 0;
        
        const typewriterCycle = () => {
          const currentFullText = textArray[currentIndex];
          let charIndex = 0;
          
          // Typing effect
          const typeWriter = () => {
            if (charIndex < currentFullText.length) {
              setDisplayText(currentFullText.slice(0, charIndex + 1));
              charIndex++;
              setTimeout(typeWriter, 100);
            } else {
              // After typing is complete, wait then start erasing
              setTimeout(() => {
                const eraseWriter = () => {
                  if (charIndex > 0) {
                    setDisplayText(currentFullText.slice(0, charIndex - 1));
                    charIndex--;
                    setTimeout(eraseWriter, 50);
                  } else {
                    // Move to next text
                    currentIndex = (currentIndex + 1) % textArray.length;
                    setTimeout(typewriterCycle, 500);
                  }
                };
                eraseWriter();
              }, 2000); // Wait 2 seconds before erasing
            }
          };
          
          typeWriter();
        };
        
        typewriterCycle();
      };
      
      setTimeout(startTypewriterCycle, 500);
    }, 100);

    // Continuous cursor blinking - independent of typing
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);

    return () => {
      clearTimeout(initTimer);
      clearInterval(cursorInterval);
    };
  }, []); // Remove dependency to ensure it runs on every mount

  return (
    <section className={styles.container} id="hero">
      <div className={`${styles.content} ${isLoaded ? styles.fadeInUp : ''}`}>
        <h1 className={styles.title}>
          <span className={styles.typewriter}>{displayText}</span>
          <span className={`${styles.cursor} ${showCursor ? styles.visible : styles.hidden}`}>|</span>
        </h1>
        <p className={`${styles.description} ${isLoaded ? styles.slideInLeft : ''}`}>
        Dynamic and highly motivated B.Tech student in Computer Science with a strong academic record 
        and a deep passion for full-stack web development. Skilled in React.js, Python, JavaScript, 
        HTML, CSS, Bootstrap, and Tailwind CSS. Proficient with tools like Git, GitHub, and AWS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:shiwangiverma2003@gmail.com" className={`${styles.contactBtn} ${isLoaded ? styles.bounceIn : ''}`}>
          <span className={styles.btnText}>Contact Me</span>
          <span className={styles.btnIcon}>→</span>
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${isLoaded ? styles.zoomIn : ''}`}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <div className={styles.floatingElements}>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
      </div>
    </section>
  );
};