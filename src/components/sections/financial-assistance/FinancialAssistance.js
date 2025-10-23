"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import styles from "./FinancialAssistance.module.scss";
import desktopAnim from "@/lottie/desktop3.json";

export default function FinancialAssistance() {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: "linear" },
        }),
    };

    const desktopRef = useRef(null);


    return (
        <motion.section id="financial-assistance" initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.1 }} className={styles.section}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} custom={0} className={styles.title}><strong>Financial Assistance,</strong><br />
                    Built Into Care</motion.h2>
                <motion.div variants={fadeUp} custom={1} className={styles.text}>
                    <p>Cinnamon makes affordability part of the clinical workflow.</p>
                    <p>Our platform connects charity care, nonprofit foundations, manufacturer copay programs, and Patient Assistance Programs into one compliant, automated process so no patient is left behind because of cost.</p>
                </motion.div>
                <motion.div variants={fadeUp} custom={2} className={styles.list}>
                    <motion.div variants={fadeUp} custom={3} className={styles.item}>
                        <p>Using EHR signals, Cinnamon screens for eligibility, fills in program forms, captures e-signatures, and tracks renewals automatically.</p>
                        <p>Funds open and close quickly, but Cinnamon keeps pace, matching patients to available support in real time and prompting teams when new opportunities appear.</p>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={4} className={styles.item}>
                        <p>Our <strong>Coverage Waterfall</strong> checks every layer of assistance including <strong>Medicaid, Medicare subsidies, state/national foundation grants, manufacturer copay,
                            PAPs, and charity care/340B.</strong></p>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={4} className={styles.item}>
                        <p>Financial relief reaches patients when care hangs in the balance, removing financial barriers so access remains steady and uninterrupted.</p>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div variants={fadeUp} className={styles.image} onViewportEnter={() => {
                desktopRef.current?.setSpeed(1);
                desktopRef.current?.goToAndPlay(0);
            }}
                viewport={{
                    once: true,
                    amount: 0.3
                }}
            >
                <Lottie
                    lottieRef={desktopRef}
                    animationData={desktopAnim}
                    autoplay={false}
                    loop={false}

                    className={`${styles.lottie}`}
                />
            </motion.div>
            <div className={`${styles.inner} container`}>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={6}
                >
                    <a
                        href={"/sign-up"}
                        className={`${styles.cta} button-icon`}
                    >
                        <span className='button-icon-text'>Create Your Free Account</span>
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
                    custom={7}>
                    <div className={styles.subtext}>Join the network transforming access nationwide.</div>
                </motion.div>
            </div>
        </motion.section>
    );
}
