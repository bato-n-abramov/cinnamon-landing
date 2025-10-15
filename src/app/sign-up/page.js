import Image from "next/image";
import styles from "./SignUp.module.scss";
import SignUpForm from "@/components/sections/sign-up-form/SignUpForm";

export const dynamic = "force-static";



export default function SignUpPage() {

    return (
        <main className={styles.SignUpMain}>
            <section className={styles.section}>
                <div className={`${styles.inner} container`}>
                    <div className={styles.formWrapper}>
                        <div className={styles.info}>
                            <h1 className={styles.title}>Sign Up</h1>
                            <div className={styles.image}><Image src={"/contact.png"} width={700} height={700} alt={"image"} /></div>
                        </div>
                        <SignUpForm />
                    </div>
                </div>
            </section>
        </main>
    );
}

