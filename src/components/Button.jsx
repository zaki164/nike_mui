import MuiButton from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  fullWidth,
  borderColor,
  semibold,
  href,
  onClick,
}) => {
  const route = useRouter();
  const handleClick = () => {
    onClick ? onClick() : href === "/" ? window.location.reload() : route(href);
  };
  return (
    <MuiButton
      sx={(theme) => ({
        borderRadius: "9999px",
        py: 2,
        px: 4,
        gap: 3,
        fontSize: "100%",
        width: fullWidth ? "100%" : "fit-content",
        bgcolor: backgroundColor && backgroundColor,
        color: !textColor && "white",
        fontWeight: semibold && 600,
        border: borderColor && `2px solid`,
        textTransform: "none",
        fontFamily: "inherit",
        [theme.breakpoints.up("md")]: {
          py: 3,
          px: 6,
          gap: 6,
        },
      })}
      className={`flex_center
      ${backgroundColor ? backgroundColor : "bg-animation"}
      ${textColor && textColor}
      ${borderColor && borderColor}`}
      onClick={handleClick}
    >
      {label}{" "}
      {iconURL && (
        <Image src={iconURL} alt="button" width="1.25rem" height="1.25rem" />
      )}
    </MuiButton>
  );
};

export default Button;
