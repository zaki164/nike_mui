import { Box, Stack, Typography } from "@mui/material";
import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <Box className="section_padding" component="section">
      <Typography
        component={"h3"}
        fontWeight={700}
        textAlign={"center"}
        className="text-3xl-4xl"
      >
        What Our
        <Typography component={"span"} className="text-animation">
          {" "}
          Customers{" "}
        </Typography>
        Say?
      </Typography>
      <Typography
        component={"p"}
        mx={"auto"}
        mt={4}
        textAlign={"center"}
        maxWidth={"32rem"}
        className="info-text"
      >
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </Typography>

      <Stack
        sx={(theme) => ({
          mt: {
            xs: 12,
            md: 24,
          },
          flexGrow: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 14,
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
          },
        })}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Stack>
    </Box>
  );
};

export default CustomerReviews;
