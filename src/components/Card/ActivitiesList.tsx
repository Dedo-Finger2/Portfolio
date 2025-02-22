import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardActivitiesList({ children }: Props) {
  return (
    <div className="pl-4 text-zinc-200">
      <ul className="flex flex-col gap-2 list-disc">{children}</ul>
    </div>
  );
}
