import { Navbar } from "./navbar/page";

import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-screen h-screen flex justify-center items-center text-center">
        <section className="">
          <div className="uppercase ">
            <h1 className="text-6xl tracking-[.5em] uppercase mt-0 mb-2">
              welcome to my space
            </h1>
            <h2 className="text-4xl tracking-widest m-4 ">linh nguyen</h2>
            <p className="text-3xl">junior front end developer</p>
          </div>
        </section>

        <footer className="absolute bottom-0 h-16 w-full ">
          {" "}
          <h3> &#169; 2023 Linh Nguyen - A Project Built with Next.js</h3>
        </footer>
      </main>
    </>
  );
}
