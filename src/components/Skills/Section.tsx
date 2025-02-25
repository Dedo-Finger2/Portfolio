import RightSection from "../RightSection/Section";
import RightSectionTitle from "../RightSection/Title";
import SkillGroupItems from "./GroupItems";
import SkillGroupSection from "./GroupSection";
import SkillGroupTitle from "./GroupTitle";
import SkillItem from "./Item";

export default function Skills() {
  return (
    <RightSection>
      <RightSectionTitle>Skills</RightSectionTitle>
      <SkillGroupSection>
        <SkillGroupTitle>Linguagens de programação</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="blue" delay={0.2}>
            JavaScript
          </SkillItem>
          <SkillItem color="blue" delay={0.4}>
            TypeScript
          </SkillItem>
          <SkillItem color="blue" delay={0.6}>
            Python
          </SkillItem>
          <SkillItem color="blue" delay={0.8} alert>
            Golang
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Frameworks</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="emerald" delay={0.2}>
            NextJs
          </SkillItem>
          <SkillItem color="emerald" delay={0.4}>
            ReactJs
          </SkillItem>
          <SkillItem color="emerald" delay={0.6}>
            ExpressJs
          </SkillItem>
          <SkillItem color="emerald" delay={0.8}>
            HonoJs
          </SkillItem>
          <SkillItem color="emerald" delay={1}>
            Fastify
          </SkillItem>
          <SkillItem color="emerald" delay={1.2} alert>
            NestJs
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Backend</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="violet" delay={0.2}>
            NodeJs
          </SkillItem>
          <SkillItem color="violet" delay={0.4}>
            Deno
          </SkillItem>
          <SkillItem color="violet" delay={0.6}>
            API Rest
          </SkillItem>
          <SkillItem color="violet" delay={0.8} alert>
            GraphQl
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Frontend</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="pink" delay={0.2}>
            HTML
          </SkillItem>
          <SkillItem color="pink" delay={0.4}>
            CSS
          </SkillItem>
          <SkillItem color="pink" delay={0.6}>
            TailwindCSS
          </SkillItem>
          <SkillItem color="pink" delay={0.8}>
            Shadcn/UI
          </SkillItem>
          <SkillItem color="pink" delay={1}>
            Figma
          </SkillItem>
          <SkillItem color="pink" delay={1.2} alert>
            Framer Motion
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Bancos de dados</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="orange" delay={0.2}>
            PostgresSQL
          </SkillItem>
          <SkillItem color="orange" delay={0.4}>
            SQL
          </SkillItem>
          <SkillItem color="orange" delay={0.6} alert>
            MongoDB
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>
    </RightSection>
  );
}
