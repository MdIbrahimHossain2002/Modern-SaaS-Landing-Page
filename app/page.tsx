import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
