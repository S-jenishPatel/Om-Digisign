import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import links from "../../Models/NavbarLinks";

function NavbarLinks() {
  return (
    <ul className="flex justify-between items-center gap-8 font-medium tracking-wide">
      {links.map((link, index) => {
        return (
          <NavbarLink
            key={index}
            linkTo={link.linkTo}
            linkText={link.linkText}
            sublinks={link.sublinks}
          />
        );
      })}
    </ul>
  );
}

export default NavbarLinks;
