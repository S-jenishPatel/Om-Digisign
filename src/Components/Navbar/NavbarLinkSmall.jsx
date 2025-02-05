import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import SubLinkSmall from "./SubLinkSmall";

function NavbarLinkSmall({
  linkTo,
  linkText,
  sublinks,
  // openSublinks,
  // setOpenSublinks,
}) {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(
    pathname === linkTo ||
      sublinks.some((sublink) => pathname === sublink.linkTo)
  );
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  useEffect(() => {
    if (
      pathname === linkTo ||
      sublinks.some((sublink) => pathname === sublink.linkTo)
    ) {
      setIsActive(true);
    }
  }, [pathname]);

  return (
    <motion.li
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => {
          // setOpenSublinks(linkTo);
          setIsLinkClicked((prev) => !prev);
        }}
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
        <NavLink to={linkTo}>{linkText}</NavLink>
        {sublinks.length > 0 && <ChevronRight className="inline" />}
      </motion.div>
      {sublinks.length > 0 && (
        <AnimatePresence>
          {isLinkClicked && (
            <motion.ul
              className="relative pt-6 text-xl flex flex-col justify-center items-center gap-4 w-100 overflow-hidden"
              initial={{ maxHeight: 0 }}
              animate={{ maxHeight: "1000px" }}
              exit={{
                maxHeight: 0,
              }}
              transition={{
                type: "tween",
                duration: 1.2,
                ease: "linear",
                delay: 0,
              }}
            >
              {sublinks.map((sublink, index) => {
                return (
                  <SubLinkSmall
                    key={index}
                    linkTo={sublink.linkTo}
                    linkText={sublink.linkText}
                  />
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </motion.li>
  );
}

export default NavbarLinkSmall;
