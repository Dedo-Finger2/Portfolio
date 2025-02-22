import SkillAlert from "./SkillAlert";

interface SkillItemProps {
  children: string;
  color: string;
  alert?: boolean;
}

export default function SkillItem({ children, color, alert }: SkillItemProps) {
  return (
    <span
      className={`${
        alert ? "relative" : ""
      } bg-${color}-400/40 text-${color}-300 rounded-full px-4 py-0.5 text-xs font-semibold`}
    >
      {alert ? <SkillAlert /> : ""}
      {children}
    </span>
  );
}
