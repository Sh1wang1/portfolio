import React, { useEffect, useRef, useState } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Slight delay for title animation
          setTimeout(() => setTitleVisible(true), 200);
        } else {
          setIsVisible(false);
          setTitleVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-80px 0px -50px 0px'
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    // Check if we're already in view on mount (e.g., when navigating directly)
    const checkInitialPosition = () => {
      if (projectsRef.current) {
        const rect = projectsRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight * 0.8 && rect.bottom > 0) {
          setIsVisible(true);
          setTimeout(() => setTitleVisible(true), 200);
        }
      }
    };

    checkInitialPosition();

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section className={`${styles.container} ${isVisible ? styles.visible : ''}`} id="projects" ref={projectsRef}>
      <h2 className={`${styles.title} ${titleVisible ? styles.slideInDown : ''}`}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} isVisible={isVisible} index={id} />;
        })}
      </div>
    </section>
  );
};