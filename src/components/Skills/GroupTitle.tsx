import { motion } from "motion/react";

interface SkillGroupTitleProps {
  children: string;
}

export default function SkillGroupTitle({ children }: SkillGroupTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg font-semibold"
    >
      {children}
    </motion.h2>
  );
}
