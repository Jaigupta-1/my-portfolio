import { Cards } from "./Project-Cards";

export const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-2 text-white pt-[10vh]">
      
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center ">
        {/* <p className="mb-2 text-sm font-medium uppercase tracking-[4px] text-blue-400">
          Portfolio
        </p> */}

        <h1 className="text-2xl font-bold md:text-3xl text-amber-400">
          Featured Projects
        </h1>

        <p className="mt-2 text-zinc-400 text-sm">
          A collection of my recent work, personal projects, and full-stack
          applications built with modern web technologies.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto mt-5 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </section>
  );
};
