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
            </div>
        </motion.section>
    );
}
