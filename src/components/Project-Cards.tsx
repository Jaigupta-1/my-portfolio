// export const Cards = () => {
//   return (
//     <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-zinc-800 border border-zinc-700 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500">

//       {/* Image */}
//       <div className="overflow-hidden">
//         <img
//           className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
//           src="./home.png"
//           alt="E-commerce Project"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex flex-col gap-4 p-5">

//         {/* Title & Description */}
//         <div>
//           <h3 className="text-xl font-bold text-white">
//             E-commerce Project
//           </h3>

//           <p className="mt-2 text-sm leading-6 text-zinc-400">
//             A modern e-commerce platform built with React, Node.js, and Express
//             featuring authentication, cart management, and payment integration.
//           </p>
//         </div>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2">
//           {["React.js", "Node.js", "Express.js"].map((tech) => (
//             <span
//               key={tech}
//               className="rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 transition hover:bg-blue-500 hover:text-white"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="mt-2 flex items-center justify-between">
//           <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
//             View Project
//           </button>

//           <button className="rounded-lg border border-zinc-600 p-2 text-zinc-300 transition hover:border-white hover:text-white">
//             <i className="devicon-github-original text-xl"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
const Techs = ({ techName }) => {
  return (
    <button className="bg-zinc-700 rounded-2xl px-3 text-xs py-1 mr-2 font-semibold">
      {techName}
    </button>
  );
};

export const Cards = () => {
  return (
    <div className="bg-black/40 rounded-2xl w-xs">
      <img className="h-50 w-full object-cover" src="./home.png" alt="" />
      <div className="px-4 py-4 space-y-3">
        <p className="font-semibold text-lg">E-commerce Project</p>
        <p className="text-gray-500 font-semibold text-xs tracking-wide leading-4.5">
          A modern e-commerce platform built with React, Node.js, and Express
          featuring authentication, cart management, and payment integration.
        </p>
        <div className="">
          {["React.js", "Node.js", "Express.js"].map((tech, i) => {
            return <Techs key={i} techName={tech} />;
          })}
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 py-2 text-xs font-semibold px-4 rounded-lg">
            View Project
          </button>
          <i className="ri-github-fill text-3xl"></i>
        </div>
      </div>
    </div>
  );
};
