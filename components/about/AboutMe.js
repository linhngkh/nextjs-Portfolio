import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="bold hero min-h-screen bg-base-200">
      <div className="bold hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/images/IMG-3852.JPG"
          width="300"
          height="500"
          alt="picture"
          className="m-auto drop-shadow-2xl hover:drop-shadow-xl -z-1 md:max-w-xs  rounded-md -z-1"
        />
        <div>
          <h1 className="text-5xl font-bold">About me</h1>
          <p className="py-6">
            I first became fascinated with programming last year when I spent
            time studying UI/UX design. As a person who looks for using
            aesthetic and efficient applications, I was hooked into coding.
          </p>
          <p className="py-6">
            I research a lot about developer paths and as a marketer before, I
            decided to follow the path of becoming a Front End Developer. At my
            university, I did learn HTML, CSS, so I feel picking up Front End
            stack is pretty cool. Then I spent time learning Javascript at home.
          </p>
          <p className="py-6">
            {" "}
            I knew that The Shortcut startup opened their Full Stack Academy, so
            I joined the course and I have gained numerous things about both
            Front End and Back End. By that, I am deeply more into learning
            ReactJS framework to build functional apps raise standards for
            what&apos;s expected of any web application.
          </p>

          <p className="py-6">
            I&apos;m now seeking a full-time role where I can contribute my
            skills both in coding and business to help a company achieve their
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};
