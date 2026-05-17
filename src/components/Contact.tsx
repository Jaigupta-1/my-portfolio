export const Contact = () => {
  return (
    <div className="h-screen w-full text-white pt-[10vh] bg-[#050816]">
      <p className="mb-4 font-medium text-2xl text-center text-amber-400">Contact</p>
      <div className="flex flex-col sm:flex-row gap-5 ">
        <div className="flex-1 py-3 md:pl-[2vw] space-y-4 flex flex-col gap-5  sm:w-1/2">
          <h2 className="font-medium pl-5 text-lg  flex-1">Let's Work Together.</h2>
          <p className="flex-3 font-light pl-5">
            Have a project in mind or want to discuss an opportunity?
            <br /> Feel free to reach out.
          </p>
          <div className="flex flex-5 flex-col md:flex-row md:gap-2 gap-6 pl-8 md:pl-[0.5vw]" >
            <div className=" space-y-5 md:space-y-10 ">
              <div>
                <div className="flex gap-1 md:gap-2">
                  <i className="ri-phone-line text-3xl md:text-5xl"></i>
                  <div>
                    <p className="font-medium">Phone No</p>
                    <p className="font-light">+91 8604891213</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-1 md:gap-2">
                  <i className="ri-mail-line text-3xl md:text-5xl"></i>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="font-light">gupta002jai@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" space-y-5 md:space-y-10">
              <div>
                <div className="flex gap-1 md:gap-2">
                  <i className="ri-github-fill text-3xl md:text-5xl"></i>
                  <div>
                    <p className="font-medium">Github</p>
                    <p className="font-light">https://github.com/Jaigupta-1</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-2 w-10">
                  <i className="ri-linkedin-fill text-3xl md:text-5xl"></i>
                  <div>
                    <p className="font-medium">Linkedin</p>
                    <p className="font-light">https://www.linkedin.com/jai-kumar-gupta-a2702b327</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* border w-1/3 rounded-md p-1.5 m-auto */}
        <form action="" className="flex-1  space-y-4 py-2   ">
          <div className="flex flex-col space-y-1 w-2/3 mx-auto">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Your Name..."
              name="Name"
              className="rounded-md p-1.5 bg-[#202733]"
            />
          </div>
          <div className="flex flex-col space-y-1 w-2/3 mx-auto">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="Email..."
              name="Email"
              className="bg-[#202733] rounded-md p-1.5"
            />
          </div>
          <div className="flex flex-col space-y-1 w-2/3 mx-auto">
            <label htmlFor="Message">Message</label>
            <textarea
              name="Message"
              id="Message"
              rows={5}
              className="bg-[#202733] rounded-md p-1.5"
              placeholder="Message me..."
            ></textarea>
          </div>
          <div className="w-2/3 mx-auto">
            <button className="bg-amber-400 text-black rounded-md p-1 w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
