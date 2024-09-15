import { useDarkMode } from "../../store/useDarkMode";

const HeroSection = () => {
  const { isDarkMode, setDarkMode } = useDarkMode();
  return (
    <section className="relative h-screen w-full bg-white dark:bg-slate-900">
      <div
        className={`${isDarkMode ? "grid-bg-dark" : "grid-bg"} absolute left-0 top-0 h-1/4 w-full md:h-1/3`}
        id="satu"
      />
      <div className="relative p-10" id="dua">
        <div className="text-center">
          <h3 className="mb-5 text-lg text-gray-600 dark:text-slate-300">
            Hi 👋, my name is
          </h3>
          <h1 className="mb-2 bg-gradient-to-r from-emerald-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-5xl dark:text-emerald-300">
            Fardan Maula Azizi
          </h1>
          <h2 className="mb-6 text-xl font-bold text-gray-600 dark:text-slate-300">
            I'm a Software Developer
          </h2>
          <h3 className="mb-5 text-gray-600 dark:text-slate-300">
            Transforming Your Vision into Innovative{" "}
            <span className="font-bold">Web</span> and{" "}
            <span className="font-bold">Mobile</span> Solutions
          </h3>
          <div className="flex flex-col items-center">
            <a href="/cv/cv-fardan-maula-azizi.pdf">
              <button className="mt-4 flex items-center rounded bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-800">
                Download CV
              </button>
            </a>
            <a href="#Contact">
              <button className="mt-4 flex items-center rounded bg-slate-400 px-3 py-2 text-white hover:bg-slate-600">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
