export const About = () => {
  return (
    <section className="bg-[#050816] overflow-hidden relative py-20 px-6 sm:px-14 sm:py-16  min-h-[100vh]">

      <div  className="mb-4 font-medium text-2xl text-center text-amber-400"> About </div>
      {/* Glow */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-amber-400/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-500/10 blur-[100px] rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10  max-w-6xl mx-auto md:py-10">

        {/* LEFT */}
        <div className="text-white space-y-5 sm:mb-5">

          <div>
            {/* <p className="uppercase tracking-[3px] text-amber-400 text-xs mb-2">
              About Me
            </p> */}

            <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
              Passionate Developer <br />
              Who Loves to Build
            </h1>
          </div>

          <p className="text-gray-300 leading-7 text-sm sm:text-base max-w-lg">
            I'm a Full Stack Developer from Kanpur, Uttar Pradesh.
            I enjoy building modern and user-friendly web applications
            from frontend to backend.
            <br />
            <br />
            I specialize in React, Node.js, Express, MongoDB and love
            turning ideas into real-world products.
          </p>

          <button className="px-5 py-2.5 rounded-lg bg-amber-400 text-black text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]">
            <a href="./Resume_Jai_2026.pdf" download>
              Download Resume
            </a>
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:pl-20 mt-7 sm:mt-0">

          <div className="relative">

            {/* Glow Border */}
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-amber-400 via-purple-500 to-blue-500 blur opacity-60"></div>

            {/* Image Card */}
            <div className="relative bg-[#0b1220] border border-white/10 rounded-2xl p-1">

              <img
                src="./myimage.png"
                alt="Jai"
                loading="lazy"
                className="w-50 sm:w-75 object-contain rounded-xl"
              />

              {/* Badge */}
              {/* <div className="absolute top-4 -right-5 hidden sm:block bg-[#111827] border border-white/10 px-3 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

                  <p className="text-xs text-white">
                    Available <br /> for freelance
                  </p>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};