import RightSection from "../RightSection/Section";
import RightSectionTitle from "../RightSection/Title";
import SkillGroupItems from "../SkillGroupItems";
import SkillGroupSection from "../SkillGroupSection";
import SkillGroupTitle from "../SkillGroupTitle";
import SkillItem from "../SkillItem";

export default function Skills() {
  return (
    <RightSection>
      <RightSectionTitle>Skills</RightSectionTitle>
      <SkillGroupSection>
        <SkillGroupTitle>Linguagens de programação</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem bgColor="bg-blue-400/40" textColor="text-blue-300">
            JavaScript
          </SkillItem>
          <SkillItem bgColor="bg-blue-400/40" textColor="text-blue-300">
            TypeScript
          </SkillItem>
          <SkillItem bgColor="bg-blue-400/40" textColor="text-blue-300">
            Python
          </SkillItem>
          <SkillItem bgColor="bg-blue-400/40" textColor="text-blue-300" alert>
            Golang
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Frameworks</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem bgColor="bg-emerald-400/40" textColor="text-emerald-300">
            NextJs
          </SkillItem>
          <SkillItem bgColor="bg-emerald-400/40" textColor="text-emerald-300">
            ReactJs
          </SkillItem>
          <SkillItem bgColor="bg-emerald-400/40" textColor="text-emerald-300">
            ExpressJs
          </SkillItem>
          <SkillItem bgColor="bg-emerald-400/40" textColor="text-emerald-300">
            HonoJs
          </SkillItem>
          <SkillItem bgColor="bg-emerald-400/40" textColor="text-emerald-300">
            Fastify
          </SkillItem>
          <SkillItem
            bgColor="bg-emerald-400/40"
            textColor="text-emerald-300"
            alert
          >
            NestJs
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Backend</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem bgColor="bg-violet-400/40" textColor="text-violet-300">
            NodeJs
          </SkillItem>
          <SkillItem bgColor="bg-violet-400/40" textColor="text-violet-300">
            Deno
          </SkillItem>
          <SkillItem bgColor="bg-violet-400/40" textColor="text-violet-300">
            API Rest
          </SkillItem>
          <SkillItem
            bgColor="bg-violet-400/40"
            textColor="text-violet-300"
            alert
          >
            GraphQl
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Frontend</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem bgColor="bg-pink-400/40" textColor="text-pink-300">
            HTML
          </SkillItem>
          <SkillItem bgColor="bg-pink-400/40" textColor="text-pink-300">
            CSS
          </SkillItem>
          <SkillItem bgColor="bg-pink-400/40" textColor="text-pink-300">
            TailwindCSS
          </SkillItem>
          <SkillItem bgColor="bg-pink-400/40" textColor="text-pink-300">
            Shadcn/UI
          </SkillItem>
          <SkillItem bgColor="bg-pink-400/40" textColor="text-pink-300">
            Figma
          </SkillItem>
          <SkillItem bgColor="bg-pink-400/40" textColor="text-pink-300" alert>
            Framer Motion
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Bancos de dados</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem bgColor="bg-orange-400/40" textColor="text-orange-300">
            PostgresSQL
          </SkillItem>
          <SkillItem bgColor="bg-orange-400/40" textColor="text-orange-300">
            SQL
          </SkillItem>
          <SkillItem
            bgColor="bg-orange-400/40"
            textColor="text-orange-300"
            alert
          >
            MongoDB
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>
    </RightSection>
  );
}
