import Image from "next/image";
import Star from "./Star";
import { Grid, Stack, Typography } from "@mui/material";

const PopularProductCard = ({ imgURL, name, price, rate }) => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <Image
        src={imgURL}
        alt={name}
        className="imageProduct"
        style={{
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <Stack mt={{ xs: 4, lg: 8 }} alignItems="center" gap={2.5}>
        <Star />
        <Typography
          component={"p"}
          lineHeight={1.5}
          color="secondary.main"
          className="font-montserrat text-l-xl slateColorDark"
        >
          ({rate})
        </Typography>
      </Stack>
      <Typography
        component={"h3"}
        lineHeight={1.5}
        fontWeight={600}
        mt={2}
        className="text-xl-2xl"
      >
        {name}
      </Typography>
      <Typography
        component={"p"}
        lineHeight={1.5}
        fontWeight={600}
        mt={2}
        className="font-montserrat text-animation text-xl-2xl"
      >
        {price}
      </Typography>
    </Grid>
  );
};

export default PopularProductCard;
