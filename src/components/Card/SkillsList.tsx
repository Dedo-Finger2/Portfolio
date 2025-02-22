import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardSkillsList({ children }: Props) {
  return <div className="flex flex-wrap gap-4">{children}</div>;
}
