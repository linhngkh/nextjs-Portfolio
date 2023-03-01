import Hero from "@/components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/globals.css";
import { AboutMe } from "@/components/about/AboutMe";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export default function Home() {
  return (
    <>
      {/* navbar section */}
      <Navbar />
      {/* main section */}
      <main className={styles.main}>
        {/* hero section */}
        <Hero />
      </main>
      <AboutMe />
      {/* footer section */}

      <footer className="footer footer-center p-10 bg-base-200 text-white rounded ">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Resume</a>
          <a className="link link-hover">Projects</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/linh-nguyenkhanh" target="_blank">
              <BsGithub size="2rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/linhh-nguyenkhanh/"
              target="_blank"
            >
              <BsLinkedin size="2rem" />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 Linh Nguyen - A Project Built with Next.js</p>
        </div>
      </footer>
    </>
  );
}
