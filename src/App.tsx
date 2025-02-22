import { RightSection } from "./components/Section";
import EducationCard from "./components/EducationCard";
import Educations from "./components/Educations";
import ExperienceCard from "./components/ExperienceCard";
import Hashtag from "./components/Hashtag";
import ProjectCard from "./components/ProjectCard";
import QuickAboutMe from "./components/QuickAboutMe";
import SkillItem from "./components/SkillItem";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="flex flex-col px-6 py-6 gap-6 mb-6">
      {/* Left Side (Quick info) */}
      <QuickAboutMe />
      {/* Right Side (Large info) */}
      <div className="flex flex-col gap-12">
        {/* About me */}
        <RightSection title="Sobre Mim">
          <p className="text-zinc-200 text-sm/6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi
            hic impedit inventore soluta saepe modi assumenda alias neque
            molestiae optio qui nostrum eligendi laudantium adipisci
            necessitatibus totam, exercitationem eos autem rerum ipsam.
            Mollitia, modi. Laudantium impedit aliquid molestias illo fuga,
            ratione facere doloribus quis cumque enim repellendus totam quod.
          </p>
        </RightSection>
        {/* Skills */}
        <Skills />
        {/* Education */}
        <Educations>
          <EducationCard
            title="Análise e Desenvolvimento de Sistemas"
            imgSrc="https://loremflickr.com/200/200?random=1"
            description="SENAI CIMATEC, Bahia, Camaçari"
            timeFrame="Agosto 2022 - Dezembro 2023"
            hashtag={
              <Hashtag
                bgColor="bg-gray-400/30"
                textColor="text-gray-400"
                text="Técnico"
              />
            }
          />
        </Educations>
        {/* Experiences */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Experiências</h1>
          <div className="flex flex-col gap-12">
            <ExperienceCard
              title="Análise e Desenvolvimento de Sistemas"
              imgSrc="https://loremflickr.com/200/200?random=1"
              description="SENAI CIMATEC, Bahia, Camaçari"
              timeFrame="Agosto 2022 - Dezembro 2023"
              activities={
                <>
                  <li>Teste</li>
                </>
              }
              skillsUsed={
                <>
                  <SkillItem
                    bgColor={"bg-red-400/40"}
                    textColor={"text-red-300"}
                  >
                    Typescript
                  </SkillItem>
                </>
              }
            />
          </div>
        </div>
        {/* Projects */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Projetos</h1>
          <div className="flex flex-col gap-12">
            <ProjectCard
              title="Análise e Desenvolvimento de Sistemas"
              imgSrc="https://loremflickr.com/200/200?random=1"
              description="SENAI CIMATEC, Bahia, Camaçari"
              timeFrame="Agosto 2022 - Dezembro 2023"
              repoUrl="a"
              demoUrl="b"
              activities={
                <>
                  <li>Teste</li>
                </>
              }
              skillsUsed={
                <>
                  <SkillItem
                    bgColor={"bg-red-400/40"}
                    textColor={"text-red-300"}
                  >
                    Typescript
                  </SkillItem>
                </>
              }
            />
            <ProjectCard
              title="Análise e Desenvolvimento de Sistemas"
              imgSrc="https://loremflickr.com/200/200?random=1"
              description="SENAI CIMATEC, Bahia, Camaçari"
              timeFrame="Agosto 2022 - Dezembro 2023"
              repoUrl="a"
              demoUrl="b"
              activities={
                <>
                  <li>Teste</li>
                </>
              }
              skillsUsed={
                <>
                  <SkillItem
                    bgColor={"bg-red-400/40"}
                    textColor={"text-red-300"}
                  >
                    Typescript
                  </SkillItem>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
