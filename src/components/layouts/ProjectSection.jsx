import { useEffect, useState } from "react";
import ProjectItem from "../fragments/project/ProjectItem";
import OptionButton from "../fragments/experience/OptionButton";

const ProjectSection = () => {
  const [activeMenu, setActiveMenu] = useState("All");
  const [projectsFilter, setProjectsFilter] = useState([]);
  const [pop, setPop] = useState(false);

  const menu = ["All", "Website", "Mobile", "AI"];

  const projects = [
    {
      title: "Cariescan",
      stack: ["kotlin", "tensorflow"],
      img: [
        "/img/project/cariescan/cariescan-1.jpg",
        "/img/project/cariescan/cariescan-2.jpg",
        "/img/project/cariescan/cariescan-3.jpg",
      ],
      type: ["Mobile", "AI"],
      description:
        "Caries Scan is a dental caries detection app using the Single Shot MobileNetV2 algorithm, allowing users to identify caries in both photos and real-time video.",
    },
    {
      title: "Petme",
      stack: ["kotlin", "tensorflow"],

      img: [
        "/img/project/petme/petme-1.jpg",
        "/img/project/petme/petme-2.jpg",
        "/img/project/petme/petme-3.jpg",
      ],
      type: ["Mobile", "AI"],
      description:
        "Petme is a pet adoption app with automatic classification features using CNN. Users can upload photos of animals, and the system will identify the type of animal.",
      githubLink: "https://github.com/XnoahR/PetMe",
    },
    {
      title: "AlzAware",
      stack: ["flask", "tensorflow"],
      img: [
        "/img/project/alzaware/alzaware-1.png",
        "/img/project/alzaware/alzaware-2.png",
        "/img/project/alzaware/alzaware-3.png",
      ],
      type: ["Website", "AI"],
      description:
        "AlzAware is a website designed for the classification of Alzheimer's disease based on brain MRI results with CNN.",
      githubLink: "https://github.com/fardanmaulaazizi/AlzAware/",
    },
  ];

  useEffect(() => {
    // Filter projects based on the active menu with pop effect
    setPop(true);
    setTimeout(() => {
      const filteredProjects = projects.filter((project) => {
        if (activeMenu === "All") return true;
        return project.type.includes(activeMenu);
      });
      setProjectsFilter(filteredProjects);
      setPop(false);
    }, 100); // 300ms transition time
  }, [activeMenu]);

  const handleChangeMenu = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <section
      className="flex flex-col p-8 md:w-[786px] dark:bg-slate-900"
      id="Project"
    >
      <h2 className="text mb-5 text-center text-2xl font-bold text-emerald-600">
        Project
      </h2>
      <div className="mb-5 flex flex-wrap gap-2">
        {menu.map((item) => (
          <OptionButton
            key={item}
            title={item}
            isActive={activeMenu === item}
            onClick={() => handleChangeMenu(item)}
          />
        ))}
      </div>

      {/* Projects list with transition */}
      <div
        className={`flex flex-wrap transition-transform duration-300 ease-in-out ${pop ? "scale-90 opacity-70" : "scale-100 opacity-100"} md:flex md:gap-4`}
      >
        {projectsFilter.map(
          ({
            title,
            img,
            description,
            stack,
            githubLink = null,
            previewLink = null,
            downloadLink = null,
          }) => (
            <ProjectItem
              key={title}
              title={title}
              img={img}
              githubLink={githubLink}
              stack={stack}
              previewLink={previewLink}
              downloadLink={downloadLink}
            >
              {description}
            </ProjectItem>
          ),
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
