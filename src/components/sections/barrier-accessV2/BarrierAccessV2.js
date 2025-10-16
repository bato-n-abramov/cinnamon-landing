"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./BarrierAccessV2.module.scss";

export default function BarrierAccessV2() {

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
                <div className={styles.tag}>Why you need it</div>
                <h2 className={styles.title}>The Biggest Barrier <br /> To Access Isn’t Cost.<strong> It’s Process</strong></h2>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <div className={styles.text}>Behind every specialty prescription is a chain of repetitive, manual steps that delay therapy starts and stretch staff thin. Faxing forms, chasing signatures, checking benefits.</div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.itemTag}>
                                    Problem
                                </div>
                                <div className={styles.itemText}><strong>The work piles up fast.</strong></div>
                            </div>
                            <div className={styles.mobImage}>
                                <Image src={"/barrierAccess1.png"} width={200} height={200} alt={"Image"} />
                            </div>
                            <div className={styles.arrow}>
                                <Image src={"/arrow-orange.png"} width={100} height={100} alt={"Arrow"} />
                            </div>
                            <div className={`${styles.item} ${styles.border}`}>
                                <div className={styles.arrowMob}>
                                    <Image src={"/arrow-orange-2.png"} width={100} height={100} alt={"Arrow"} />
                                </div>
                                <div className={styles.itemImage}>
                                    <Image src={"/barrierAccess2.png"} width={200} height={200} alt="Image" />
                                </div>
                                <div className={styles.itemText}>
                                    <p><strong>Cinnamon changes what’s possible.</strong><br /></p>
                                    We <strong>eliminate those inefficiencies</strong> by enabling teams to move patients to therapy faster, serve more people with the same team, and create a smoother experience for every stakeholder involved.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image src={"/BarrierAccessV2Illustration.png"} width={700} height={700} alt={"image"} />
                    </div>
                </div>
            </div>
        </section>
    );
}
