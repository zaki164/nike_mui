import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-between min-h-screen gap-10"
    >
      {/* left section */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28">
        <p className="text-base md:text-lg lg:text-xl font-montserrat font-semibold text-animation">
          Our Summer collections
        </p>

        <h1 className="mt-6 md:mt-10 text-6xl xl:text-8xl max-sm:text-[62px] xl:z-10 max-sm:leading-[72px] font-bold">
          <span className="xl:bg-white dark:xl:bg-dark-background xl:whitespace-nowrap relative pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-animation inline-block mt-2 md:mt-6">
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray dark:text-dark-slate-gray  text-base-l leading-8 mt-3 md:mt-6 mb-10 md:mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} href={"/"} />
        <div className="flex justify-start items-start flex-wrap w-full mt-10 md:mt-20 gap-12 md:gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl-4xl font-bold">{stat.value}</p>
              <p className="info-text leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* right section */}
      <div className="relative flex_center flex-1 bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="BigImgShoe" />
        <div className="absolute max-sm:top-2 max-sm:left-2 max-md:top-4 max-md:left-4 max-md:flex-col max-md:items-start md:-bottom-16 w-full flex_center gap-4 md:gap-8">
          {shoes.map((shoe, i) => (
            <ShoeCard
              key={i}
              shoe={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
