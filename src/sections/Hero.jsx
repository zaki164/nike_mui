import { useState } from "react";
import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <Stack
      id="home"
      sx={{
        width: "100%",
        justifyContent: "space-between",
        gap: 10,
        minHeight: "100vh",
        flexDirection: {
          xs: "column",
          xl: "row",
        },
      }}
    >
      {/* left section */}
      <Stack
        sx={{
          position: "relative",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          pt: 28,
          width: {
            xs: "100%",
            xl: "40%",
          },
        }}
      >
        <Typography
          component="p"
          sx={(theme) => ({
            fontWeight: 600,
            [theme.breakpoints.down("md")]: {
              fontSize: "1rem" /* 16px */,
              lineHeight: "1.5rem" /* 24px */,
            },
            [theme.breakpoints.up("md")]: {
              fontSize: "1.125rem" /* 18px */,
              lineHeight: "1.75rem" /* 28px */,
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "1.25rem" /* 20px */,
              lineHeight: "1.75rem" /* 28px */,
            },
          })}
          className="font-montserrat text-animation"
        >
          Our Summer collections
        </Typography>

        <Typography
          component="h1"
          sx={(theme) => ({
            mt: 6,
            fontSize: "3.75rem" /* 60px */,
            lineHeight: 1,
            fontWeight: 700,
            [theme.breakpoints.down("sm")]: {
              fontSize: "62px",
              lineHeight: "72px",
            },
            [theme.breakpoints.up("md")]: {
              mt: 10,
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "6rem" /* 96px */,
              lineHeight: 1,
              zIndex: 10,
            },
          })}
        >
          <Typography
            component="span"
            sx={(theme) => ({
              position: "relative",
              pr: 10,
              [theme.breakpoints.up("xl")]: {
                bgcolor: "darkbg.main",
                bgcolor: "white",
                whiteSpace: "nowrap",
              },
            })}
            className="bgDark"
          >
            The New Arrival
          </Typography>
          <br />
          <Typography
            component="span"
            sx={{
              display: "inline-block",
              mt: {
                xs: 2,
                md: 6,
              },
            }}
            className="text-animation"
          >
            Nike
          </Typography>{" "}
          Shoes
        </Typography>
        <Typography
          component="p"
          sx={(theme) => ({
            color: "secondary.main",
            lineHeight: "2rem" /* 32px */,
            mt: {
              xs: 3,
              md: 6,
            },
            mb: {
              xs: 10,
              md: 14,
            },
            [theme.breakpoints.up("sm")]: {
              maxWidth: "24rem" /* 384px */,
            },
          })}
          className="font-montserrat slateColorDark text-base-l"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </Typography>
        <Button label="Shop now" iconURL={arrowRight} href={"/"} />
        <Stack
          sx={{
            justifyContent: "start",
            alignItems: "start",
            flexWrap: "wrap",
            width: "100%",
            mt: {
              xs: 10,
              md: 20,
            },
            gap: {
              xs: 12,
              md: 16,
            },
          }}
        >
          {statistics.map((stat, index) => (
            <Box key={index}>
              <Typography
                component="p"
                sx={{
                  fontWeight: 700,
                }}
                className="text-3xl-4xl"
              >
                {stat.value}
              </Typography>
              <Typography
                component="p"
                sx={{
                  lineHeight: "1.75rem" /* 28px */,
                }}
                className="info-text"
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>

      {/* right section */}
      <Stack
        sx={{
          position: "relative",
          flexGrow: 1,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: "url('/collection-background.svg')",
        }}
        className="flex_center"
      >
        <Image src={bigShoeImg} alt="BigImgShoe" />
        <Stack
          className="flex_center"
          sx={(theme) => ({
            position: "absolute",
            width: "100%",
            gap: 4,
            [theme.breakpoints.down("sm")]: {
              top: "0.5rem" /* 8px */,
              left: "0.5rem" /* 8px */,
            },
            [theme.breakpoints.down("md")]: {
              top: "1rem" /* 16px */,
              left: "1rem" /* 16px */,
              flexDirection: "column",
              alignItems: "start !important",
            },
            [theme.breakpoints.up("md")]: {
              bottom: "-4rem" /* -64px */,
              gap: 8,
            },
          })}
        >
          {shoes.map((shoe, i) => (
            <ShoeCard
              key={i}
              shoe={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
