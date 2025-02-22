import { FaFileDownload } from "react-icons/fa";
import {
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import mySelfie from "./../assets/minha-foto.jpg";

export default function QuickAboutMe() {
  return (
    <div className="flex flex-col gap-6 xl:w-300">
      <div className="flex flex-col gap-4">
        {/* Image + Personal info */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          {/* My Image */}
          <img
            className="shadow-lg shadow-zinc-600 rounded-full size-32 h-auto"
            src={mySelfie}
            alt="my-selfie"
          />
          {/* My name + What I do */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center sm:text-left">
              Antonio Mauricio de Almeida Neto
            </h1>
            <h2 className="text-zinc-400 font-semibold text-center sm:text-left">
              Full-Stack Developer
            </h2>
          </div>
        </div>
        {/* Where I live */}
        <div className="flex items-center gap-2 text-zinc-200 font-medium justify-center sm:justify-start">
          <FaLocationDot />
          <h3>Camaçari, BA - Brasil</h3>
        </div>
      </div>
      {/* Quick action sentence */}
      <span className="text-xs text-center text-zinc-300 sm:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea.
      </span>
      <div className="flex flex-col justify-center items-center gap-6 sm:items-start">
        {/* Download resume button */}
        <button className="flex gap-2 items-center px-4 py-1 rounded-md border border-zinc-200 bg-zinc-800">
          <FaFileDownload />
          Currículo
        </button>
        {/* Social media */}
        <div className="flex gap-4 text-zinc-300">
          <FaGithub size={20} />
          <FaLinkedin size={20} />
          <FaInstagram size={20} />
          <IoMail size={20} />
        </div>
      </div>
    </div>
  );
}
