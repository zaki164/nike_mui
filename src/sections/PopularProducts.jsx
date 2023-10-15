import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id="products" className="section_padding !pt-12 md:!pt-32">
      <div className="flex flex-col justify-start gap-4 md:gap-6">
        <h2 className="text-3xl-4xl font-bold">
          Our <span className="text-animation"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg info-text">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-8 md:mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
