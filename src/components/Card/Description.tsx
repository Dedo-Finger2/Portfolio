import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardDescription({ children }: Props) {
  return <h2 className="text-sm text-zinc-300 font-medium">{children}</h2>;
}
