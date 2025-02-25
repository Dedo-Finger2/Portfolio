import RightSection from "../RightSection/Section";
import RightSectionTitle from "../RightSection/Title";
import SkillGroupItems from "./GroupItems";
import SkillGroupSection from "./GroupSection";
import SkillGroupTitle from "./GroupTitle";
import SkillItem from "./Item";

import javascriptLogo from "./../../assets/images/tech/javascript-logo.png";
import typescriptLogo from "./../../assets/images/tech/typescript-logo.png";
import pythonLogo from "./../../assets/images/tech/python-logo.png";
import goLogo from "./../../assets/images/tech/golang-logo.png";
import phpLogo from "./../../assets/images/tech/php-logo.png";
import nextjsLogo from "./../../assets/images/tech/nextjs-logo.png";
import reactjsLogo from "./../../assets/images/tech/reactjs-logo.png";
import expressjsLogo from "./../../assets/images/tech/expressjs-logo.png";
import honojsLogo from "./../../assets/images/tech/honojs-logo.png";
import fastifyjsLogo from "./../../assets/images/tech/fastifyjs-logo.png";
import nestjsLogo from "./../../assets/images/tech/nestjs-logo.png";
import laravelLogo from "./../../assets/images/tech/laravel-logo.png";
import nodejsLogo from "./../../assets/images/tech/nodejs-logo.png";
import denoLogo from "./../../assets/images/tech/deno-logo.png";
import apirestLogo from "./../../assets/images/tech/apirest-logo.png";
import graphqlLogo from "./../../assets/images/tech/graphql-logo.png";
import htmlLogo from "./../../assets/images/tech/html-logo.png";
import cssLogo from "./../../assets/images/tech/css-logo.png";
import tailwindLogo from "./../../assets/images/tech/tailwindcss-logo.png";
import figmaLogo from "./../../assets/images/tech/figma-logo.png";
import shadcnLogo from "./../../assets/images/tech/shadcn-logo.png";
import motionLogo from "./../../assets/images/tech/motion-logo.png";
import postgresLogo from "./../../assets/images/tech/postgres-logo.png";
import sqlLogo from "./../../assets/images/tech/sql-logo.png";
import mongoLogo from "./../../assets/images/tech/mongo-logo.png";
import githubLogo from "./../../assets/images/tech/github-logo.png";
import gitLogo from "./../../assets/images/tech/git-logo.png";
import dockerLogo from "./../../assets/images/tech/docker-logo.png";
import linuxLogo from "./../../assets/images/tech/linux-logo.png";
import chatgptLogo from "./../../assets/images/tech/chatgpt-logo.png";

export default function Skills() {
  return (
    <RightSection>
      <RightSectionTitle>Skills</RightSectionTitle>
      <SkillGroupSection>
        <SkillGroupTitle>Linguagens de programação</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="blue" delay={0.2} logo={javascriptLogo}>
            JavaScript
          </SkillItem>
          <SkillItem color="blue" delay={0.4} logo={typescriptLogo}>
            TypeScript
          </SkillItem>
          <SkillItem color="blue" delay={0.6} logo={pythonLogo}>
            Python
          </SkillItem>
          <SkillItem color="blue" delay={0.8} logo={phpLogo} alert>
            PHP
          </SkillItem>
          <SkillItem color="blue" delay={1} logo={goLogo} alert>
            Golang
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Frameworks</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="emerald" delay={0.2} logo={nextjsLogo}>
            NextJs
          </SkillItem>
          <SkillItem color="emerald" delay={0.4} logo={reactjsLogo}>
            ReactJs
          </SkillItem>
          <SkillItem color="emerald" delay={0.6} logo={expressjsLogo}>
            ExpressJs
          </SkillItem>
          <SkillItem color="emerald" delay={0.8} logo={honojsLogo}>
            HonoJs
          </SkillItem>
          <SkillItem color="emerald" delay={1} logo={fastifyjsLogo}>
            Fastify
          </SkillItem>
          <SkillItem color="emerald" delay={1.2} logo={laravelLogo} alert>
            Laravel
          </SkillItem>
          <SkillItem color="emerald" delay={1.4} logo={nestjsLogo} alert>
            NestJs
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Backend</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="violet" delay={0.2} logo={nodejsLogo}>
            NodeJs
          </SkillItem>
          <SkillItem color="violet" delay={0.4} logo={denoLogo}>
            Deno
          </SkillItem>
          <SkillItem color="violet" delay={0.6} logo={apirestLogo}>
            API Rest
          </SkillItem>
          <SkillItem color="violet" delay={0.8} logo={graphqlLogo} alert>
            GraphQl
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Frontend</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="pink" delay={0.2} logo={htmlLogo}>
            HTML
          </SkillItem>
          <SkillItem color="pink" delay={0.4} logo={cssLogo}>
            CSS
          </SkillItem>
          <SkillItem color="pink" delay={0.6} logo={tailwindLogo}>
            TailwindCSS
          </SkillItem>
          <SkillItem color="pink" delay={0.8} logo={shadcnLogo}>
            Shadcn/UI
          </SkillItem>
          <SkillItem color="pink" delay={1} logo={figmaLogo}>
            Figma
          </SkillItem>
          <SkillItem color="pink" delay={1.2} logo={motionLogo} alert>
            Framer Motion
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Bancos de dados</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="orange" delay={0.2} logo={postgresLogo}>
            PostgresSQL
          </SkillItem>
          <SkillItem color="orange" delay={0.4} logo={sqlLogo}>
            SQL
          </SkillItem>
          <SkillItem color="orange" delay={0.6} alert logo={mongoLogo}>
            MongoDB
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>

      <SkillGroupSection>
        <SkillGroupTitle>Outros</SkillGroupTitle>
        <SkillGroupItems>
          <SkillItem color="lime" delay={0.2} logo={githubLogo}>
            Github
          </SkillItem>
          <SkillItem color="lime" delay={0.4} logo={gitLogo}>
            Git
          </SkillItem>
          <SkillItem color="lime" delay={0.6} alert logo={dockerLogo}>
            Docker
          </SkillItem>
          <SkillItem color="lime" delay={0.8} alert logo={linuxLogo}>
            Linux
          </SkillItem>
          <SkillItem color="lime" delay={1} alert logo={chatgptLogo}>
            Engenharia de Prompt
          </SkillItem>
        </SkillGroupItems>
      </SkillGroupSection>
    </RightSection>
  );
}
