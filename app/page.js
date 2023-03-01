
import Hero from "@/components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/globals.css";

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

      {/* footer section */}
      <footer className=" bottom-0 mt-auto w-full text-center mb-6 ">
        {" "}
        <h3> &#169; 2023 Linh Nguyen - A Project Built with Next.js</h3>
      </footer>
    </>
  );
}
