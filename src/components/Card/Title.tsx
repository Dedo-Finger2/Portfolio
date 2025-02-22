import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardTitle({ children }: Props) {
  return <h1 className="text-lg font-semibold">{children}</h1>;
}
