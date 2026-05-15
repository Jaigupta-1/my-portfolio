export const Skills = () => {
  return (
    <div className="bg-[#202733] min-h-screen text-white w-full pt-[10vh]">
      <h1 className="text-center font-medium text-xl">Skills</h1>
      <p className="my-3 pl-5">Frontend</p>
      <ul className="flex gap-3 py-2 bg-[#4b5463] mx-10 justify-around ">
        <div className="text-center">
        <i className="devicon-html5-plain colored text-6xl"></i>
        <li>Html</li>
        </div>
        <div className="text-center">
        <i className="devicon-css3-plain colored text-6xl"></i>
        <li>Css</li>
        </div>
        <div className="text-center">
        <i className="devicon-javascript-plain colored text-6xl"></i>
        <li>JavaScript</li>
        </div>
        <div className="text-center">
        <i className="devicon-react-original colored text-6xl"></i>
        <li>React</li>
        </div>
      </ul>
      <p className="my-3 pl-5">Backend</p>
      <ul className="flex gap-3 py-2 bg-[#4b5463] mx-10 justify-around ">
        <div className="text-center">
        <i className="devicon-nodejs-plain-wordmark colored text-6xl"></i>
        <li>NodeJS</li>
        </div>
        <div className="text-center">
        <i className="devicon-express-original text-6xl"></i>
        <li>ExpressJS</li>
        </div>
        <div className="text-center">
        <i className="devicon-mongodb-plain colored text-6xl"></i>
        <li>MongoDB</li>
        </div>
        <div className="text-center">
        <i className="devicon-postgresql-plain colored text-6xl"></i>
        <li>PostgresSQL</li>
        </div>
      </ul>
      <p className="my-3 pl-5">Devops</p>
      <ul className="flex gap-3 py-2 bg-[#4b5463] justify-around mx-10">
        <div className="text-center">
        <i className="devicon-git-plain colored text-6xl"></i>
        <li>Git</li>
        </div>
        <div className="text-center">
        <i className="devicon-github-original text-6xl"></i>
        <li>GitHub</li>
        </div>
        <div className="text-center">
        <i className="devicon-docker-plain colored text-6xl"></i>
        <li>Docker</li>
        </div>
        <div className="text-center">
        <i className="devicon-linux-plain colored text-6xl"></i>
        <li>Linux</li>
        </div>
      </ul>
    </div>
  );
};
