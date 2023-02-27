import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 h-16">
      <ul className="flex justify-evenly p-5 text-2xl capitalize">
        <li>
          <Link href="/">linh nguyen</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
