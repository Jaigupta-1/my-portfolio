import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className=" bg-[#202733] text-white text-xl h-[10%] w-full flex justify-between items-center px-10 py-6">
            <div className="tracking-wide text-2xl font-bold">
                <p>Portfolio</p>
            </div>
            <div className="">
                <ul className="flex ">
                    <Link to="/"><li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">Home</li></Link>
                    <Link to="/skills"><li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">Skills</li></Link>
                    <Link to="/projects"><li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">My Projects</li></Link>
                    <Link to="/about"><li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">About</li></Link>
                    <Link to="/contact"><li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}