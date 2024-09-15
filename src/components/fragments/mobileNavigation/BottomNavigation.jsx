import ItemNav from "./ItemNav";
import { FaHome, FaCode, FaPhone, FaPencilRuler } from "react-icons/fa";

const MobileNavigation = () => {
  return (
    <nav className="fixed bottom-5 left-5 right-5 z-50 flex items-center justify-around rounded-lg bg-white px-5 py-4 shadow-md backdrop-blur-sm dark:bg-slate-950">
      <ItemNav title="About" sectionId="About">
        <FaHome />
      </ItemNav>
      <ItemNav title="Experience" sectionId="Experience">
        <FaPencilRuler />
      </ItemNav>
      <ItemNav title="Project" sectionId="Project">
        <FaCode />
      </ItemNav>
      <ItemNav title="Contact" sectionId="Contact">
        <FaPhone />
      </ItemNav>
    </nav>
  );
};

export default MobileNavigation;
