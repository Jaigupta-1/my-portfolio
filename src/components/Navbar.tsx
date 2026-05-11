import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className=" bg-[#202733] flex justify-between text-white  h-[10%] w-full py-3 px-5">
            <div className="">
                <p>Portfolio</p>
            </div>
            <div className="">
                <ul className="flex ">
                    <Link to="/"><li className="px-3">Home</li></Link>
                    <Link to="/skills"><li className="px-3">Skills</li></Link>
                    <Link to="/projects"><li className="px-3">My Projects</li></Link>
                    <Link to="/about"><li className="px-3">About</li></Link>
                    <Link to="/contact"><li className="px-3">Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}