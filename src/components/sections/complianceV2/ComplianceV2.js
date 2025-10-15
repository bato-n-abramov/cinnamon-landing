"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ComplianceV2.module.scss";

export default function ComplianceV2() {

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
            <div className={`${styles.inner} container`}>
                <div className={styles.tag}>Why It’s Safe</div>
                <h2 className={styles.title}><strong>Built for Healthcare.</strong> Trusted by Enterprise</h2>
                <div className={styles.block}>
                    <div className={styles.blockTitle}>Cinnamon is</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="440" height="29" viewBox="0 0 440 29" fill="none">
                        <path d="M438.5 28V1H1.5V26.8261" stroke="#E69138" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className={styles.list}>
                        <div className={styles.item}>HIPAA-compliant</div>
                        <div className={styles.item}>SOC 2 Type 2, and TX-RAMP certified</div>
                    </div>
                    <div className={styles.text}>Our infrastructure is powered by Google Cloud, ensuring the highest standards of security, reliability, and scalability.</div>
                </div>
                <div className={styles.arrow}>
                    <Image src={"/arrow-orange.png"} width={100} height={100} alt={"Arrow"} />
                </div>
                <div className={`${styles.item} ${styles.orange}`}>
                    Our platform is designed with compliance at its core, giving health systems confidence
                    that data integrity and patient privacy are always protected.
                </div>
                <div className={styles.logos}>
                    <Image src={"/Compliance1.png"} width={200} height={200} alt={"logos"} />
                    <Image src={"/Compliance2.png"} width={200} height={200} alt={"logos"} />
                    <Image src={"/Compliance3.png"} width={200} height={200} alt={"logos"} />
                </div>
            </div>
        </section>
    );
}
