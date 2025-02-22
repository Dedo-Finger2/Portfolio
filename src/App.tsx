import QuickAboutMe from "./components/QuickAboutMe";
import SkillsSection from "./components/Skills/Section";
import AboutSection from "./components/AboutMe/Section";
import EducationSection from "./components/Education/Section";
import ExperiencesSection from "./components/Experience/Section";
import ProjectsSection from "./components/Project/Section";

export default function App() {
  return (
    <div className="flex flex-col px-6 py-6 gap-24 mb-6 sm:px-12 sm:py-12">
      {/* Left Side (Quick info) */}
      <QuickAboutMe />
      {/* Right Side (Large info) */}
      <div className="flex flex-col gap-12">
        {/* About me */}
        <AboutSection />
        {/* Skills */}
        <SkillsSection />
        {/* Education */}
        <EducationSection />
        {/* Experiences */}
        <ExperiencesSection />
        {/* Projects */}
        <ProjectsSection />
      </div>
    </div>
  );
}
