export const Navbar = () => {
    return (
        <div className=" bg-[#202733] flex justify-between text-white  h-[10%] w-full py-3 px-5">
            <div className="">
                <p>Portfolio</p>
            </div>
            <div className="">
                <ul className="flex ">
                    <li className="px-3">Home</li>
                    <li className="px-3">Skills</li>
                    <li className="px-3">My Projects</li>
                    <li className="px-3">About</li>
                    <li className="px-3">Contact</li>
                </ul>
            </div>
        </div>
    )
}