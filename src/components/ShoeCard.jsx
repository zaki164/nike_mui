const ShoeCard = ({ shoe, bigShoeImg, changeBigShoeImage }) => {
  return (
    <div
      className={`flex-center p-1 md:p-2 bg-card bg-center bg-cover rounded-xl cursor-pointer z-10 border-2 ${
        bigShoeImg === shoe?.bigShoe ? "border-coral-red" : "border-transparent"
      }`}
      onClick={() => changeBigShoeImage(shoe?.bigShoe)}
    >
      <img
        src={shoe?.thumbnail}
        alt="shoe thumbnail"
        className="object-contain max-sm:w-[40px] max-sm:h-[40px] max-md:w-[80px] max-md:h-[80px] md:max-w-[120px] md:max-h-[100px]"
      />
    </div>
  );
};

export default ShoeCard;
