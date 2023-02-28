"use client";
import Image from "next/image";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function SideBar() {
  return (
    <main className="">
      <div className="">
        <Image
          alt="avatar"
          src="/images/linh-avatar.jpg"
          className=" mx-auto border rounded-full "
          width={150}
          height={150}
          quality="100"
        />
        <h1>Linh Nguyen</h1>
        <div>Junior Web Developer</div>
        <div>Download Resume</div>
        <div>
          <a href="https://github.com/linh-nguyenkhanh">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/linhh-nguyenkhanh/">
            <AiFillLinkedin />
          </a>
        </div>
        <div>
          <p>Helsinki, Finland</p>
          <p>linh.nguyenkhanhib@gmail.com</p>
          <p>+358 41 7043447</p>
        </div>
        <button>
          {" "}
          <a href="mailto:linh.nguyenkhanhib@gmail.com">Email me</a>{" "}
        </button>
      </div>
    </main>
  );
}
