import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RightSection({ children }: Props) {
  return <section className="flex flex-col gap-4">{children}</section>;
}
