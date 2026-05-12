export const About = () => {
  return (
    <div className="bg-[#202733] h-[90%] flex text-white justify-center items-center">
      <div className="flex-1 max-w-2xl flex flex-col items-center">
        <p className="font-medium text-2xl">Know Who I'M</p>
        <p className="p-10  font-light text-lg tracking-widest leading-5 ">
          Hi everyone! I’m <b>Jai Kumar Gupta</b> from Kanpur, Uttar-Pradesh, India.
          I'm a passionate Full Stack Developer who enjoys building modern,
          scalable, and user-friendly web applications from frontend to backend.
          I specialize in creating responsive interfaces with React and Tailwind
          CSS while also developing powerful backend systems and APIs. I enjoy
          solving real-world problems, optimizing performance, and building
          seamless digital experiences. Currently, I'm expanding my knowledge in
          full-stack architecture, databases, and cloud technologies to create
          complete production-ready applications. I’m always excited to learn
          new technologies, collaborate on innovative projects, and continuously
          grow as a developer.
        </p>
        <button className="bg-amber-400 py-2 px-5 rounded-xl  text-black font-medium">Download CV</button>
      </div>
      <div className="flex-1 justify-center items-center h-full">
        <img className ="w-full h-full object-cover"src="./home.png" alt="" loading="lazy"/>
      </div>
    </div>
  );
};
