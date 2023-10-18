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
        // style={{
        //   objectFit: "contain",
        //   width: "40px",
        //   height: "40px",
        //   "@media (max-width: 768px)": {
        //     width: "80px",
        //     height: "80px",
        //   },
        //   "@media (min-width: 768px)": {
        //     maxWidth: "120px",
        //     maxHeight: "100px",
        //   },
        // }}
        className="ImageSlide"
        // className="object-contain max-sm:w-[40px] max-sm:h-[40px] max-md:w-[80px] max-md:h-[80px] md:max-w-[120px] md:max-h-[100px]"
      />
    </Stack>
  );
};

export default ShoeCard;
