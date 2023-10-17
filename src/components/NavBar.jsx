"use client";

import { useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import Button from "./Button";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
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
  ListItemText,
  Menu,
  Stack,
  Toolbar,
} from "@mui/material";
// import FacebookLogin from "@greatsumini/react-facebook-login";

const NavBar = () => {
  const [navOpen, setnavOpen] = useState(false);
  const [user, setUser] = useState(false);

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
      Cookies.set("nike", credentialResponse.access_token);
      setUser(true);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  // google logout function
  const googleLogOut = () => {
    Cookies.remove("nike");
    setUser(false);
    googleLogout();
  };

  useEffect(() => {
    Cookies.get("nike") ? setUser(true) : setUser(false);
  }, []);

  return (
    <AppBar
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
        <Image src={headerLogo} alt="logo" />
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
            fontSize: "1rem" /* 16px */,
            lineHeight: "1.5rem" /* 24px */,
            [theme.breakpoints.up("md")]: {
              gap: 6,
            },
            [theme.breakpoints.up("lg")]: {
              gap: 20,
              fontSize: "1.125rem" /* 18px */,
              lineHeight: "1.75rem" /* 28px */,
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
              className="font-montserrat dark:text-dark-slate-gray transition duration-300 hover:text-coral-red dark:hover:text-coral-red"
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
      <Stack direction="row" className="flex_center">
        <ThemeButton />
        <HamburgerButton navOpen={navOpen} setnavOpen={setnavOpen} />
      </Stack>
      {/* <nav
        className={`md:hidden absolute transition duration-300 z-20 ${
          navOpen ? "top-full opacity-1" : "-top-[300%] opacity-0"
        } w-full bg-modal-color p-2 rounded`}
      >
        <ul className="flex flex-col text-base">
          {navLinks?.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="font-montserrat p-2 text-white-400 transition-all duration-300 hover:text-coral-red hover:pl-4"
            >
              <li>{item.label}</li>
            </a>
          ))}
        </ul>
        {user ? (
          <button
            onClick={() => googleLogOut()}
            className="font-semibold p-2 text-lg lg:text-xl font-montserrat transition-all duration-300 text-coral-red hover:pl-4"
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => googleLogin()}
            className="font-semibold p-2 text-lg lg:text-xl text-white-400 font-montserrat transition-all duration-300 hover:text-coral-red hover:pl-4"
          >
            Log in
          </button>
        )}
      </nav> */}
    </AppBar>
  );
};

export default NavBar;
