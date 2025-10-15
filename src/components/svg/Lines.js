import React, { useRef } from "react";
import { useInView } from "framer-motion";
import RevealMask from "@/components/svg/RevealMask";

export function LineOne({ className, id }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <svg ref={ref} className={className} width="155" height="214" viewBox="0 0 155 214" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <RevealMask id={id} duration={1.0} active={inView} />
      </defs>
      <g mask={`url(#${id})`}>
        <path
          d="M154.126 1.99205C154.674 1.92254 155.062 1.42204 154.992 0.874147C154.923 0.326254 154.422 -0.0615555 153.874 0.00795108L154 1L154.126 1.99205M154 1L153.874 0.00795108C143.244 1.35654 126.689 5.16019 112.794 18.5748C98.8779 32.0093 87.7797 54.9366 87.7797 94.2252C87.7797 104.39 90.1796 131.573 81.0672 156.223C76.5387 168.649 69.1732 180.582 57.2669 189.785C45.363 198.985 28.8503 205.509 6 208"
          fill="none"
          stroke="#08858F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="208" r="5.6" fill="#08858F" />
      </g>
    </svg>
  );
}

export function LineTwo({ className, id }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <svg ref={ref} className={className} width="152" height="12" viewBox="0 0 152 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <RevealMask id={id} duration={1.0} active={inView} />
      </defs>
      <g mask={`url(#${id})`}>
        <path d="M6 6 H151" fill="none" stroke="#08858F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="6" cy="6" r="5.6" fill="#08858F" />
      </g>
    </svg>
  );
}

export function LineThree({ className, id }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <svg ref={ref} className={className} width="155" height="214" viewBox="0 0 155 214" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <RevealMask id={id} duration={1.0} active={inView} />
      </defs>
      <g mask={`url(#${id})`}>
        <path
          d="M153.626 211.508C142.779 210.147 126.279 206.352 112.43 192.969C98.5608 179.566 87.5 156.694 87.5 119.5C87.5 109.36 89.8919 82.2422 80.6897 56.9682C78.0778 49.3018 70.5432 37.0512 58.315 27.5911C46.0842 18.1289 29.2279 11.5127 6 10"
          fill="none"
          stroke="#08858F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="10" r="5.6" fill="#08858F" />
      </g>
    </svg>
  );
}
