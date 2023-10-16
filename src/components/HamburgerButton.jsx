"use client";

import { useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const HamburgerButton = ({ navOpen, setnavOpen }) => {
  const NavIconRef = useRef();

  // start handle show Nav
  const stopPropa = (e) => {
    e.stopPropagation();
  };
  const handleNavIconClick = (e) => {
    stopPropa(e);
    setnavOpen(!navOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target !== NavIconRef && navOpen) {
        setnavOpen(false);
      }
    });
  }, [navOpen]);
  // end handle show Nav

  return (
    <span
      className="md:hidden cursor-pointer"
      onClick={handleNavIconClick}
      ref={NavIconRef}
    >
      <MenuIcon className="w-7 h-7 sm:w-9 sm:h-9" />
    </span>
  );
};

export default HamburgerButton;
