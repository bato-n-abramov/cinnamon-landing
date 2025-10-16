"use client";

import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.blob1} aria-hidden />
            <div className={styles.blob2} aria-hidden />
            <div className={styles.darkGradient} aria-hidden />
            <div className={`${styles.footerWrapper} container`}>

                <div className={styles.footerTop}>
                    <div className={styles.footerCol}>
                        <Link href="/" className={styles.footerLogo}>
                            <Image
                                src="/new_logo.png"
                                alt={"Logo"}
                                width={500}
                                height={500}
                                unoptimized
                            />
                        </Link>
                        <div className={styles.footerSubtitle}>Empowering healthcare through intelligent automation</div>
                        <Link className={`${styles.footerCta} button-primary`} href="/sign-up" target="_blank">
                            Sign up
                        </Link>
                    </div>

                    <div className={styles.footerCol}>
                        {/* <div className={styles.footerMenus}>
                            <ul className={styles.footerMenu}>
                                <li className={styles.footerMenuTitle}>Company</li>
                                <li className={styles.footerLink}>
                                    <Link href="https://cinnamon.health/prior-authorization" target="_blank">
                                        Prior authorization
                                    </Link>
                                </li>
                                <li className={styles.footerLink}>
                                    <Link href="https://cinnamon.health/financial-assistance" target="_blank">
                                        Financial assistance
                                    </Link>
                                </li>
                                <li className={styles.footerLink}>
                                    <Link href="https://cinnamon.health/premier-access" target="_blank">
                                        Premier access
                                    </Link>
                                </li>
                                <li className={styles.footerLink}>
                                    <Link href="https://cinnamon.health/our-story" target="_blank">
                                        Our story
                                    </Link>
                                </li>
                            </ul>
                            <ul className={styles.footerMenu}>
                                <li className={styles.footerMenuTitle}>Legal</li>
                                <li className={styles.footerLink}>
                                    <Link href="https://cinnamon.health/privacy-policy" target="_blank">
                                        Privacy policy
                                    </Link>
                                </li>
                                <li className={styles.footerLink}>
                                    <Link href="https://cinnamon.health/terms-of-use" target="_blank">
                                        Terms of service
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                        <div className={styles.footerLogos}>
                            <img
                                src={"/footer1.png"}
                                alt={"logo"}
                            />
                            <img
                                src={"/footer2.png"}
                                alt={"logo"}
                            />
                            <img
                                src={"/footer3.svg"}
                                alt={"logo"}
                            />
                        </div>
                        <div className={styles.footerText}>Cinnamon is HIPAA-compliant, SOC 2 Type 2 certified, and TX-RAMP certified.</div>
                    </div>
                </div>
            </div>
            <div className={styles.footerImage}>
                <Image
                    src="/footer_logo.svg"
                    alt="footer Logo"
                    width={500}
                    height={500}
                />
            </div>
        </footer>
    );
}