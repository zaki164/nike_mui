import { useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const HamburgerButton = ({ setAnchorEl }) => {
  // const NavIconRef = useRef();

  // // start handle show Nav
  // const stopPropa = (e) => {
  //   e.stopPropagation();
  // };
  // const handleNavIconClick = (event) => {
  // stopPropa(e);
  // setnavOpen(!navOpen);
  // };

  // useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     if (e.target !== NavIconRef && navOpen) {
  //       setnavOpen(false);
  //     }
  //   });
  // }, [navOpen]);
  // // end handle show Nav

  return (
    <IconButton
      sx={(theme) => ({
        p: 0,
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      })}
      onClick={(event) => setAnchorEl(event.currentTarget)}
      // ref={NavIconRef}
    >
      <MenuIcon
        sx={{
          color: "white",
          width: {
            xs: "1.75rem",
            sm: "2.25rem",
          },
          height: {
            xs: "1.75rem",
            sm: "2.25rem",
          },
        }}
      />
    </IconButton>
  );
};

export default HamburgerButton;
