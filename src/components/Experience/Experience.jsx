import React, { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const Experience= () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const bgAnimation = document.getElementById('bgAnimation');
      // Clear existing particles
      if (bgAnimation) {
        bgAnimation.innerHTML = '';
      }
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = styles.particle;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = Math.random() * 3 + 4 + 's';
        bgAnimation?.appendChild(particle);
      }

      const skillObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const progress = entry.target;
              const targetWidth = progress.dataset.width;
              progress.style.width = '0%';
              setTimeout(() => {
                progress.style.width = targetWidth;
              }, 200);
            }
          });
        },
        { threshold: 0.5 }
      );

      document.querySelectorAll(`.${styles.progressFill}`).forEach(bar => skillObserver.observe(bar));
    }
  }, [isVisible]);

  const filterSkills = (category) => {
    document.querySelectorAll(`.${styles.categoryBtn}`).forEach(btn =>
      btn.classList.remove(styles.active)
    );
    document
      .querySelector(`[data-category="${category}"]`)
      .classList.add(styles.active);

    document.querySelectorAll(`.${styles.skillCard}`).forEach(card => {
      const show = category === 'all' || card.dataset.category === category;
      card.style.display = show ? 'block' : 'none';
    });
  };

  return (
    <>
      <div id="bgAnimation" className={styles.bgAnimation}></div>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`} id="experience" ref={experienceRef}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${isVisible ? styles.slideInDown : ''}`}>Technical Skills</h2>
         
        </div>

        <div className={`${styles.categories} ${isVisible ? styles.slideInUp : ''}`}>
          {['all', 'frontend', 'backend', 'programming language'].map(category => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${category === 'all' ? styles.active : ''}`}
              data-category={category}
              onClick={() => filterSkills(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {skills.map(({ name, level, width, icon, category }, index) => (
            <div 
              className={`${styles.skillCard} ${isVisible ? styles.fadeInUp : ''}`} 
              key={index} 
              data-category={category}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={styles.skillIcon}>
                <img
                        src={getImageUrl(icon)}
                        alt={`Image of ${name}`}
                      />
              </div>
              <div className={styles.skillName}>{name}</div>
              <div className={styles.skillLevel}>{level}</div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} data-width={width} style={{ width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
