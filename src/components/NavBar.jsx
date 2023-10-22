"use client";

import { useEffect, useRef, useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import Button from "./Button";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import ThemeButton from "./ThemeButton";
import HamburgerButton from "./HamburgerButton";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { setCookie, deleteCookie, getCookie } from "cookies-next";
// import FacebookLogin from "@greatsumini/react-facebook-login";

const NavBar = () => {
  const [user, setUser] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navRef = useRef();

  //   <FacebookLogin
  //   appId="808830491246849"
  //   onSuccess={(response) => console.log(response)}
  //   onFail={(error) => {
  //     console.log("Login Failed!", error);
  //   }}
  //   onProfileSuccess={(response) => {
  //     console.log("Get Profile Success!", response);
  //   }}
  //   render={({ onClick }) => (
  //     <Button label="Log in" semibold onClick={onClick} />
  //   )}
  // />

  // const handleLogout = async () => {
  //   try {
  //     // Make a request to Facebook's logout endpoint
  //     const response = await fetch('https://www.facebook.com/logout.php', {
  //       method: 'GET',
  //       credentials: 'include', // Include cookies in the request
  //     });

  //     if (response.ok) {
  //       // Logout successful, clear local session data (e.g., user token)
  //       // Implement your own logic to clear any local session data
  //       console.log('Logged out successfully');
  //     } else {
  //       // Handle logout error
  //       console.error('Logout failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during logout:', error);
  //   }
  // };

  // google login function
  const googleLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse.access_token);
      setCookie("nike", credentialResponse.access_token);
      setUser(true);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  // google logout function
  const googleLogOut = () => {
    deleteCookie("nike");

    setUser(false);
    googleLogout();
  };

  useEffect(() => {
    getCookie("nike") ? setUser(true) : setUser(false);
  }, []);

  return (
    <AppBar
      ref={navRef}
      elevation={0}
      sx={{
        bgcolor: "transparent",
        position: "absolute",
        top: 0,
        left: 0,
        py: 6,
        flexDirection: "row",
      }}
      className="flex_between"
    >
      <Link href="/">
        <Image
          src={headerLogo}
          alt="logo"
          style={{
            height: "auto",
            maxWidth: "100%",
          }}
        />
      </Link>
      <Box
        component="nav"
        hidden
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 1,
          },
        })}
      >
        <List
          sx={(theme) => ({
            flexGrow: 1,
            [theme.breakpoints.up("md")]: {
              gap: 4,
              fontSize: ".9rem",
              lineHeight: "1.5rem" /* 24px */,
            },
            [theme.breakpoints.up("lg")]: {
              gap: 13,
              fontSize: "1.125rem" /* 18px */,
              lineHeight: "1.75rem" /* 28px */,
            },
            [theme.breakpoints.up("xl")]: {
              gap: 20,
            },
          })}
          className="flex_center"
          disablePadding
        >
          {navLinks?.map((item, i) => (
            <ListItem
              disablePadding
              key={i}
              sx={{
                color: "secondary.main",
                width: "fit-content",
                transition: "0.3s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              className="font-montserrat navItemDark"
            >
              <ListItemButton href={item.href} sx={{ p: 0 }}>
                {item.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Stack className="flex_center" gap={4}>
          {user ? (
            <Button label="Log out" semibold onClick={googleLogOut} />
          ) : (
            <Button label="Log in" semibold onClick={googleLogin} />
          )}
        </Stack>
      </Box>
      <Stack className="flex_center">
        <ThemeButton navRef={navRef} />
        <HamburgerButton navRef={navRef} setAnchorEl={setAnchorEl} />
      </Stack>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        disableScrollLock
        className="flex_center"
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "modalColor.main",
            borderRadius: 3,
            width: "100%",
            display: {
              md: "none",
            },
          },
        }}
      >
        {navLinks?.map((item, i) => (
          <MenuItem
            href={item.href}
            component="a"
            key={i}
            onClick={() => setAnchorEl(null)}
            className="font-montserrat"
            sx={{
              color: "whiteSlate.main",
              transition: "0.3s",
              p: 3,
              "&:hover": {
                pl: 6,
                bgcolor: "secondary.main",
                color: "primary.main",
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
        <MenuItem
          component="a"
          onClick={user ? googleLogOut : googleLogin}
          className="font-montserrat"
          sx={{
            fontWeight: 600,
            color: user ? "primary.main" : "whiteSlate.main",
            transition: "0.3s",
            p: 3,
            fontSize: "1.125rem" /* 18px */,
            lineHeight: "1.75rem" /* 28px */,
            "&:hover": {
              pl: 6,
              bgcolor: "secondary.main",
              color: "primary.main",
            },
          }}
        >
          {user ? "Log out" : "Log in"}
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
