import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  repositoryUrl: string;
  demoUrl?: string;
}

export default function ProjectUrlList({ repositoryUrl, demoUrl }: Props) {
  return (
    <div className="flex justify-between gap-4 xl:justify-start">
      <a
        href={repositoryUrl}
        target="_blank"
        className="flex gap-2 items-center text-sm"
      >
        <FaGithub />
        Código Fonte
      </a>
      {demoUrl ? (
        <a
          href={demoUrl}
          target="_blank"
          className="flex gap-2 items-center text-sm"
        >
          <FaExternalLinkAlt />
          Demonstração
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
