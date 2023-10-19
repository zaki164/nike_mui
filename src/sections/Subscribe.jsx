import { Input, Stack, Typography } from "@mui/material";
import { Button } from "../components";

const Subscribe = () => {
  return (
    <Stack
      id="contact-us"
      alignItems={"center"}
      flexDirection={"column"}
      gap={10}
      className="section_padding"
    >
      <Typography
        component={"h3"}
        lineHeight={"68px"}
        textAlign={"center"}
        fontWeight={700}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            maxWidth: "24rem",
          },
        })}
        className="text-2xl-3xl"
      >
        Sign Up for
        <Typography component={"span"} className="text-animation">
          {" "}
          Updates{" "}
        </Typography>
        & Newsletter
      </Typography>
      <Stack
        sx={(theme) => ({
          width: "80%",
          gap: 5,
          p: 2.5,
          pl: 6,
          borderRadius: "9999px",
          maxWidth: {
            md: "70%",
            lg: "60%",
            xl: "40%",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
          [theme.breakpoints.up("sm")]: {
            border: "1px solid",
            borderColor: "secondary.main",
          },
        })}
        className="flex_between subscribeSection"
      >
        <Input
          type="email"
          placeholder="subscribe@nike.com"
          sx={(theme) => ({
            flexGrow: 1,
            bgcolor: "transparent",
            "&:focus": {
              outline: "none",
            },
            "&::before": {
              display: "none",
            },
            "&::after": {
              display: "none",
            },
            [theme.breakpoints.down("sm")]: {
              pl: 5,
              p: 2.5,
              border: "1px solid",
              borderColor: "secondary.main",
              borderRadius: "9999px",
            },
          })}
          className="slateColor subscribeInput"
        />
        <Button label="Sign Up" href="/" />
      </Stack>
    </Stack>
  );
};

export default Subscribe;
