import SkillAlert from "./Alert";
import { motion } from "motion/react";

const colors = {
  slate: "bg-slate-400/40 text-slate-300",
  gray: "bg-gray-400/40 text-gray-300",
  zinc: "bg-zinc-400/40 text-zinc-300",
  neutral: "bg-neutral-400/40 text-neutral-300",
  stone: "bg-stone-400/40 text-stone-300",
  red: "bg-red-400/40 text-red-300",
  orange: "bg-orange-400/40 text-orange-300",
  amber: "bg-amber-400/40 text-amber-300",
  yellow: "bg-yellow-400/40 text-yellow-300",
  lime: "bg-lime-400/40 text-lime-300",
  green: "bg-green-400/40 text-green-300",
  emerald: "bg-emerald-400/40 text-emerald-300",
  teal: "bg-teal-400/40 text-teal-300",
  cyan: "bg-cyan-400/40 text-cyan-300",
  sky: "bg-sky-400/40 text-sky-300",
  blue: "bg-blue-400/40 text-blue-300",
  indigo: "bg-indigo-400/40 text-indigo-300",
  violet: "bg-violet-400/40 text-violet-300",
  purple: "bg-purple-400/40 text-purple-300",
  fuchsia: "bg-fuchsia-400/40 text-fuchsia-300",
  pink: "bg-pink-400/40 text-pink-300",
  rose: "bg-rose-400/40 text-rose-300",
};

interface SkillItemProps {
  children: string;
  color: keyof typeof colors;
  alert?: boolean;
  delay?: number;
  logo?: string;
}

export default function SkillItem({
  children,
  color,
  alert,
  delay,
  logo,
}: SkillItemProps) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(10px)", x: -100 }}
      animate={{
        opacity: 1,
        filter: "none",
        x: 0,
        transition: { delay: delay },
      }}
      whileHover={{ rotate: 4, scale: 1.2, z: 2, marginLeft: 10 }}
      className={`${alert ? "relative" : ""} ${
        colors[color] || "bg-gray-400/40 text-gray-300"
      } rounded-full px-4 py-0.5 text-xs font-semibold select-none group relative`}
    >
      {alert ? <SkillAlert /> : ""}
      <img
        className="size-10 hidden absolute group-hover:block left-1/2 transform -translate-x-1/2 bottom-6 rounded-lg"
        src={logo || "https://i.redd.it/84dlu7tahkva1.jpg"}
      />
      {children}
    </motion.span>
  );
}
