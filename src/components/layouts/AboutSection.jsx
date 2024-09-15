import SkillsSection from "./SkillSection";

const AboutSection = () => {
  return (
    <section
      className="flex min-h-screen flex-col p-8 md:w-[786px] dark:bg-slate-900"
      id="About"
    >
      <h2 className="text mb-5 text-center text-2xl font-bold text-emerald-600 dark:text-emerald-300">
        About
      </h2>
      <p className="mb-5 text-center text-gray-600 dark:text-slate-300">
        I'm a web and mobile programmer passionate about IT and AI developments,
        always eager to innovate and create future-ready solutions.
      </p>
      <SkillsSection />
    </section>
  );
};

export default AboutSection;
