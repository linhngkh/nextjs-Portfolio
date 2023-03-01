import Link from "next/link";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className=" fixed lg:visible sm:invisible md:visible w-full top-0 h-16 bg-green bg-opacity-20">
      <ul className="flex justify-evenly p-5 text-xl capitalize text-shadow-xl hover:drop-shadow-xl  font-bold ">
        <li className="hover:underline hover:decoration-4 hover:decoration-white ">
          <Link
            href="/"
            className="text-purple text-3xl font-black tracking-widest"
          >
            linh{" "}
            <span className="text-white text-3xl tracking-widest"> nguyen</span>{" "}
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
              <BsGithub size="2rem" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/linhh-nguyenkhanh/"
              target="_blank"
            >
              <BsLinkedin size="2rem" />
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}
