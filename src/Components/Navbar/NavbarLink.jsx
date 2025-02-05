import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import SubLink from "./SubLink";

function NavbarLink({ linkTo, linkText, sublinks }) {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname === linkTo);

  useEffect(() => {
    if (pathname === linkTo) {
      setIsActive(true);
    }
  }, [pathname]);

  return (
    <motion.li
      className="relative"
      whileHover="hover"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        hover: {},
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <NavLink to={linkTo} className="block">
        {linkText}
      </NavLink>
      <motion.span
        className="absolute -bottom-1 left-0 bg-(--primary) h-[2.5px]"
        initial={isActive && { right: "0px" }}
        variants={{ hover: { right: "0px" } }}
        transition={{
          type: "tween",
          duration: 0.1,
          ease: "easeOut",
          delay: 0.1,
        }}
      ></motion.span>

      {sublinks.length > 0 && (
        <motion.ul
          className="absolute top-16 -left-6 bg-(--secondary) text-sm px-4 py-6 flex-col gap-2 w-64"
          initial={{ display: "none", opacity: 0 }}
          variants={{ hover: { display: "flex", opacity: 1 } }}
          transition={{
            type: "tween",
            duration: 0.1,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          {sublinks.map((sublink, index) => {
            return (
              <SubLink
                key={index}
                linkTo={sublink.linkTo}
                linkText={sublink.linkText}
              />
            );
          })}
        </motion.ul>
      )}
    </motion.li>
  );
}

export default NavbarLink;
