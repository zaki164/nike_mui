import Image from "next/image";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor={"black"} px={{ xs: 9, md: 12 }} className="section_padding">
      <Stack
        justifyContent={"space-between"}
        alignItems={"start"}
        flexWrap={"wrap"}
        gap={{ xs: 16, lg: 20 }}
        sx={(theme) => ({
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
          },
        })}
      >
        <Stack flexDirection={"column"} alignItems={{ lg: "start" }}>
          <Link href="/">
            <Image src={footerLogo} alt="logo" width={150} height={46} />
          </Link>
          <Typography
            component="p"
            color={"whiteSlate.main"}
            mt={6}
            lineHeight="1.75rem"
            maxWidth={{ sm: "24rem" }}
            className="font-montserrat text-sm-base"
          >
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </Typography>
          <Stack alignItems={"center"} gap={5} mt={{ xs: 6, md: 8 }}>
            {socialMedia.map((icon) => (
              <Stack
                bgcolor={"white"}
                borderRadius={"9999px"}
                width={{
                  xs: "2rem",
                  sm: "3rem",
                }}
                height={{
                  xs: "2rem",
                  sm: "3rem",
                }}
                sx={{ cursor: "pointer" }}
                className="flex_center"
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack
          flexGrow={1}
          justifyContent={"space-between"}
          gap={{ xs: 16, lg: 10 }}
          flexWrap={"wrap"}
        >
          {footerLinks.map((section) => (
            <Box key={section.title}>
              <Typography
                component={"h4"}
                fontWeight={500}
                lineHeight={1.5}
                mb={{ xs: 4, md: 6 }}
                color={"white"}
                className="font-montserrat text-xl-2xl"
              >
                {section.title}
              </Typography>
              <List>
                {section.links.map((link) => (
                  <ListItem
                    sx={{
                      mt: {
                        xs: 1,
                        md: 3,
                      },
                      lineHeight: 1.5,
                      cursor: "pointer",
                      color: "whiteSlate.main",
                    }}
                    className="font-montserrat text-sm-base footerItemhover"
                    key={link.name}
                    disablePadding
                    component="a"
                    href={link.link}
                  >
                    {link.name}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Stack>
      </Stack>

      <Stack
        sx={(theme) => ({
          justifyContent: "space-between",
          color: "whiteSlate.main",
          mt: {
            xs: 10,
            md: 24,
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          },
        })}
        className="font-montserrat text-sm-base !text-white-400"
      >
        <Stack
          flexGrow={1}
          justifyContent={"start"}
          alignItems={"center"}
          gap={2}
          className="font-montserrat"
        >
          <Image
            src={copyrightSign}
            alt="copyright sign"
            style={{
              height: "auto",
              maxWidth: "100%",
              objectFit: "contain",
            }}
            className="copyRightImage bg-animation"
          />
          <Typography component={"p"}>
            Copyright. All rights reserved.
          </Typography>
        </Stack>
        <Link className="font-montserrat termsLink" href="/">
          Terms & Conditions
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
