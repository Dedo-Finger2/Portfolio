import EducationCard from "../EducationCard";
import Educations from "../Educations";
import Hashtag from "../Hashtag";

export default function Section() {
  return (
    <Educations>
      <EducationCard
        title="Análise e Desenvolvimento de Sistemas"
        imgSrc="https://loremflickr.com/200/200?random=1"
        description="SENAI CIMATEC, Bahia, Camaçari"
        timeFrame="Agosto 2022 - Dezembro 2023"
        hashtag={
          <Hashtag
            bgColor="bg-gray-400/30"
            textColor="text-gray-400"
            text="Técnico"
          />
        }
      />
    </Educations>
  );
}
