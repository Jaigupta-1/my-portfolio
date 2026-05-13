// import homeImage from "../public/home.png"
export const Home = () => {
  return (
    <div className="bg-[#202733] flex h-[90vh] w-full flex-col md:flex-row">
      <div className="flex-1 text-white flex flex-col justify-center h-full">
        <div className="w-[80%] mx-auto">
          <p className="text-amber-400 text-xl mb-2">Hello, I'm</p>

          <h1 className="text-5xl font-medium mb-4">Jai Gupta</h1>

          <h2 className="text-2xl text-gray-300 ">Web Application Developer</h2>

          <p className="text-gray-400 md:leading-7 max-w-xl mb-8">
            I am a passionate Web Developer focused on creating modern,
            responsive, and user-friendly websites and web applications.
          </p>

          <div className="flex gap-4">
            <button className="bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition">
              Hire Me
            </button>

            <button className="border border-amber-400 text-amber-400 px-6 py-3 rounded-lg hover:bg-amber-400 hover:text-black transition">
              View Projects
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center h-full   ">
        <img className="max-w-full h-auto object-contain" src="./home.png" alt="" />
      </div>
    </div>
  );
};
