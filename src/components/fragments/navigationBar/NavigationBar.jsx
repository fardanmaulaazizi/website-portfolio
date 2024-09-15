import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useDarkMode } from "../../../store/useDarkMode";
import { FaHome, FaCode, FaPhone, FaPencilRuler } from "react-icons/fa";
import ItemNav from "../mobileNavigation/ItemNav";

const NavigationBar = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const navDesktopRef = useRef();

  useEffect(() => {
    if (window.innerWidth <= 768) {
      navDesktopRef.current.classList.add("hidden");
    }
  }, []);

  return (
    <>
      <div className="fixed left-5 right-5 top-5 z-50 flex h-10 items-center justify-between">
        <div>
          <img
            src={
              isDarkMode ? "img/logo/logo-dark.png" : "img/logo/logo-light.png"
            }
            alt="Fardan"
            className="h-8"
          />
        </div>
        <button className="" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <FaSun className="h-8 w-8 text-emerald-600 dark:hover:text-slate-300" />
          ) : (
            <FaMoon className="h-8 w-8 hover:text-emerald-300" />
          )}
        </button>
      </div>
      <div ref={navDesktopRef}>
        <div className="z-50z-50 fixed bottom-10 right-10 flex flex-col items-center justify-around gap-20">
          <div className="flex flex-col items-end gap-8 rounded-lg p-5">
            <ItemNav
              title="About"
              sectionId="About"
              className="text-5xl"
            ></ItemNav>
            <ItemNav title="Experience" sectionId="Experience"></ItemNav>
            <ItemNav title="Project" sectionId="Project"></ItemNav>
            <ItemNav title="Contact" sectionId="Contact"></ItemNav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
