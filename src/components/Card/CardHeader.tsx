import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardHeader({ children }: Props) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
