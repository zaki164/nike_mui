import { useEffect, useRef, useState } from "react";
import { themeOption } from "../constants";
import { BsFillSunFill, BsSun } from "react-icons/bs";
import { WiMoonAltWaxingCrescent4 } from "react-icons/wi";

const ThemeButton = () => {
  const [themeOptionOpen, setThemeOptionOpen] = useState(false);
  const [theme, setTheme] = useState("");
  const themeRef = useRef();

  // start handle show options
  const stopPropa = (e) => {
    e.stopPropagation();
  };
  const handleThemeIconClick = (e) => {
    stopPropa(e);
    setThemeOptionOpen(!themeOptionOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target !== themeRef && themeOptionOpen) {
        setThemeOptionOpen(false);
      }
    });
  }, [themeOptionOpen]);
  // end handle show options

  // start handle change theme
  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (theme === "device") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  useEffect(() => {
    function handleDarkModeChange(e) {
      if (!localStorage.getItem("theme")) {
        setTheme("device");
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        setTheme(localStorage.getItem("theme"));
      }
    }

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    handleDarkModeChange(darkModeMediaQuery);

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);
  // end handle change theme

  return (
    <>
      <span
        className="cursor-pointer text-coral-red mx-6"
        onClick={handleThemeIconClick}
        ref={themeRef}
      >
        <WiMoonAltWaxingCrescent4 className="w-7 h-7" />
      </span>
      <div
        className={`absolute transition duration-300 z-20 ${
          themeOptionOpen ? "top-full opacity-1" : "-top-[300%] opacity-0"
        } right-0 bg-modal-color rounded-xl overflow-hidden w-full md:w-60`}
      >
        <ul className="flex flex-col items-start justify-center">
          {themeOption.map((item, i) => (
            <li
              key={i}
              className={`w-full cursor-pointer p-4 text-white transition-all duration-300 ${
                item.option === theme
                  ? "bg-coral-red"
                  : "hover:bg-slate-gray hover:pl-8"
              }`}
              onClick={() => setTheme(item.option)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ThemeButton;
