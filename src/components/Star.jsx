import Image from "next/image";
import { star } from "../assets/icons";

const Star = () => {
  return (
    <Image src={star} alt="rating icon" className="w-5 h-5 md:w-7 md:h-7" />
  );
};

export default Star;
