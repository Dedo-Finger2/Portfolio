import RightSection from "../RightSection/Section";
import RightSectionTitle from "../RightSection/Title";

import Card from "../Card/Section";
import CardInfo from "../Card/Info";
import CardHeader from "../Card/CardHeader";
import CardTitle from "../Card/Title";
import CardDescription from "../Card/Description";
import CardTimeFrame from "../Card/TimeFrame";

import Image from "../Image";
import Hashtag from "../Hashtag";

import CardSkillsList from "../Card/SkillsList";
import SkillItem from "../Skills/Item";

import senaiLogo from "./../../assets/images/senai-logo.png";
import phpLogo from "./../../assets/images/tech/php-logo.png";
import mysqlLogo from "./../../assets/images/tech/mysql-logo.png";
import laravelLogo from "./../../assets/images/tech/laravel-logo.png";
import htmlLogo from "./../../assets/images/tech/html-logo.png";
import cssLogo from "./../../assets/images/tech/css-logo.png";
import mvcLogo from "./../../assets/images/tech/mvc-logo.png";

export default function Section() {
  return (
    <RightSection>
      <RightSectionTitle>Educação</RightSectionTitle>
      <Card>
        <Image src={senaiLogo} />
        <CardInfo>
          <CardHeader>
            <CardTitle>
              Análise e Desenvolvimento de Sistemas{" "}
              <Hashtag
                text={"Técnico"}
                bgColor={"bg-zinc-400/40"}
                textColor={"text-zinc-400"}
              />
            </CardTitle>

            <CardDescription>SENAI CIMATEC, Bahia, Camaçari</CardDescription>

            <CardTimeFrame>Agosto 2022 - Dezembro 2023</CardTimeFrame>

            <CardSkillsList>
              <SkillItem color="neutral" logo={htmlLogo}>
                HTML
              </SkillItem>
              <SkillItem color="neutral" logo={cssLogo}>
                CSS
              </SkillItem>
              <SkillItem color="neutral" logo={phpLogo}>
                PHP
              </SkillItem>
              <SkillItem color="neutral" logo={mysqlLogo}>
                MySQL
              </SkillItem>
              <SkillItem color="neutral" logo={laravelLogo}>
                Laravel
              </SkillItem>
              <SkillItem color="neutral" logo={mvcLogo}>
                MVC
              </SkillItem>
            </CardSkillsList>
          </CardHeader>
        </CardInfo>
      </Card>
    </RightSection>
  );
}
