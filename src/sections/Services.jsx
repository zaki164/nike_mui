import { services } from "../constants";
import { ServiceCard } from "../components";
import { Stack } from "@mui/material";

const Services = () => {
  return (
    <Stack
      justifyContent={"center"}
      flexWrap={"wrap"}
      gap={9}
      className="section_padding"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </Stack>
  );
};

export default Services;
