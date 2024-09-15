import { useState } from "react";
import OptionButton from "../fragments/experience/OptionButton";
import WorkSegment from "../fragments/experience/WorkSegment";
import EducationSegment from "../fragments/experience/EducationSegment";
import OrganizationSegment from "../fragments/experience/OrganizationSegment";

const ExperienceSection = () => {
  const Menu = ["Work", "Education", "Organization"];
  const [activeMenu, setActiveMenu] = useState("Work");
  const [pop, setPop] = useState(false);

  const handleChangeMenu = (menu) => {
    setPop(true);
    setTimeout(() => {
      setActiveMenu(menu);
      setPop(false);
    }, 100); // 300ms transition time
  };

  return (
    <section
      id="Experience"
      className="flex flex-col p-8 dark:bg-slate-900 md:w-[786px] "
    >
      <h2 className="text mb-5 text-center text-2xl font-bold text-emerald-600 dark:text-emerald-300">
        Experience
      </h2>
      <div className="mb-5 flex gap-2">
        {Menu.map((item) => (
          <OptionButton
            key={item}
            title={item}
            isActive={activeMenu === item}
            onClick={() => handleChangeMenu(item)}
          />
        ))}
      </div>

      <div
        className={`transition-transform duration-300 ease-in-out ${pop ? "scale-90 opacity-70" : "scale-100 opacity-100"}`}
      >
        {activeMenu === "Work" && <WorkSegment />}
        {activeMenu === "Education" && <EducationSegment />}
        {activeMenu === "Organization" && <OrganizationSegment />}
      </div>
    </section>
  );
};

export default ExperienceSection;
