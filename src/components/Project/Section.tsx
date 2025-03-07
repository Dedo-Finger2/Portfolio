import Card from "../Card/Section";
import CardInfo from "../Card/Info";
import CardHeader from "../Card/CardHeader";
import CardTitle from "../Card/Title";
import CardDescription from "../Card/Description";
import CardTimeFrame from "../Card/TimeFrame";
import CardActivitiesList from "../Card/ActivitiesList";
import CardSkillsList from "../Card/SkillsList";

import ProjectUrlList from "./UrlList";

import RightSection from "../RightSection/Section";
import RightSectionTitle from "../RightSection/Title";

import SkillItem from "../Skills/Item";
import Image from "../Image";

export default function Section() {
  return (
    <RightSection>
      <RightSectionTitle>Projetos</RightSectionTitle>
      <Card>
        <Image shape="square" src="https://picsum.photos/200" />

        <CardInfo>
          <CardHeader>
            <CardTitle>Análise e Desenvolvimento de Sistemas </CardTitle>
            <CardDescription>SENAI CIMATEC, BAHIA, Camaçari</CardDescription>
            <CardTimeFrame>Agosto 2022 - Dezembro 2023</CardTimeFrame>
          </CardHeader>

          <CardActivitiesList>
            <li>Opa</li>
          </CardActivitiesList>

          <CardSkillsList>
            <SkillItem color="red">TypeScript</SkillItem>
          </CardSkillsList>

          <ProjectUrlList repositoryUrl="" demoUrl="a" />
        </CardInfo>
      </Card>
    </RightSection>
  );
}
