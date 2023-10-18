import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const HamburgerButton = ({ navRef, setAnchorEl }) => {
  return (
    <IconButton
      sx={(theme) => ({
        p: 0,
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      })}
      onClick={() => setAnchorEl(navRef.current)}
      // onClick={(event) => setAnchorEl(event.currentTarget)}
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
