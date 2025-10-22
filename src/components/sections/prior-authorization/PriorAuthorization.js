"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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


    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} className={styles.section}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} custom={0} className={styles.title}>Prior Authorization, <strong>Transformed by AI</strong></motion.h2>
                <motion.div variants={fadeUp} custom={1} className={styles.text}>
                    <strong>Cinnamon’s Prior Authorization AI</strong> matches payer requirements with over <strong>98% accuracy</strong>,
                    ensuring each request is complete, compliant, and ready for instant review.
                </motion.div>
                <div className={styles.content}>
                    <motion.div variants={fadeUp} custom={2} className={styles.list}>
                        <div className={styles.item}>
                            Our predictive engine keeps pace with evolving payer rules, and smart resubmission workflows <strong>accelerate appeals while reducing denials.</strong>
                        </div>
                        <div className={styles.arrow}>
                            <Image src={"/arrow-blue.png"} width={400} height={400} alt={"Arrow"} />
                        </div>
                        <div className={styles.item}>
                            Each submission is automatically validated against plan-specific criteria and pre-populated with the right clinical and insurance details, <strong>turning hours of manual entry into minutes.</strong>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={3} className={styles.image}>
                        <Image src={"/prior.png"} width={1400} height={700} alt={"image"} unoptimized />
                    </motion.div>
                    <motion.div variants={fadeUp} custom={3} className={`${styles.image} ${styles.mob}`}>
                        <Image src={"/prior-mob.png"} width={1400} height={700} alt={"image"} unoptimized />
                    </motion.div>
                    <motion.div variants={fadeUp} custom={2} className={styles.list}>
                        <div className={`${styles.item} ${styles.bold}`}>
                            Prior authorization moves in sync with care delivery.
                        </div>
                        <div className={styles.arrow}>
                            <Image src={"/arrow-blue.png"} width={400} height={400} alt={"Arrow"} />
                        </div>
                        <div className={styles.item}>
                            <strong>Approvals come faster</strong>, accuracy <strong>stays high</strong>, and staff <strong>stay focused on your patients</strong> instead of paperwork.
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}