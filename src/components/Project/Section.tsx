import ProjectCard from "../ProjectCard";
import { RightSection } from "../Section";
import SkillItem from "../SkillItem";

export default function Section() {
  return (
    <RightSection title="Projetos">
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
              <SkillItem bgColor={"bg-red-400/40"} textColor={"text-red-300"}>
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
              <SkillItem bgColor={"bg-red-400/40"} textColor={"text-red-300"}>
                Typescript
              </SkillItem>
            </>
          }
        />
      </div>
    </RightSection>
  );
}
