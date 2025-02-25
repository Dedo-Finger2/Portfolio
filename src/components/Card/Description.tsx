import { type ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  children: ReactNode;
}

export default function CardDescription({ children }: Props) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-sm text-zinc-300 font-medium"
    >
      {children}
    </motion.h2>
  );
}
