import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

function SubLink({ linkTo, linkText }) {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname === linkTo);

  useEffect(() => {
    if (pathname === linkTo) {
      setIsActive(true);
    }
  }, [pathname]);

  return (
    <motion.li variants={{ hover: { right: "0px" } }} whileHover="hover">
      <NavLink className="block py-1" to={linkTo}>
        <motion.span
          className="relative"
          initial={
            isActive
              ? { left: 12, color: "var(--primary)" }
              : { left: 0, color: "var(--tertiary)" }
          }
          variants={{
            hover: {
              left: 12,
              color: "var(--primary)",
            },
          }}
          transition={{
            type: "tween",
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          {linkText}
          <motion.span
            className="absolute -bottom-1 left-0 bg-(--primary) h-[1px]"
            initial={isActive && { right: "0px" }}
            variants={{ hover: { right: "0px" } }}
            transition={{
              type: "tween",
              duration: 0.2,
              ease: "easeOut",
            }}
          ></motion.span>
        </motion.span>
      </NavLink>
    </motion.li>
  );
}

export default SubLink;
