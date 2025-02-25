import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";

interface Props {
  repositoryUrl: string;
  demoUrl?: string;
}

export default function ProjectUrlList({ repositoryUrl, demoUrl }: Props) {
  return (
    <div className="flex justify-between gap-4 xl:justify-start">
      <motion.a
        whileHover={{ rotate: -5, scale: 1.05 }}
        href={repositoryUrl}
        target="_blank"
        className="flex gap-2 items-center text-sm p-2"
      >
        <FaGithub />
        Código Fonte
      </motion.a>
      {demoUrl ? (
        <motion.a
          whileHover={{ rotate: -5, scale: 1.05 }}
          href={demoUrl}
          target="_blank"
          className="flex gap-2 items-center text-sm p-2"
        >
          <FaExternalLinkAlt />
          Demonstração
        </motion.a>
      ) : (
        ""
      )}
    </div>
  );
}
