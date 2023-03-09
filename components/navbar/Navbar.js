import Link from "next/link";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className=" fixed lg:visible  w-full top-0 h-16 bg-green bg-opacity-20">
      <ul className="flex justify-evenly p-5 text-xl capitalize text-shadow-xl hover:drop-shadow-xl font-bold sm:relative sm:inline-block sm:space-y-5 md:relative md:justify-start md:space-x-6 z-99">
        <li className="hover:underline hover:decoration-4 hover:decoration-white ">
          <Link
            href="/"
            className="text-violet-500 text-lg font-black tracking-widest md:text-md sm:text-sm"
          >
            linh{" "}
            <span className="text-white text-lg tracking-widest md:text-md sm:text-sm">
              {" "}
              nguyen
            </span>{" "}
          </Link>
        </li>
        <li className="hover:underline hover:decoration-4 hover:decoration-white">
          <Link href="/resume">Resume</Link>
        </li>
        <li className="hover:underline hover:decoration-4 hover:decoration-white">
          <Link href="#technologies">technologies</Link>
        </li>
        <div className="flex space-x-5 text-shadow-xl hover:drop-shadow-xl cursor-pointer">
          <div>
            <a href="https://github.com/linh-nguyenkhanh" target="_blank">
              <BsGithub size="1.5rem" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/linhh-nguyenkhanh/"
              target="_blank"
            >
              <BsLinkedin size="1.5rem" />
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}
