interface SkillGroupTitleProps {
  children: string;
}

export default function SkillGroupTitle({ children }: SkillGroupTitleProps) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}
