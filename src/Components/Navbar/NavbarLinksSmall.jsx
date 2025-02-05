import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import NavbarLinkSmall from "./NavbarLinkSmall";
import links from "../../Models/NavbarLinks";

function NavbarLinksSmall() {
  const [menuClicked, setMenuClicked] = useState(false);
  // const [openSublinks, setOpenSublinks] = useState(null);
  return (
    <>
      <motion.div
        className="cursor-pointer"
        onClick={() => setMenuClicked(true)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setMenuClicked(true);
          }
        }}
        whileTap="menuTap"
        initial={{ transform: "scale(100%)" }}
        variants={{ menuTap: { transform: "scale(90%)" } }}
      >
        <Menu size={34} />
      </motion.div>
      <AnimatePresence>
        {menuClicked && (
          <motion.div
            className="z-10 fixed left-0 top-0 right-0 min-h-full bg-(--secondary) pt-8 overflow-y-scroll"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { transform: "translateY(-100%)" },
              animate: { transform: "translateY(0%)" },
              exit: {
                transform: "translateY(-100%)",
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  when: "afterChildren",
                  staggerChildren: 0.2,
                  staggerDirection: -1,
                },
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              staggerChildren: 0.2,
              when: "beforeChildren",
            }}
          >
            <motion.div
              className="flex justify-between items-center px-4 pb-6 mb-10"
              variants={{
                initial: {},
                animate: {},
                exit: {},
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="#"
                className="px-12 py-6 bg-amber-300"
                alt="OM Digi Sign Logo"
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.div
                tabIndex="0"
                className="hover:cursor-pointer"
                onClick={() => setMenuClicked(false)}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    setMenuClicked(false);
                  }
                }}
                whileHover={{ transform: "rotate(360deg)" }}
                variants={{
                  initial: { transform: "rotate(0deg) scale(50%)" },
                  animate: { transform: "rotate(180deg) scale(100%)" },
                  exit: { transform: "rotate(0deg) scale(50%)" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <X size={34} />
              </motion.div>
            </motion.div>
            {/* Slider Header */}
            <ul className="flex flex-col justify-center py-6 items-center gap-8 font-black tracking-wide text-3xl">
              {links.map((link, index) => {
                return (
                  <NavbarLinkSmall
                    key={index}
                    linkTo={link.linkTo}
                    linkText={link.linkText}
                    sublinks={link.sublinks}
                    // openSublinks={openSublinks}
                    // setOpenSublinks={setOpenSublinks}
                  />
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavbarLinksSmall;
