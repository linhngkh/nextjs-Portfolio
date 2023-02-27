import Link from "next/link";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 h-16">
      <ul className="flex justify-evenly p-5 text-xl capitalize">
        <li>
          <Link href="/">linh nguyen</Link>
        </li>
        <li>
          <Link href="#about">about</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="#technologies">technologies</Link>
        </li>
        <li>
          <Link href="#about">about</Link>
        </li>
        <div className="flex space-x-5">
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
};
