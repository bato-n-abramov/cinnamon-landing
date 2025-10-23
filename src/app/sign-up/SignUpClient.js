"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./SignUp.module.scss";
import SignUpForm from "@/components/sections/sign-up-form/SignUpForm";
import Logos from "@/components/sections/logos/Logos";


export default function SignUpClient() {
    return (
        <>
            <section className={styles.section}>
                <div className={`${styles.inner} container`}>
                    <div className={styles.formWrapper}>
                        <div className={styles.info}>
                            <h1 className={styles.title}>Sign Up</h1>
                            <div className={styles.text}>
                                <p>"Cinnamon significantly enhanced workflow efficiencies for our medical access teams, driving a 167% increase in copay claims year-over-year.</p>
                                <p>We're continuing to roll out the product across all functional groups, fueling substantial new revenues.</p>
                                <p>This enabled me to more than double our department's headcount to support ongoing expansion."</p>
                            </div>
                            <div className={styles.author}>
                                <div className={styles.image}><Image src={"/author.png"} width={200} height={200} alt="author" /></div>
                                <div className={styles.name}>Sheila Takieddine,<br />
                                    System Manager, <br /> Medication Access <br /> Services at UC Health</div>
                            </div>
                        </div>
                        <SignUpForm />
                        <div className={styles.infoMob}>
                            <div className={styles.text}>
                                <p>"Cinnamon significantly enhanced workflow efficiencies for our medical access teams, driving a 167% increase in copay claims year-over-year.</p>
                                <p>We're continuing to roll out the product across all functional groups, fueling substantial new revenues.</p>
                                <p>This enabled me to more than double our department's headcount to support ongoing expansion."</p>
                            </div>
                            <div className={styles.author}>
                                <div className={styles.image}><Image src={"/author.png"} width={200} height={200} alt="author" /></div>
                                <div className={styles.name}>Sheila Takieddine,<br />
                                    System Manager, <br /> Medication Access <br /> Services at UC Health</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Logos />
            </section>
        </>
    );
}

