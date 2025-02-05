import React from "react";
import SkipLink from "./SkipLink";
import NavbarLinks from "./NavbarLinks";
import { useMediaQuery } from "@mantine/hooks";
import NavbarLinksSmall from "./NavbarLinksSmall";

function Navbar() {
  const lgMatches = useMediaQuery("(width >= 64rem)");
  return (
    <header className="fixed left-0 right-0 px-4 lg:px-16 pt-8 flex justify-between items-center">
      <SkipLink tabIndex={1} linkTo="#content" linkText="Skip Content" />
      <SkipLink tabIndex={2} linkTo="#footer" linkText="Skip to Footer" />
      <div className="bg-amber-300 px-12 py-6">
        <img src="#" alt="OM Digi Sign Logo" />
      </div>
      {lgMatches ? <NavbarLinks /> : <NavbarLinksSmall />}
    </header>
  );
}

export default Navbar;
