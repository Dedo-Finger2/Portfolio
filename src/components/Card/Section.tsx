import { type ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      exit={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="flex flex-col border-l-3 border-l-zinc-600 pl-4 gap-4 sm:flex-row sm:items-center"
    >
      {children}
    </motion.div>
  );
}
