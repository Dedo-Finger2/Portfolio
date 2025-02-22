import RightSection from "../RightSection/Section";
import RightSectionTitle from "../RightSection/Title";

import Card from "../Card/Section";
import CardInfo from "../Card/Info";
import CardTitle from "../Card/Title";
import CardDescription from "../Card/Description";
import CardTimeFrame from "../Card/TimeFrame";

import Image from "../Image";
import Hashtag from "../Hashtag";

export default function Section() {
  return (
    <RightSection>
      <RightSectionTitle>Educação</RightSectionTitle>
      <Card>
        <Image src="https://picsum.photos/200" />
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
      </Card>
    </RightSection>
  );
}
