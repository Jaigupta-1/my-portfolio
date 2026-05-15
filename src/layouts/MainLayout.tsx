import { Home } from "../components/Home";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const MainLayout = () => {
  return (
    <div className="w-full scroll-smooth  ">
      <section id="home">
        <Home />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};