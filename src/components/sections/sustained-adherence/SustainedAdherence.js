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
                        Through automated adherence campaigns, our platform sends timely reauthorization notifications, guides re-enrollment and delivers medication reminders that prevent treatment gaps.
                    </motion.div>
                    <motion.div variants={fadeUp} custom={4} className={styles.item}>By aligning health systems, patients, and manufacturers, Cinnamon creates an ecosystem of follow-through that reduces denials, lowers out-of-pocket costs and strengthens long-term adherence.</motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
