import { Stack } from "@mui/material";
import Image from "next/image";

const ShoeCard = ({ shoe, bigShoeImg, changeBigShoeImage }) => {
  return (
    <Stack
      sx={{
        p: {
          xs: 1,
          md: 2,
        },
        backgroundPosition: "center",
        backgroundSize: "cover",
        cursor: "pointer",
        zIndex: 10,
        borderRadius: "0.75rem" /* 12px */,
        backgroundImage: "url('/thumbnail-background.svg')",
        border: "2px solid",
        borderColor:
          bigShoeImg === shoe?.bigShoe ? "primary.main" : "transparent",
      }}
      className={`flex-center`}
      onClick={() => changeBigShoeImage(shoe?.bigShoe)}
    >
      <Image
        src={shoe?.thumbnail}
        alt="shoe thumbnail"
        style={{
          // height: "auto",
          maxWidth: "100%",
          objectFit: "contain",
        }}
        className="ImageSlide"
      />
    </Stack>
  );
};

export default ShoeCard;
