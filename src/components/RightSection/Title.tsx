import { type ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  children: ReactNode;
}

export default function Title({ children }: Props) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -400 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-2xl font-bold"
    >
      {children}
    </motion.h1>
  );
}
