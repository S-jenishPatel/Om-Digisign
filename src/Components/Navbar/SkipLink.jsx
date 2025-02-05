import { motion } from "motion/react";
import React from "react";

function SkipLink({ tabIndex, linkTo, linkText }) {
  return (
    <motion.a
      tabIndex={tabIndex}
      href={linkTo}
      initial={{ transform: "translateX(-100%)", opacity: 0 }}
      whileFocus={{
        transform: "translateX(0%)",
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.3,
          delay: tabIndex / 10,
        },
      }}
      whileTap={{
        transform: "scale(0.95)",
        transition: { type: "tween", duration: 0.1, ease: "easeOut" },
      }}
      className="absolute left-2 top-2 px-8 py-4 bg-(--accent) text-(--primary) cursor-pointer"
    >
      {linkText}
    </motion.a>
  );
}

export default SkipLink;
