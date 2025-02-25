import { FaFileDownload } from "react-icons/fa";
import {
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import mySelfie from "./../assets/minha-foto.jpg";
import { motion } from "motion/react";

export default function QuickAboutMe() {
  return (
    <div className="flex flex-col gap-6 xl:w-300">
      <div className="flex flex-col gap-4">
        {/* Image + Personal info */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          {/* My Image */}
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ bounce: 0 }}
            className="shadow-lg shadow-zinc-600 rounded-full size-32 h-auto"
            src={mySelfie}
            alt="my-selfie"
          />
          {/* My name + What I do */}
          <div className="flex flex-col gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "none" }}
              transition={{ bounce: 0, delay: 0.3 }}
              className="text-2xl font-bold text-center sm:text-left"
            >
              Antonio Mauricio de Almeida Neto
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "none" }}
              transition={{ bounce: 0, delay: 0.5 }}
              className="text-zinc-400 font-semibold text-center sm:text-left"
            >
              Full-Stack Developer
            </motion.h2>
          </div>
        </div>
        {/* Where I live */}
        <div className="flex items-center gap-2 text-zinc-200 font-medium justify-center sm:justify-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <FaLocationDot />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "none" }}
            transition={{ bounce: 0, delay: 0.8 }}
          >
            Camaçari, Bahia - Brasil
          </motion.h3>
        </div>
      </div>
      {/* Quick action sentence */}
      <motion.span
        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "none" }}
        transition={{ bounce: 0, delay: 1.2 }}
        className="text-xs text-center text-zinc-300 sm:text-left"
      >
        Resolvendo problemas únicos com código{" "}
        <span className="font-bold">eficiente</span> e{" "}
        <span className="font-bold">criativo</span>
      </motion.span>
      <div className="flex flex-col justify-center items-center gap-6 sm:items-start">
        {/* Download resume button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ bounce: 0, delay: 1.1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="flex gap-2 items-center px-4 py-1 rounded-md border border-zinc-200 bg-zinc-800 hover:cursor-pointer"
          >
            <FaFileDownload />
            Currículo
          </motion.button>
        </motion.div>
        {/* Social media */}
        <div className="flex gap-4 text-zinc-300">
          <motion.a
            href="https://github.com/Dedo-Finger2"
            target="_blank"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ bounce: 0, delay: 1.2 }}
          >
            <FaGithub
              className="hover:scale-125 transition-transform ease-in-out cursor-pointer"
              size={20}
            />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/antonio-mauricio-4645832b3"
            target="_blank"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ bounce: 0, delay: 1.4 }}
          >
            <FaLinkedin
              className="hover:scale-125 transition-transform ease-in-out cursor-pointer"
              size={20}
            />
          </motion.a>
          <motion.a
            href="https://instagram.com/antonioalmeida2003/"
            target="_blank"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ bounce: 0, delay: 1.6 }}
          >
            <FaInstagram
              className="hover:scale-125 transition-transform ease-in-out cursor-pointer"
              size={20}
            />
          </motion.a>
          <motion.a
            href="mailto:antonioimportant@gmail.com?subject=Visualização do portolio"
            target="_blank"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ bounce: 0, delay: 1.8 }}
          >
            <IoMail
              className="hover:scale-125 transition-transform ease-in-out cursor-pointer"
              size={20}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
