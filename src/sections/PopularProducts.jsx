import { products } from "../constants";
import { PopularProductCard } from "../components";
import { Box, Grid, Stack, Typography } from "@mui/material";

const PopularProducts = () => {
  return (
    <Box
      component="section"
      id="products"
      sx={{
        pt: {
          xs: "3rem !important",
          md: "8rem !important",
        },
      }}
      className="section_padding"
    >
      <Stack
        sx={{
          flexDirection: "column",
          justifyContent: "start",
          gap: {
            xs: 4,
            md: 6,
          },
        }}
      >
        <Typography component="h2" className="text-3xl-4xl" fontWeight={700}>
          Our{" "}
          <Typography component={"span"} className="text-animation">
            {" "}
            Popular{" "}
          </Typography>{" "}
          Products
        </Typography>
        <Typography
          component={"p"}
          sx={{
            maxWidth: {
              lg: "32rem" /* 512px */,
            },
          }}
          className="info-text"
        >
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </Typography>
      </Stack>

      <Grid
        container
        mt={{
          xs: 8,
          md: 12,
        }}
        gap={{
          xs: 14,
          sm: 6,
        }}
        columns={{ xs: 1, sm: 2, md: 13, lg: 4 }}
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </Grid>
    </Box>
  );
};

export default PopularProducts;
