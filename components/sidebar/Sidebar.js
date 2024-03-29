"use client";
import Image from "next/image";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function SideBar() {
  return (
    <main className=" text-center ">
      <div className="h-[600px] ">
        <Image
          alt="avatar"
          src="/images/linh-avatar.jpg"
          className=" mx-auto border rounded-full "
          width={150}
          height={150}
          quality="100"
        />
        <h3 className="text-4xl text-purple font-extrabold antialiased tracking-wider font-kaushan m-3">
          Linh Nguyen
        </h3>

        <div className="text-xl  bg-indigo-200 mb-3 rounded-lg py-2">
          Junior Web Developer
        </div>

        <a
          href="/assets/Linh-Ng-CV.pdf"
          download="Linh-Ng-CV.pdf"
          className="flex justify-center items-center text-xl bg-indigo-200  rounded-lg py-2 cursor-pointer"
        >
          <MdDownload className="ml-2" size="30" />{" "}
          <span className="hover:text-purple cursor-pointer">
            Download Resume
          </span>
        </a>

        <div className="flex justify-evenly text-purple p-4 cursor-pointer hover:text-violet-500">
          <a href="https://github.com/linh-nguyenkhanh">
            <AiFillGithub size="40" />
          </a>
          <a href="https://www.linkedin.com/in/linhh-nguyenkhanh/">
            <AiFillLinkedin size="40" />
          </a>
        </div>
        <div className="text-xl bg-indigo-200  mb-3 py-2">
          <div className="flex justify-center items-center">
            {" "}
            <FaMapMarkerAlt className="mr-2" />
            <span>Helsinki, Finland</span>
          </div>
          <p>linh.nguyenkhanhib@gmail.com</p>
          <p>+358 41 7043447</p>
        </div>
        <div className="mt-10">
          <button className="btn btn-primary btn-wide">
            {" "}
            <a href="mailto:linh.nguyenkhanhib@gmail.com">Email me</a>{" "}
          </button>
        </div>
      </div>
    </main>
  );
}
