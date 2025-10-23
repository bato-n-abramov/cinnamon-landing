"use client";

import styles from "./ThankYou.module.scss";
import VideoPlayer from "@/components/ui/video-player/VideoPlayer";

export default function ThankYou() {

    return (
        <div className={styles.thanks}>
            <h2 className={styles.title}>Thank you for your interest in Cinnamon!</h2>
            <p className={styles.text}>
                Our team will reach out within 24 hours with simple steps
                to get your account set up.
            </p>
            <VideoPlayer
                src="https://www.youtube.com/watch?v=xaCIK7kTaww"
                poster="/new_logo.png"
            />
        </div>
    );
}
