const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1c2434] text-white flex flex-col">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5">
        <h1 className="text-2xl font-bold">Portfolio</h1>

        <ul className="flex gap-8 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Skills</li>
          <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="flex-1 flex items-center justify-between px-16">
        
        {/* Left Content */}
        <div className="max-w-lg">
          <p className="text-yellow-400 text-2xl mb-3">
            Oops !!
          </p>

          <h1 className="text-7xl font-bold">
            404
          </h1>

          <h2 className="text-4xl font-semibold mt-3">
            Page Not Found
          </h2>

          <p className="text-gray-300 text-lg mt-5 leading-8">
            The page you are looking for doesn’t exist
            or has been moved.
          </p>

          <div className="flex gap-5 mt-8">
            <button
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition"
              onClick={() => (window.location.href = "/")}
            >
              Go Home
            </button>

            <button
              className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl text-lg hover:bg-yellow-400 hover:text-black transition"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[40%] flex justify-center">
          {/* <img
            src="https://illustrations.popsy.co/gray/web-error.svg"
            alt="404"
            className="w-full max-w-md"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;