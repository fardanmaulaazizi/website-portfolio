import Skill from "../fragments/Skill";

const SkillsSection = () => {
  const skills = [
    {
      title: "HTML",
      img: "\\img\\skills\\html.svg",
    },
    {
      title: "CSS",
      img: "\\img\\skills\\css.svg",
    },
    {
      title: "JavaScript",
      img: "\\img\\skills\\javascript.svg",
    },
    {
      title: "PHP",
      img: "\\img\\skills\\php.svg",
    },
    {
      title: "Kotlin",
      img: "\\img\\skills\\kotlin.svg",
    },
    {
      title: "Python",
      img: "\\img\\skills\\python.svg",
    },
    {
      title: "NodeJS",
      img: "\\img\\skills\\nodejs.svg",
    },
    {
      title: "ExpressJS",
      img: "\\img\\skills\\expressjs.svg",
    },
    {
      title: "React",
      img: "\\img\\skills\\react.svg",
    },
    {
      title: "Zustand",
      img: "\\img\\skills\\zustand.svg",
    },
    {
      title: "Laravel",
      img: "\\img\\skills\\laravel.svg",
    },
    {
      title: "Boostrap CSS",
      img: "\\img\\skills\\bootstrap.svg",
    },
    {
      title: "Tailwind CSS",
      img: "\\img\\skills\\tailwind.svg",
    },
    {
      title: "MySql",
      img: "\\img\\skills\\mysql.svg",
    },
    {
      title: "PostgreSQL",
      img: "\\img\\skills\\postgresql.svg",
    },
  ];
  return (
    <div>
      <div className="mb-5 flex items-center">
        <h3 className="me-3 text-left text-xl font-bold text-gray-600 dark:text-emerald-300">
          Skill Set
        </h3>
        <hr className="border-100 flex-grow border-gray-500" />
      </div>
      <div className="mb-5 flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Skill key={index} title={skill.title} img={skill.img} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
