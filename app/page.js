import Hero from "@/components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/globals.css";
import { AboutMe } from "@/components/about/AboutMe";
import { Footer } from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
      </main>
      <AboutMe />
      <Footer />
    </>
  );
}
