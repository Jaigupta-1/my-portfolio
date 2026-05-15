export const About = () => {
  return (
    <div className="h-screen pt-[10vh]">
      <p className="font-medium text-2xl text-center text-white">About</p>
      <div className="bg-[#202733] flex flex-col text-white sm:flex-row   h-[85vh] ">
        <div className="w-1/2 max-w-2xl flex flex-col justify-center px-5 gap-8 h-full">
          <p className="font-medium text-2xl">Know Who I'M</p>
          <p className=" font-light text-lg tracking-wider leading-5 sm:tracking-widest sm:leading-6">
            Hi! I’m <b>Jai Kumar Gupta</b> from Kanpur, India — a passionate
            Full Stack Developer focused on building modern, scalable, and
            user-friendly web applications using React, Tailwind CSS, and
            backend technologies. I enjoy solving real-world problems and
            creating seamless digital experiences.
          </p>
          <button className=" py-2 px-5 rounded-xl text-black w-auto bg-amber-400 font-medium self-center whitespace-nowrap hover:text-lg">
            <a href="" download={"./Resume_Jai_2026.pdf"}>
              Download CV
            </a>
          </button>
        </div>
        <div className="w-1/2  h-full  ">
          <img
            className="h-full w-full object-contain"
            src="./home.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
