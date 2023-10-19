import Image from "next/image";
import Star from "./Star";
import { Stack, Typography } from "@mui/material";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <Stack flexDirection={"column"} className="flex_center">
      <Image src={imgURL} alt="customer" className="reviewCard" />
      <Typography
        component={"p"}
        mt={6}
        textAlign={"center"}
        maxWidth="24rem"
        className="info-text"
      >
        {feedback}
      </Typography>
      <Stack mt={3} gap={2.5}>
        <Star />
        <Typography
          component={"p"}
          className="text-l-xl font-montserrat slateColor"
        >
          ({rating})
        </Typography>
      </Stack>
      <Typography
        component={"h3"}
        mt={{
          xs: 1,
          md: 2,
        }}
        textAlign={"center"}
        fontWeight={700}
        className="text-xl-2xl"
      >
        {customerName}
      </Typography>
    </Stack>
  );
};

export default ReviewCard;
