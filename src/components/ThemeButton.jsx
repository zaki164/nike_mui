import { useEffect, useState } from "react";
import { themeOption } from "../constants";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton, Menu, MenuItem } from "@mui/material";

const ThemeButton = ({ navRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [theme, setTheme] = useState("");
  const [isMediaQueryMatch, setIsMediaQueryMatch] = useState(false);
  const [hasDark, setHasDark] = useState(false);

  // start handle show options
  const handleThemeIconClick = (event) => {
    isMediaQueryMatch
      ? setAnchorEl(event.currentTarget)
      : setAnchorEl(navRef.current);
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
    document.documentElement.classList.contains("dark")
      ? setHasDark(true)
      : setHasDark(false);
  }, [theme]);

  useEffect(() => {
    // handle darkMode

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

    // handle position of menu

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaQueryChange = (e) => {
      setIsMediaQueryMatch(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    setIsMediaQueryMatch(mediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
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
      >
        {hasDark ? (
          <Brightness7Icon sx={{ width: "1.75rem", height: "1.75rem" }} />
        ) : (
          <Brightness4Icon sx={{ width: "1.75rem", height: "1.75rem" }} />
        )}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        disableScrollLock
        sx={(theme) => ({
          "& .MuiPaper-root": {
            bgcolor: "modalColor.main",
            borderRadius: 3,
            mt: 5,
            width: "13rem",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          },
        })}
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
