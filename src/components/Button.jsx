import { useNavigate } from "react-router-dom";

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
  const route = useNavigate();
  const handleClick = () => {
    onClick ? onClick() : href === "/" ? window.location.reload() : route(href);
  };
  return (
    <button
      className={`flex_center rounded-full py-2 md:py-3 px-4 md:px-6 gap-3 md:gap-6 w-fit
      ${backgroundColor ? backgroundColor : "bg-animation"}
      ${textColor ? textColor : "text-white"}
      ${fullWidth && "w-full"}
      ${semibold && "font-semibold"}
      ${borderColor && `border-2 ${borderColor}`}`}
      onClick={handleClick}
    >
      {label}{" "}
      {iconURL && (
        <img
          src={iconURL}
          alt="button"
          className="bg-white rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
