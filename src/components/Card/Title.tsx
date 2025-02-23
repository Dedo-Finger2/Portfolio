import { type ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  children: ReactNode;
}

export default function CardTitle({ children }: Props) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-lg font-semibold"
    >
      {children}
    </motion.h1>
  );
}
