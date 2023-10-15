import Star from "./Star";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[90px] h-[90px] md:w-[120px] md:h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Star />
        <p className="text-l-xl font-montserrat text-slate-gray dark:text-dark-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 md:mt-2 text-xl-2xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
