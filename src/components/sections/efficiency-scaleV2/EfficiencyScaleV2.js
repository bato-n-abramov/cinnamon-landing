"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./EfficiencyScaleV2.module.scss";

export default function EfficiencyScaleV2() {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: "linear" },
        }),
    };

    return (
        <section id="efficiency-scale" className={styles.section}>
            <div className={`${styles.inner} container`}>
                <div className={styles.tag}>What you gain</div>
                <h2 className={styles.title}>From Clinic to System,<br /> Efficiency Scales with Cinnamon</h2>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.itemIcon}><Image src={"/check.png"} width={200} height={200} alt={"check"} /></div>
                        <div className={styles.itemText}>Cinnamon delivers measurable impact across every level of care.</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemIcon}><Image src={"/calendar.png"} width={200} height={200} alt={"check"} /></div>
                        <div className={styles.itemText}>Clinics work faster with fewer handoffs.</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemIcon}><Image src={"/lock.png"} width={200} height={200} alt={"check"} /></div>
                        <div className={styles.itemText}>Health systems unlock new capacity and revenue without expanding headcount.</div>
                    </div>
                </div>
                <div className={styles.text}>By streamlining access and adherence, your teams spend less time managing workflows and more time focused on patient outcomes.<br /> <strong>Where it matters most.</strong></div>
            </div>
        </section>
    );
}
