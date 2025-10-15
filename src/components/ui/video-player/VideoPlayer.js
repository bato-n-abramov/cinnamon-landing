"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./VideoPlayer.module.scss";

const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";

export default function VideoPlayer({ src, poster }) {

    const videoSrc = {
        type: "video",
        poster,
        sources: [{ src, type: "video/mp4" }],
    };

    return (
        <div
            className="wrapper"
        >
            <Plyr
                source={videoSrc}
                options={{
                    controls: ["play-large", "play", "progress", "mute", "volume", "fullscreen"],
                    autoplay: false,
                }}

            />
        </div>
    );
}
