import { Navbar } from "./navbar/page";
import About from "./about/page";
import "../styles/globals.css";
import styles from "../styles/page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-screen h-[200vh] flex flex-col justify-center items-center text-center">
        <section className="w-full ">
          <div className="uppercase mb-9">
            <h1 className="text-5xl font-bold tracking-[.5em] uppercase leading-relaxed">
              welcome to <br /> my portfolio space
            </h1>
            <div className="m-8">
              <p className="text-3xl tracking-wider font-medium">
                junior front end web developer
              </p>
            </div>
          </div>
        </section>
        <section className="w-full mt-36">
          <div className={styles.about}>
            <Image
              src="/images/IMG-3852.jpg"
              width="400"
              height="600"
              alt="picture"
              className="m-auto"
            />
            <div className="text-xl text-black text-start ml-5">
              <p>
                Moi! I'm an ex-business student who loves building things with
                code.
              </p>{" "}
              <br />
              <p>
                I first became fascinated with programming last year when I
                spent time studying UI/UX design. As a person who looks for
                using aesthetic and efficient applications, I was hooked into
                coding.
              </p>
              <br />
              <p>
                I research a lot about developer paths and as a marketer before,
                I decided to follow the path of becoming a Front End Developer.
                At my university, I did learn HTML, CSS, so I feel picking up
                Front End stack is pretty cool. Then I spent time learning
                Javascript at home.
              </p>
              <br />
              <p>
                I knew that The Shortcut startup opened their Full Stack
                Academy, so I joined the course and I have gained numerous
                things about both Front End and Back End. By that, I am deeply
                more into learning ReactJS framework to build functional apps
                raise standards for what's expected of any web application.
              </p>
              <br />
              <p>
                I'm now seeking a full-time role where I can contribute my
                skills both in coding and business to help a company achieve
                their goals.
              </p>
            </div>
            <About />
          </div>
        </section>
      </main>

      <footer className=" bottom-0 mt-auto w-full text-center mb-6 ">
        {" "}
        <h3> &#169; 2023 Linh Nguyen - A Project Built with Next.js</h3>
      </footer>
    </>
  );
}
