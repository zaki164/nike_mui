import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="section_padding bg-black px-9 md:px-12">
      <div className="flex justify-between items-start gap-16 lg:gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col lg:items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 leading-7 info-text !text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-6 md:mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-16 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-xl-2xl leading-normal font-medium mb-4 md:mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-1 md:mt-3 font-montserrat text-sm-base leading-normal text-white-400 hover:text-slate-gray dark:hover:text-dark-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between info-text !text-white-400 mt-10 md:mt-24 max-sm:flex-col max-sm:items-center max-sm:gap-6">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright sign"
            className="rounded-full w-3 h-3 md:w-5 md:h-5 bg-animation"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <a
          className="font-montserrat transition duration-300 hover:text-coral-red dark:hover:text-coral-red"
          href="/"
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
