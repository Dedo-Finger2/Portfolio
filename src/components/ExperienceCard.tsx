import { ReactNode } from "react";

interface ExperienceCardProps {
  imgSrc: string;
  title: string;
  description: string;
  timeFrame: string;
  activities: ReactNode;
  skillsUsed: ReactNode;
}

export default function ExperienceCard({
  title,
  description,
  imgSrc,
  timeFrame,
  activities,
  skillsUsed,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col border-l-3 border-l-zinc-600 pl-4 gap-4">
      <img
        className="lex h-20 object-cover rounded-md shadow-md"
        src={imgSrc}
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        <h2 className="text-sm text-zinc-300 font-medium">{description}</h2>
        <span className="text-xs text-zinc-400 font-medium">{timeFrame}</span>
      </div>

      <div className="pl-4 text-zinc-200">
        <ul className="flex flex-col gap-2 list-disc">{activities}</ul>
      </div>

      <div className="flex flex-wrap gap-4">{skillsUsed}</div>
    </div>
  );
}
