import { type ReactNode } from "react";

interface SkillGroupItemsProps {
  children: ReactNode[];
}

export default function SkillGroupItems({ children }: SkillGroupItemsProps) {
  return (
    <div className="grid grid-cols-3 place-items-center gap-4 sm:flex sm:place-items-start lg:flex">
      {children}
    </div>
  );
}
