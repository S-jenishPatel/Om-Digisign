import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

function SubLinkSmall({ linkTo, linkText }) {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname === linkTo);

  useEffect(() => {
    if (pathname === linkTo) {
      setIsActive(true);
    }
  }, [pathname]);

  return (
    <motion.li
      tabIndex="-1"
      variants={{
        initial: isActive
          ? { color: "var(--primary)" }
          : { color: "var(--tertiary)" },
        hover: { color: "var(--primary)" },
        tap: { color: "var(--primary)" },
      }}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <NavLink className="py-1" to={linkTo}>
        {linkText}
      </NavLink>
    </motion.li>
  );
}

export default SubLinkSmall;
