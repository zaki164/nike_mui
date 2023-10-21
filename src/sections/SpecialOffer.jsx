import Image from "next/image";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
import { Box, Stack, Typography } from "@mui/material";

const SpecialOffer = () => {
  return (
    <Stack
      data-aos={"flip-right"}
      component="section"
      sx={(theme) => ({
        gap: 10,
        [theme.breakpoints.down("xl")]: {
          flexDirection: "column-reverse",
        },
      })}
      className="flex_between section_padding"
    >
      <Box flexGrow={1}>
        <Image
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Stack flexDirection={"column"} flexGrow={1}>
        <Typography component={"h2"} fontWeight={700} className="text-3xl-4xl">
          <Typography component={"span"} className="text-animation">
            Special{" "}
          </Typography>
          Offer
        </Typography>
        <Typography
          component={"p"}
          mt={{
            xs: 2,
            md: 4,
          }}
          className="info-text"
        >
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </Typography>
        <Typography
          component={"p"}
          mt={{
            xs: 3,
            md: 6,
          }}
          className="info-text"
        >
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </Typography>
        <Stack
          flexWrap={"wrap"}
          mt={{
            xs: 6,
            md: 11,
          }}
          gap={{
            xs: 2,
            md: 4,
          }}
        >
          <Button label="Shop now" iconURL={arrowRight} href={"/"} />
          <Button
            label="Learn more"
            backgroundColor="transparent"
            borderColor="slateBorderColor"
            textColor="slateColor"
            href={"/"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SpecialOffer;
