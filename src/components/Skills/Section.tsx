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
          <SkillItem color="blue">JavaScript</SkillItem>
          <SkillItem color="blue">TypeScript</SkillItem>
          <SkillItem color="blue">Python</SkillItem>
          <SkillItem color="blue" alert>
            Golang
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Frameworks</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="emerald">NextJs</SkillItem>
          <SkillItem color="emerald">ReactJs</SkillItem>
          <SkillItem color="emerald">ExpressJs</SkillItem>
          <SkillItem color="emerald">HonoJs</SkillItem>
          <SkillItem color="emerald">Fastify</SkillItem>
          <SkillItem color="emerald" alert>
            NestJs
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Backend</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="violet">NodeJs</SkillItem>
          <SkillItem color="violet">Deno</SkillItem>
          <SkillItem color="violet">API Rest</SkillItem>
          <SkillItem color="violet" alert>
            GraphQl
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Frontend</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="pink">HTML</SkillItem>
          <SkillItem color="pink">CSS</SkillItem>
          <SkillItem color="pink">TailwindCSS</SkillItem>
          <SkillItem color="pink">Shadcn/UI</SkillItem>
          <SkillItem color="pink">Figma</SkillItem>
          <SkillItem color="pink" alert>
            Framer Motion
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Bancos de dados</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="orange">PostgresSQL</SkillItem>
          <SkillItem color="orange">SQL</SkillItem>
          <SkillItem color="orange" alert>
            MongoDB
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>
    </RightSection>
  );
}
