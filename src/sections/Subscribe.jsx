import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="section_padding flex items-center flex-col gap-10"
    >
      <h3 className="text-2xl-3xl leading-[68px] text-center max-md:max-w-sm font-bold">
        Sign Up for
        <span className="text-animation"> Updates </span>& Newsletter
      </h3>
      <div className="w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[40%] flex justify-between items-center max-sm:flex-col gap-5 pl-6 p-2.5 sm:border sm:border-slate-gray dark:sm:border-dark-slate-gray rounded-full">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="flex-1 bg-transparent focus:outline-none text-slate-gray dark:text-dark-slate-gray max-sm:pl-5 max-sm:p-2.5 max-sm:border max-sm:border-slate-gray dark:max-sm:border-dark-slate-gray max-sm:rounded-full"
        />
        <Button label="Sign Up" href="/" />
      </div>
    </section>
  );
};

export default Subscribe;
