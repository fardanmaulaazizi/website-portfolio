import HeroSection from "./components/layouts/HeroSection";
import { useEffect, useState } from "react";
import MobileNavigation from "./components/fragments/mobileNavigation/BottomNavigation";
import AboutSection from "./components/layouts/AboutSection";
import ExperienceSection from "./components/layouts/ExperienceSection";
import ProjectSection from "./components/layouts/ProjectSection";
import ContactSection from "./components/layouts/ContactSection";
import NavigationBar from "./components/fragments/navigationBar/NavigationBar";
import { useDarkMode } from "./store/useDarkMode";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log({ isDarkMode });
  }, [isDarkMode]);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex flex-col items-center dark:bg-slate-900`}>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <NavigationBar />
      {isMobile ? <MobileNavigation /> : null}
    </div>
  );
}

export default App;
