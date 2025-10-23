"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import desktopAnim from "@/lottie/desktop2.json";

import styles from "./PriorAuthorization.module.scss";

export default function PriorAuthorization() {
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
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} className={styles.section}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} custom={0} className={styles.title}>Prior Authorization, <strong>Transformed by AI.</strong></motion.h2>
                <motion.div variants={fadeUp} custom={1} className={styles.text}>
                    <strong>Cinnamon’s Prior Authorization</strong> matches payer requirements with up to <strong>98% accuracy</strong>,
                    ensuring each request is complete, compliant, and ready for instant review.
                </motion.div>
                <div className={styles.content}>
                    <motion.div variants={fadeUp} custom={2} className={styles.list}>
                        <div className={styles.item}>
                            Our predictive engine <strong>keeps pace with evolving payer rules</strong>. Smart resubmission workflows <strong>accelerate appeals while reducing denials</strong>.
                        </div>
                        <div className={styles.arrow}>
                            <Image src={"/arrow-blue2.png"} width={400} height={400} alt={"Arrow"} />
                        </div>
                        <div className={styles.item}>
                            Each submission is automatically validated against plan-specific criteria and pre-populated with the right clinical and insurance details, <strong>turning hours of manual entry into minutes.</strong>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} className={styles.image} onViewportEnter={() => {
                        desktopRef.current?.setSpeed(1.5);
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

                            className={`${styles.lottie} ${styles.desktop}`}
                        />
                    </motion.div>
                    <motion.div variants={fadeUp} custom={2} className={styles.list}>
                        <div className={`${styles.item} ${styles.bold}`}>
                            Prior authorization moves in sync with care delivery.
                        </div>
                        <div className={styles.arrow}>
                            <Image src={"/arrow-blue2.png"} width={400} height={400} alt={"Arrow"} />
                        </div>
                        <div className={styles.item}>
                            Cinnamon will <strong>guide you to the appropriate next step</strong> based on our coverage waterfall algorithm. Staff <strong>stays focused on your patients</strong> instead of paperwork.
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}