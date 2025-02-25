import { type ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  children: ReactNode;
}

export default function CardTimeFrame({ children }: Props) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-xs text-zinc-400 font-medium"
    >
      {children}
    </motion.span>
  );
}
