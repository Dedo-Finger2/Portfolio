import RightSection from "../RightSection/Section";
import RightSectionTitle from "../RightSection/Title";

import { motion } from "motion/react";

export default function Section() {
  return (
    <RightSection>
      <RightSectionTitle>Sobre mim</RightSectionTitle>
      <p className="text-zinc-200 text-sm/6">
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          exit={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          Desenvolvedor web com 2 anos de experiência, especializado em
          JavaScript
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
          transition={{ delay: 0.3 }}
        >
          e tecnologias modernas. Comprometido em criar soluções eficientes,
          criativas
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
          transition={{ delay: 0.4 }}
        >
          e impactantes. Busco uma oportunidade para agregar valor à
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
          transition={{ delay: 0.5 }}
        >
          empresa por meio do código limpo e inovação constante.
        </motion.span>
      </p>
    </RightSection>
  );
}
