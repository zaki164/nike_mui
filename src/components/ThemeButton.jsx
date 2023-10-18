import { useEffect, useRef, useState } from "react";
import { themeOption } from "../constants";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { IconButton, Menu, MenuItem } from "@mui/material";

const ThemeButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [theme, setTheme] = useState("");
  const themeRef = useRef();

  // start handle show options
  const handleThemeIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option) => {
    setTheme(option);
    setAnchorEl(null);
  };
  // end handle show options

  // start handle change theme
  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (theme === "device") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  useEffect(() => {
    function handleDarkModeChange(e) {
      if (!localStorage.getItem("theme")) {
        setTheme("device");
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        setTheme(localStorage.getItem("theme"));
      }
    }

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    handleDarkModeChange(darkModeMediaQuery);

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);
  // end handle change theme

  return (
    <>
      <IconButton
        sx={{
          p: 0,
          mx: 6,
          color: "primary.main",
        }}
        onClick={handleThemeIconClick}
        ref={themeRef}
      >
        <Brightness4Icon sx={{ width: "1.75rem", height: "1.75rem" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        disableScrollLock
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "modalColor.main",
            borderRadius: 3,
            // left: "0 !important",
            minWidth: {
              xs: "90%",
              md: "13rem",
            },
          },
        }}
      >
        {themeOption.map((item, i) => (
          <MenuItem
            key={i}
            onClick={() => handleClose(item.option)}
            selected={item.option === theme}
            sx={{
              color: "white",
              transition: "0.3s",
              p: 3,
              pl: 5,
              "&:hover": {
                pl: 8,
                bgcolor: "secondary.main",
              },
              "&.Mui-selected ": {
                bgcolor: "primary.main",
              },
            }}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ThemeButton;
