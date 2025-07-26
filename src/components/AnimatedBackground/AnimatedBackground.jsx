import React from 'react';
import styles from './AnimatedBackground.module.css';

export const AnimatedBackground = () => {
  console.log('AnimatedBackground component is rendering');
  
  return (
    <div className={styles.animatedBackground}>
      {/* Floating geometric shapes */}
      <div className={styles.shape} data-shape="circle"></div>
      <div className={styles.shape} data-shape="triangle"></div>
      <div className={styles.shape} data-shape="square"></div>
      <div className={styles.shape} data-shape="circle" data-size="large"></div>
      <div className={styles.shape} data-shape="triangle" data-size="small"></div>
      <div className={styles.shape} data-shape="square" data-size="medium"></div>
      
      {/* Floating particles */}
      {Array.from({ length: 60 }, (_, i) => (
        <div 
          key={i} 
          className={styles.particle} 
          style={{
            '--delay': `${Math.random() * 15}s`,
            '--duration': `${20 + Math.random() * 15}s`,
            '--start-x': `${Math.random() * 100}vw`,
            '--end-x': `${Math.random() * 100}vw`,
            '--size': `${2 + Math.random() * 4}px`
          }}
        ></div>
      ))}
      
      {/* Gradient orbs */}
      <div className={styles.gradientOrb} data-orb="1"></div>
      <div className={styles.gradientOrb} data-orb="2"></div>
      <div className={styles.gradientOrb} data-orb="3"></div>
      <div className={styles.gradientOrb} data-orb="4"></div>
      
      {/* Constellation effect */}
      <div className={styles.constellation}>
        {Array.from({ length: 20 }, (_, i) => (
          <div 
            key={i} 
            className={styles.star}
            style={{
              '--x': `${Math.random() * 100}vw`,
              '--y': `${Math.random() * 100}vh`,
              '--delay': `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
