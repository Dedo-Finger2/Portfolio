import ExperienceCard from "../ExperienceCard";
import RightSection from "../RightSection/Section";
import RightSectionTitle from "../RightSection/Title";
import SkillItem from "../SkillItem";

export default function Section() {
  return (
    <RightSection>
      <RightSectionTitle>Experiências</RightSectionTitle>
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
