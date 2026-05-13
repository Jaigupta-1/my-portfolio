import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
export const MainLayout = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        {/* <Navbar1></Navbar1> */}
        <Outlet />
      </div>
    </>
  );
};
