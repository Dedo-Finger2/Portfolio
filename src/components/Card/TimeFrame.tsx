import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardTimeFrame({ children }: Props) {
  return <span className="text-xs text-zinc-400 font-medium">{children}</span>;
}
