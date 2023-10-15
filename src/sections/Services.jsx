import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="flex justify-center flex-wrap gap-9 section_padding">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
