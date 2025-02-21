import { type ReactNode } from "react";

interface EducationCardProps {
  imgSrc: string;
  title: string;
  description: string;
  timeFrame: string;
  hashtag?: ReactNode;
}

export default function EducationCard({
  title,
  description,
  imgSrc,
  timeFrame,
  hashtag,
}: EducationCardProps) {
  return (
    <div className="flex flex-col border-l-3 border-l-zinc-600 pl-4 gap-4">
      <img
        className="lex h-20 object-cover rounded-md shadow-md"
        src={imgSrc}
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">
          {title} {hashtag}
        </h1>
        <h2 className="text-sm text-zinc-300 font-medium">{description}</h2>
        <span className="text-xs text-zinc-400 font-medium">{timeFrame}</span>
      </div>
    </div>
  );
}
