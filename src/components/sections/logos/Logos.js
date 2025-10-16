"use client";

import Image from "next/image";
import styles from "./Logos.module.scss";

export default function Logos() {


  const Images = [
    { id: 23, url: "/Mask_group_6385aff067.png", width: 180, height: 27, name: "Mask group.png" },
    { id: 17, url: "/Mask_group_5_a0cff2bb86.png", width: 180, height: 51, name: "Mask group-5.png" },
    { id: 15, url: "/Mask_group_4_5fca5d81fc.png", width: 180, height: 39, name: "Mask group-4.png" },
    { id: 14, url: "/Mask_group_3_24ae6c5233.png", width: 180, height: 51, name: "Mask group-3.png" },
    { id: 13, url: "/Mask_group_1_934ee02d69.png", width: 180, height: 45, name: "Mask group-1.png" },
    { id: 12, url: "/Mask_group_2_52c581c897.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 33, url: "/Mask_group.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 44, url: "/Mask_group-1.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 45, url: "/Mask_group-2.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 46, url: "/Mask_group-3.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 47, url: "/Mask_group-4.png", width: 180, height: 51, name: "Mask group-2.png" },
  ]


  const doubled = [...Images, ...Images];

  return (
    <section className={styles.logos}>
      <div className={`${styles.logosWrapper} container`}>
        <div className={styles.logosTitle}>Trusted by</div>
      </div>

      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          <ul className={styles.track}>
            {doubled.map((img, i) => {
              const url = img.url;
              const width = 180;
              const height = 45;
              return (
                <li key={`${img.id}-${i}`} className={styles.item}>
                  <Image
                    src={url}
                    alt={"Logo"}
                    width={width}
                    height={height}
                    className={styles.logoImg}
                    unoptimized
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
