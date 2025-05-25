import { easeInOut, motion } from "framer-motion";
import React from "react";

interface Props {
  timing?: typeof easeInOut;
  duration: number;
  children: React.ReactNode;
}

const ComponentMotion: React.FC<Props> = ({
  timing = easeInOut,
  duration,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: duration,
        ease: timing,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ComponentMotion;
