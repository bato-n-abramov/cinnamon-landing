"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./SustainedAdherence.module.scss";

export default function SustainedAdherence() {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: "linear" },
        }),
    };

    return (
        <motion.section id="sustained-adherence" initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.1 }} className={styles.section}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} custom={0} className={styles.title}>Adherence Sustained <strong>Through Connection</strong></motion.h2>
                <motion.div variants={fadeUp} custom={1} className={styles.text}>Cinnamon keeps patients on therapy long after the first approval.</motion.div>
                <motion.div variants={fadeUp} custom={2} className={styles.list}>
                    <div className={styles.arrow}><Image src={"/arrow-blue.png"} width={400} height={400} alt={"Arrow"} /></div>
                    <motion.div variants={fadeUp} custom={3} className={styles.item}>
                        Through <strong>automated adherence campaigns</strong>, our platform sends <strong>timely reauthorization notifications</strong>, guides re-enrollment and delivers <strong>medication reminders</strong> that <strong>prevent treatment gaps.</strong>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={4} className={styles.item}>By aligning health systems, patients, and manufacturers, <strong>Cinnamon creates an ecosystem</strong> of follow-through that <strong>reduces denials, lowers out-of-pocket costs</strong> and <strong>strengthens long-term adherence.</strong></motion.div>
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                >
                    <a
                        href={"/sign-up"}
                        className={`${styles.cta} button-icon`}
                    >
                        <span className='button-icon-text'>Create your free account</span>
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
                <motion.div variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={5} className={styles.subtext}>
                    Join the network transforming access nationwide.
                </motion.div>
            </div>
        </motion.section>
    );
}
