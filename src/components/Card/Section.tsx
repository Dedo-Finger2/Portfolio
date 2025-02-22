import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="flex flex-col border-l-3 border-l-zinc-600 pl-4 gap-4">
      {children}
    </div>
  );
}
