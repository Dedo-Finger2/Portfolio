import SkillAlert from "./Alert";
import { motion } from "motion/react";

interface SkillItemProps {
  children: string;
  color: string;
  alert?: boolean;
  delay?: number;
}

export default function SkillItem({
  children,
  color,
  alert,
  delay,
}: SkillItemProps) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(10px)", x: -100 }}
      animate={{ opacity: 1, filter: "none", x: 0 }}
      transition={{ delay: delay }}
      className={`${
        alert ? "relative" : ""
      } bg-${color}-400/40 text-${color}-300 rounded-full px-4 py-0.5 text-xs font-semibold`}
    >
      {alert ? <SkillAlert /> : ""}
      {children}
    </motion.span>
  );
}
