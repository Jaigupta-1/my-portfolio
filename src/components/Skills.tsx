import glory from "../../public/glory.png";
const SkillBar = ({ title, percentage }) => {
  return (
    <div className="w-full sm:w-1/4 mx-12 max-w-sm min-h-20">
      {/* Top Text */}
      <div className="flex justify-between mb-2 text-white">
        <p>{title}</p>
        <p>{percentage}%</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-400 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Techs = ({ icons }) => {
  return (
    <div className="flex justify-between flex-wrap">
      {
        icons.map((icon) => {
          return (
            <div className="flex flex-col w-20 bg-[#0b1220] py-3 px-12 text-white items-center rounded-2xl shadow-xl/20 m-auto my-2">
              <i className={`${icon.icon} colored text-3xl sm:text-6xl`}></i>
              <p>{`${icon.title}`}</p>
            </div>
          )
        })
      }
    </div>

  )
}
export const Skills: any = () => {
  const icons = [{
    title: "ReactJs",
    icon: "devicon-react-original"
  }, {
    title: "NodeJs",
    icon: "devicon-nodejs-plain-wordmark"
  }, {
    title: "TailwindCss",
    icon: "devicon-tailwindcss-plain colored"
  }, {
    title: "TypeScript",
    icon: "devicon-typescript-original"
  }, {
    title: "JavaScript",
    icon: "devicon-javascript-plain colored"
  }, {
    title: "HTML",
    icon: "devicon-html5-plain colored"
  }, {
    title: "CSS",
    icon: "devicon-css3-plain colored"
  }, {
    title: "MongoDB",
    icon: "devicon-mongodb-plain colored"
  }];

  return (
    <div className="text-white px-10 min-h-full pt-[20%] sm:pt-[5%]">
      <p className="text-amber-400">TECH STACK</p>
      <p className="text-2xl font-semibold mb-2">Technolgies I work with</p>
      <Techs icons={icons}></Techs>
      <div className="py-5 flex flex-wrap sm:pl-20 md:pl-0">
        <SkillBar title="Frontend Development" percentage={90} />
        <SkillBar title="Backend Development" percentage={85} />
        <SkillBar title="Database Management" percentage={80} />
        <SkillBar title="UI/UX Design" percentage={75} />
      </div>
      <div className="relative overflow-hidden rounded-3xl w-full mx-auto py-8">
        <div className=" absolute inset-0 bg-cover opacity-80" style={{ backgroundImage: `url(${glory})` }}></div>
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
        <div className="relative flex flex-col sm:flex-row justify-around items-center gap-5 sm:gap-0">
          <div className="font-semibold w-[80%] text-center sm:w-auto text-lg">Let's build something amazing together!</div>
          <button className="bg-amber-400 px-8 py-3 rounded-2xl text-black/80"><div className="flex justify-between gap-2 font-semibold">Let's Talk <img src="./image.png" alt="" className="w-5" /></div></button>
        </div>
      </div>
    </div>
  )
}