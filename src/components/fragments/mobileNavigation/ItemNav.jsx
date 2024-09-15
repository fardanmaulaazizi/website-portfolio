import { useEffect } from "react";
import { useActivedSection } from "../../../store/useActivedSection";

const ItemNav = (props) => {
  const { activedSection, setActivedSection } = useActivedSection();
  const { title, sectionId, children } = props;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.scrollY + window.innerHeight / 2; // Mendapatkan posisi tengah viewport

        // Cek apakah posisi scroll saat ini berada dalam section
        if (
          scrollPos >= sectionTop &&
          scrollPos <= sectionTop + sectionHeight
        ) {
          setActivedSection(title);
        }
      }
    };

    const debounce = (func, wait = 100) => {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll);

    window.addEventListener("scroll", debouncedHandleScroll);

    // Cleanup listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [sectionId, setActivedSection, title]);

  return (
    <>
      <a
        href={`#${sectionId}`}
        className={`flex flex-col items-center ${
          activedSection === title
            ? "text-emerald-500"
            : "text-gray-600 hover:text-emerald-300"
        }`}
      >
        {children}
        <span className="mt-2 text-xs md:mt-0">{title}</span>
      </a>
    </>
  );
};

export default ItemNav;
