import Image from "next/image";
import { shoe8 } from "../assets/images";
import { Button } from "../components";
import { Box, Stack, Typography } from "@mui/material";

const SuperQuality = () => {
  return (
    <Stack
      id="about-us"
      sx={(theme) => ({
        width: "100%",
        gap: 10,
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
        },
      })}
      className="flex_between section_padding"
    >
      <Stack flexDirection={"column"} flexGrow={1}>
        <Typography
          component={"h2"}
          fontWeight={700}
          maxWidth={{
            lg: "32rem",
          }}
          textTransform={"capitalize"}
          className="text-3xl-4xl"
        >
          We Provide You
          <Typography component={"span"} className="text-animation">
            {" "}
            Super{" "}
          </Typography>
          <Typography component={"span"} className="text-animation">
            Quality{" "}
          </Typography>{" "}
          Shoes
        </Typography>
        <Typography
          component={"p"}
          mt={{ xs: 2, md: 4 }}
          maxWidth={{
            lg: "32rem",
          }}
          className="info-text"
        >
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </Typography>
        <Typography
          component={"p"}
          mt={{ xs: 4, md: 6 }}
          maxWidth={{
            lg: "32rem",
          }}
          className="info-text"
        >
          Our dedication to detail and excellence ensures your satisfaction
        </Typography>
        <Box mt={{ xs: 7, md: 11 }}>
          <Button label="View details" href={"/"} />
        </Box>
      </Stack>

      <Stack className="flex_center" flexGrow={1}>
        <Image
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          style={{
            height: "auto",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default SuperQuality;
