import Image from "next/image";
import styles from "../../styles/page.module.css";

export const AboutMe = () => {
  return (
    <section className={styles.about}>
      <div className="absolute -z-1 h-3 w-[30%] top-40 left-10 sm:pr-10 sm:top-[200px]">
        <Image
          src="/images/IMG-3852.JPG"
          width="300"
          height="500"
          alt="picture"
          className="m-auto drop-shadow-2xl hover:drop-shadow-xl -z-1 md:max-w-xs  rounded-md -z-1"
        />
      </div>

      <div className="absolute right-[50px] w-[60%] text-white text-start ml-7 md:max-w-xs  overflow-hidden sm:block   sm:text-md md:overflow-hidden">
        <p className="text-2xl md:text-lg sm:text-sm">
          I first became fascinated with programming last year when I spent time
          studying UI/UX design. As a person who looks for using aesthetic and
          efficient applications, I was hooked into coding.
          <br />
          <br />
          I research a lot about developer paths and as a marketer before, I
          decided to follow the path of becoming a Front End Developer. At my
          university, I did learn HTML, CSS, so I feel picking up Front End
          stack is pretty cool. Then I spent time learning Javascript at home.
          <br />
          <br />
          I knew that The Shortcut startup opened their Full Stack Academy, so I
          joined the course and I have gained numerous things about both Front
          End and Back End. By that, I am deeply more into learning ReactJS
          framework to build functional apps raise standards for what&apos;s
          expected of any web application.
          <br />
          <br />
          I&apos;m now seeking a full-time role where I can contribute my skills
          both in coding and business to help a company achieve their goals.
        </p>
      </div>
    </section>
  );
};
