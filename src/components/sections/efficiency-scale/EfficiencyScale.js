"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./EfficiencyScale.module.scss";

export default function EfficiencyScale() {

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
            id="efficiency-scale" className={styles.section}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} custom={0} className={styles.title}>From Clinic to System, Efficiency Scales with Cinnamon</motion.h2>
                <div className={styles.list}>
                    <motion.div variants={fadeUp} custom={1} className={styles.item}>
                        <div className={styles.icon}>
                            <Image src={"/check-green.png"} width={200} height={200} alt="check" />
                        </div>
                        <div className={styles.itemText}>Cinnamon delivers measurable impact across
                            every level of care.</div>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={2} className={styles.item}>
                        <div className={styles.icon}>
                            <Image src={"/check-green.png"} width={200} height={200} alt="check" />
                        </div>
                        <div className={styles.itemText}>Clinics work faster with fewer handoffs.</div>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={3} className={styles.item}>
                        <div className={styles.icon}>
                            <Image src={"/check-green.png"} width={200} height={200} alt="check" />
                        </div>
                        <div className={styles.itemText}>Health systems unlock new capacity and revenue
                            without expanding headcount.</div>
                    </motion.div>
                </div>
                <motion.div variants={fadeUp} custom={4} className={styles.text}>By streamlining access and adherence, your teams spend less time managing workflows and more time focused on patient outcomes.<br /> <strong>Where it matters most.</strong></motion.div>
            </div>
        </motion.section>
    );
}
