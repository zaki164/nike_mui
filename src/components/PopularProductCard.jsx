import Star from "./Star";

const PopularProductCard = ({ imgURL, name, price, rate }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center">
      <img
        src={imgURL}
        alt={name}
        className="w-[230px] h-[230px] md:w-[282px] md:h-[282px]"
      />
      <div className="mt-4 lg:mt-8 flex items-center gap-2.5">
        <Star />
        <p className="font-montserrat text-l-xl leading-normal text-slate-gray dark:text-dark-slate-gray">
          ({rate})
        </p>
      </div>
      <h3 className="mt-2 text-xl-2xl leading-normal font-semibold">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-animation text-xl-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
