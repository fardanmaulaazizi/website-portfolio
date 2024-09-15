import Skill from "../fragments/Skill";

const SkillsSection = () => {
  return (
    <div>
      <div className="mb-5 flex items-center">
        <h3 className="me-3 text-left text-xl font-bold text-gray-600 dark:text-emerald-300">
          Skill Set
        </h3>
        <hr className="border-100 flex-grow border-gray-500" />
      </div>
      <div className="mb-5 flex flex-wrap gap-4">
        <Skill title="HTML" img="\img\skills\html.svg" />
        <Skill title="CSS" img="\img\skills\css.svg" />
        <Skill title="JavaScript" img="\img\skills\javascript.svg" />
        <Skill title="PHP" img="\img\skills\php.svg" />
        <Skill title="Kotlin" img="\img\skills\kotlin.svg" />
        <Skill title="NodeJS" img="\img\skills\nodejs.svg" />
        <Skill title="ExpressJS" img="\img\skills\expressjs.svg" />
        <Skill title="React" img="\img\skills\react.svg" />
        <Skill title="MySql" img="\img\skills\mysql.svg" />
      </div>
    </div>
  );
};

export default SkillsSection;
