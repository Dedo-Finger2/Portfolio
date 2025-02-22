import { type ReactNode } from "react";

interface SkillGroupSectionProps {
  children: ReactNode;
}

export default function SkillGroupSection({
  children,
}: SkillGroupSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* <h2 className="text-lg font-semibold">Linguagens de programação</h2> */}
      {children}
    </div>
  );
}
