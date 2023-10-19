import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "33.333333%",
        },
        borderRadius: "20px",
        bgcolor: "white",
        px: {
          xs: 7,
          md: 10,
        },
        py: {
          xs: 12,
          md: 16,
        },
      }}
      className="serviceCard"
    >
      <Stack
        borderRadius={"9999px"}
        sx={{
          width: {
            width: "2rem" /* 32px */,
            height: "2rem" /* 32px */,
          },
          height: {
            width: "2.5rem" /* 40px */,
            height: "2.5rem" /* 40px */,
          },
        }}
        className="flex_center bg-animation"
      >
        <Image src={imgURL} alt={label} />
      </Stack>
      <Typography
        component={"h3"}
        mt={{ xs: 3, md: 5 }}
        fontWeight={700}
        lineHeight={1.5}
        className="text-2xl-3xl"
      >
        {label}
      </Typography>
      <Typography
        component={"p"}
        mt={{ xs: 1, md: 3 }}
        lineHeight={1.5}
        sx={{
          overflowWrap: "break-word",
        }}
        className="info-text"
      >
        {subtext}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
