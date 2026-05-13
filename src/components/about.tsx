export const About = () => {
  return (
    <div className="bg-[#202733] h-[90%] flex flex-col text-white justify-center items-center min-sm:flex-row">
      <div className="flex-1 max-w-2xl flex flex-col">
        <p className="font-medium text-2xl">Know Who I'M</p>
        <p className=" font-light text-lg tracking-widest leading-5 ">
          Hi! I’m <b>Jai Kumar Gupta</b> from Kanpur, India — a passionate Full
          Stack Developer focused on building modern, scalable, and
          user-friendly web applications using React, Tailwind CSS, and backend
          technologies. I enjoy solving real-world problems and creating
          seamless digital experiences.
        </p>
        <button className="bg-amber-400 py-2 px-5 rounded-xl text-black font-medium">
          Download CV
        </button>
      </div>
      <div className="flex-1 justify-center items-center h-full">
        <img
          className="w-full h-full object-cover"
          src="./home.png"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};
