import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="flex flex-col text-center sm:flex-row sm:text-left items-center justify-evenly bg-[#141414] text-neutral-100 p-16">
      <span className="font-extrabold tracking-tight text-lg">
        Copyright © 2023. All rights are reserved
      </span>
      <div className="flex items-center gap-2">
        <Link
          href="https://www.linkedin.com/in/leandro-rodrigues-8aaa19221"
          target="_blank"
          className="p-2 rounded-full hover:bg-neutral-800 transition"
        >
          <IoLogoLinkedin size={26} />
        </Link>
        <Link
          href="https://github.com/leandrordg"
          target="_blank"
          className="p-2 rounded-full hover:bg-neutral-800 transition"
        >
          <IoLogoGithub size={26} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
