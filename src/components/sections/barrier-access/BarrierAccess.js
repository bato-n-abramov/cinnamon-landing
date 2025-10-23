"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Lottie from "lottie-react";
import { motion, useInView } from "framer-motion";
import styles from "./BarrierAccess.module.scss";

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        const mql = window.matchMedia(query);
        const onChange = () => setMatches(mql.matches);
        onChange();
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [query]);
    return matches;
}


export default function BarrierAccess() {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: "linear" },
        }),
    };

    const isMobile = useMediaQuery("(max-width: 767px)");
    const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
    const lottieRef = useRef(null);

    const graphicRef = useRef(null);
    const inView = useInView(graphicRef, { amount: 0.2, margin: "0px", once: false });

    const [animData, setAnimData] = useState(null);

    useEffect(() => {
        let alive = true;
        (async () => {
            const mod = await (isMobile
                ? import("@/lottie/mobile.json")
                : import("@/lottie/desktop.json"));
            if (alive) setAnimData(mod.default);
        })();
        return () => {
            alive = false;
        };
    }, [isMobile]);



    const play = () => {
        const anim = lottieRef.current;
        if (!anim) return;
        try {
            anim.stop?.();
            anim.goToAndStop?.(0, true);
        } catch (e) { }
        anim.setSpeed(prefersReducedMotion ? 1 : 2);
        anim.goToAndPlay(0, true);
    };

    useEffect(() => {
        if (inView && animData) play();
    }, [inView, animData, prefersReducedMotion]);

    useEffect(() => {
        if (inView && animData) play();
    }, [isMobile]);

    return (
        <motion.section id="barrier-access"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} className={styles.section}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} custom={0} className={styles.title}>The Biggest Barrier To Access Isn’t Cost.<strong> It’s Process</strong></motion.h2>
                <motion.div variants={fadeUp} custom={1} className={styles.subtitle}>Behind every specialty prescription sits a maze of manual steps: faxing forms, chasing signatures, checking benefits. <strong>Nearly 30% of prescriptions never get filled because of a manual workflow breakdown.</strong></motion.div>
            </div>
            <div className={styles.content}>
                <div className={`${styles.inner} container`}>
                    <motion.div variants={fadeUp} custom={2} className={`${styles.item} ${styles.orange}`}>
                        <Image src={"/arrow-orange.png"} width={200} height={200} alt={"Image"} />
                        <p>Cinnamon transforms the post-Rx workflow.</p>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={3} className={styles.text}>By integrating directly into your EHR, we cut manual steps, shorten time to therapy, and improve adherence across every specialty.</motion.div>
                    <div className={styles.list}>
                        <motion.div variants={fadeUp} custom={4} className={styles.item}>After a prescription is signed, Cinnamon reduces <strong>time to prior-authorization submission by nearly 50%</strong> by eliminating back-and-forth between tools. Everything happens on <strong>one screen.</strong></motion.div>
                        <motion.div variants={fadeUp} custom={4} className={styles.item}>Our AI preempts common errors that can cause <strong>up to 30-day delays</strong> and anticipates documentation gaps that block approvals, improving <strong> approval rates by 1 to 2%</strong> across therapies.</motion.div>
                    </div>
                </div>
                <motion.div className={styles.graphic} ref={graphicRef}
                    variants={fadeUp}>
                    {animData && (
                        <Lottie
                            lottieRef={lottieRef}
                            animationData={animData}
                            autoplay={false}
                            loop={false}
                            className={styles.lottie}
                        />
                    )}
                    <div className={styles.graphicItem}>
                        No switching between tools. No duplicate data entry.
                    </div>
                </motion.div>
                <div className={`${styles.inner} container`}>
                    <motion.h3 variants={fadeUp} custom={7} className={`${styles.title} ${styles.bold}`}>From independent clinics to multi-hospital networks, <strong>efficiency scales with Cinnamon</strong></motion.h3>
                    <div className={styles.listIcons}>
                        <motion.div variants={fadeUp} custom={8} className={styles.itemIcon}>
                            <Image src={"/check2.png"} className={styles.icon} width={200} height={200} alt={"check"} />
                            <div className={styles.itemText}>Health systems unlock new capacity and revenue without adding headcount.
                            </div>
                        </motion.div>
                        <motion.div variants={fadeUp} custom={9} className={styles.itemIcon}>
                            <Image src={"/check2.png"} className={styles.icon} width={200} height={200} alt={"check"} />
                            <div className={styles.itemText}>Clinics process more prescriptions
                                with the same team.
                            </div>
                        </motion.div>
                        <motion.div variants={fadeUp} custom={10} className={styles.itemIcon}>
                            <Image src={"/check2.png"} className={styles.icon} width={200} height={200} alt={"check"} />
                            <div className={styles.itemText}>Patients start therapy sooner
                                and stay on it longer.
                            </div>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeUp} custom={11} className={styles.subText}>Turn post-Rx complexity into coordinated care
                        that delivers measurable, lasting impact.</motion.div>
                </div>
            </div>
        </motion.section>
    );
}
