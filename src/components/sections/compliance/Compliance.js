"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Compliance.module.scss";

export default function Compliance() {

    const sldeLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: (i = 0) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: "linear" },
        }),
    };

    const sldeRight = {
        hidden: { opacity: 0, x: 60 },
        visible: (i = 0) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: "linear" },
        }),
    };

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
            viewport={{ once: true, amount: 0.1 }}
            id="compliance" className={styles.section}>
            <div className={`${styles.inner} container`}>
                <div className={styles.wrapper}>
                    <div className={styles.textContent}>
                        <motion.h2 variants={sldeLeft} custom={0} className={styles.title}><strong>Built for Healthcare.<br /></strong>Trusted by Enterprise</motion.h2>
                        <motion.div variants={sldeLeft} custom={1} className={styles.text}>
                            Cinnamon is HIPAA-compliant, SOC 2 Type 2, and TX-RAMP certified. Our infrastructure is powered by Google Cloud, ensuring the highest standards of security, reliability, and scalability.
                        </motion.div>
                        <motion.div variants={sldeLeft} custom={2} className={`${styles.text} ${styles.orange}`}>
                            Our platform is designed with compliance at its core, giving health systems confidence that data integrity and patient privacy are always protected.
                        </motion.div>
                    </div>
                    <motion.div variants={sldeRight} custom={3} className={styles.image}>
                        <Image src={"/ComplianceIllustation.png"} width={700} height={700} alt={"image"} />
                    </motion.div>
                </div>
                <div className={styles.logos}>
                    <motion.div variants={fadeUp} custom={4}><Image src={"/Compliance1.png"} width={200} height={200} alt={"logos"} /></motion.div>
                    <motion.div variants={fadeUp} custom={5}><Image src={"/Compliance2.png"} width={200} height={200} alt={"logos"} /></motion.div>
                    <motion.div variants={fadeUp} custom={6}><Image src={"/Compliance3.png"} width={200} height={200} alt={"logos"} /></motion.div>
                </div>
            </div>
        </motion.section>
    );
}
