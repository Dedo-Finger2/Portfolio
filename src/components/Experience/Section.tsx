import Card from "../Card/Section";
import CardInfo from "../Card/Info";
import CardHeader from "../Card/CardHeader";
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

import phpLogo from "./../../assets/images/tech/php-logo.png";
import mysqlLogo from "./../../assets/images/tech/mysql-logo.png";
import pesquisaDeSatisfacaoLogo from "./../../assets/images/pesquisa-de-satisfacao-logo.png";
import htmlLogo from "./../../assets/images/tech/html-logo.png";
import cssLogo from "./../../assets/images/tech/css-logo.png";
import javascriptLogo from "./../../assets/images/tech/javascript-logo.png";

export default function Section() {
  return (
    <RightSection>
      <RightSectionTitle>Experiências</RightSectionTitle>
      <Card>
        <Image src={pesquisaDeSatisfacaoLogo} />

        <CardInfo>
          <CardHeader>
            <CardTitle>
              Satiscultura - Projeto de Pesquisa de Satisfação{" "}
              <Hashtag
                text={"Acadêmico"}
                bgColor={"bg-blue-400/40"}
                textColor={"text-blue-400"}
              />
            </CardTitle>
            <CardDescription>SENAI CIMATEC, BAHIA, Camaçari</CardDescription>
            <CardTimeFrame>Fevereiro 2023 - Abril 2023</CardTimeFrame>
          </CardHeader>

          <CardActivitiesList>
            <li>Auxiliei na definição dos requisitos e apresentações do planejamento para a turma;</li>
            <li>Ofereci suporte ao time do front-end no processo de responsividade para dispositivos móveis;</li>
            <li>Auxiliei na integração da API VLibras;</li>
            <li>Implementei leitura de textos na tela com a Web Speech API;</li>
            <li>Auxiliei na arquitetura do banco de dados.</li>
          </CardActivitiesList>

          <CardSkillsList>
            <SkillItem color="neutral" logo={phpLogo}>PHP</SkillItem>
            <SkillItem color="neutral" logo={javascriptLogo}>JavaScript</SkillItem>
            <SkillItem color="neutral" logo={htmlLogo}>HTML</SkillItem>
            <SkillItem color="neutral" logo={cssLogo}>CSS</SkillItem>
            <SkillItem color="neutral" logo={mysqlLogo}>MySQL</SkillItem>
          </CardSkillsList>
        </CardInfo>
      </Card>
    </RightSection>
  );
}
