import { type ReactNode } from "react";

interface EducationsProps {
  children: ReactNode;
}

export default function Educations({ children }: EducationsProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Educação</h1>
      <div className="flex flex-col gap-12">{children}</div>
    </div>
  );
}
