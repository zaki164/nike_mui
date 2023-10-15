import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

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
      <RxHamburgerMenu className="w-7 h-7 sm:w-9 sm:h-9" />
    </span>
  );
};

export default HamburgerButton;
