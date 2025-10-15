"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export default function Hero() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "linear" },
    }),
  };

  return (
    <section className={styles.section}>
      <div className={styles.blob1} aria-hidden />
      <div className={styles.blob2} aria-hidden />
      <div className={styles.darkGradient} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <motion.h1
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >One platform. <br /> One partner.<em> Zero cost</em> </motion.h1>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1} className={styles.text}>Cinnamon automates prior authorization, patient access, and adherence
          by connecting directly to your EHR so patients start and stay on therapy faster.</motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <a
            href={"#id"}
            className={`${styles.cta} button-icon`}
          >
            <span className='button-icon-text'>Request a Demo</span>
            <span className='button-icon-arrow'>
              <svg className='arrow-hidden' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
              </svg>
              <svg className='arrow-move' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
              </svg>
            </span>
          </a>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3} className={styles.subtext}>Scalable from clinic to system.</motion.div>
      </div>
    </section>
  );
}
