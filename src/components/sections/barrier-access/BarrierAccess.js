"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./BarrierAccess.module.scss";

export default function BarrierAccess() {

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
            viewport={{ once: true, amount: 0.1 }} id="barrier-access" className={styles.section}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} custom={0} className={styles.title}>The Biggest Barrier To Access Isn’t Cost.<strong> It’s Process</strong></motion.h2>
                <motion.div variants={fadeUp} custom={1} className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.itemImage}>
                            <Image src={"/barrierAccess1.png"} width={200} height={200} alt="Image" />
                        </div>
                        <div className={styles.itemText}>
                            Behind every specialty prescription is
                            a chain of repetitive, manual steps that delay therapy starts and stretch staff thin. Faxing forms, chasing signatures, checking benefits. <strong>The work piles up fast.</strong>
                        </div>
                    </div>
                    <div className={styles.arrow}>
                        <Image src={"/arrow-orange.png"} width={100} height={100} alt={"Arrow"} />
                    </div>
                    <div className={`${styles.item} ${styles.border}`}>
                        <div className={styles.itemImage}>
                            <Image src={"/barrierAccess2.png"} width={200} height={200} alt="Image" />
                        </div>
                        <div className={styles.itemText}>
                            <p>Cinnamon changes what’s possible.</p>
                            <strong>We eliminate those inefficiencies</strong> by enabling teams to move patients to therapy faster, serve more people with the same team, and create a smoother experience for every stakeholder involved.
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
