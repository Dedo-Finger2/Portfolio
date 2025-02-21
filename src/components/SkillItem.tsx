import SkillAlert from "./SkillAlert";

interface SkillItemProps {
  children: string;
  bgColor: string;
  textColor: string;
  alert?: boolean;
}

export default function SkillItem({
  children,
  bgColor,
  textColor,
  alert,
}: SkillItemProps) {
  return (
    <span
      className={`${
        alert ? "relative" : ""
      } ${bgColor} ${textColor} rounded-full px-4 py-0.5 text-xs font-semibold`}
    >
      {alert ? <SkillAlert /> : ""}
      {children}
    </span>
  );
}
