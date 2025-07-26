import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { AnimatedBackground } from "./components/AnimatedBackground/AnimatedBackground";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <div className={styles.App}>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default App;