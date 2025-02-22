import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export function RightSection({ children, title }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </section>
  );
}
