import Card from "../Card/Section";
import CardInfo from "../Card/Info";
import CardTitle from "../Card/Title";
import CardDescription from "../Card/Description";
import CardTimeFrame from "../Card/TimeFrame";
import CardActivitiesList from "../Card/ActivitiesList";
import CardSkillsList from "../Card/SkillsList";

import RightSection from "../RightSection/Section";
import RightSectionTitle from "../RightSection/Title";

import SkillItem from "../Skills/Item";
import Hashtag from "../Hashtag";
import Image from "../Image";

export default function Section() {
  return (
    <RightSection>
      <RightSectionTitle>Experiências</RightSectionTitle>
      <Card>
        <Image src="https://picsum.photos/201" />

        <CardInfo>
          <CardTitle>
            Análise e Desenvolvimento de Sistemas{" "}
            <Hashtag
              text={"Técnico"}
              bgColor={"bg-zinc-400/40"}
              textColor={"text-zinc-400"}
            />
          </CardTitle>
          <CardDescription>SENAI CIMATEC, BAHIA, Camaçari</CardDescription>
          <CardTimeFrame>Agosto 2022 - Dezembro 2023</CardTimeFrame>
        </CardInfo>

        <CardActivitiesList>
          <li>Opa</li>
        </CardActivitiesList>

        <CardSkillsList>
          <SkillItem color="red">TypeScript</SkillItem>
        </CardSkillsList>
      </Card>
    </RightSection>
  );
}
