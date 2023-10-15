const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="w-full sm:w-1/3 rounded-[20px] drop-shadow-2xl  bg-white dark:bg-dark-background dark:drop-shadow-2xl-dark  px-7 py-12 md:px-10 md:py-16">
      <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center bg-animation rounded-full">
        <img src={imgURL} alt={label} />
      </div>
      <h3 className="mt-3 md:mt-5 text-2xl-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-1 md:mt-3 break-words info-text leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
