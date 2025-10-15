import { motion } from "framer-motion";

export default function RevealMask({
  id = 'reveal',
  active = false,
  duration = 0.9,
  delay = 0,
}) {
  return (
    <mask
      id={id}
      x="0" y="0" width="100%" height="100%"
      maskUnits="userSpaceOnUse"
    >
      <motion.rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        style={{ originX: 0 }}
        transition={{ duration, ease: 'easeInOut', delay }}
        fill="white"
      />
    </mask>
  );
}
