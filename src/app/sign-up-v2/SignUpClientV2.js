"use client";

import { useState } from "react";
import styles from "./SignUpV2.module.scss";
import SignUpForm from "@/components/sections/sign-up-form/SignUpForm";
import Logos from "@/components/sections/logos/Logos";

export default function SignUpClientV2() {
    const [sent, setSent] = useState(false);

    return (
        <>
            <section className={styles.section}>
                <div className={`${styles.inner} container`}>
                    <div className={styles.formWrapper}>
                        {!sent && <h1 className={styles.title}>Sign Up</h1>}
                        <SignUpForm onSuccess={() => setSent(true)} cls={"center"} />
                    </div>
                </div>
            </section>
            {sent && <Logos />}
        </>

    );
}

