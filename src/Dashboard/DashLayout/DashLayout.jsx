import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DashNavber from "../DashComponents/DashNavber/DashNavber";
import DashMenu from './../DashComponents/DashMenu/DashMenu';

const DashLayout = () => {
    const { userInfo } = useAuth();
    if (!userInfo) {
        return null; 
    }
    const { role } = userInfo;
    return (
        <div>
            <DashNavber></DashNavber>
            <div className="flex w-full">
                <div className=" w-2/12  border-r  border-[#485975]   bg-[#262E3B] text-white px-[1%] pt-4">
                    <DashMenu role={role}></DashMenu>
                </div>
                <div className="w-10/12 min-h-screen bg-[#262E3B] p-4">
                    <Outlet></Outlet>
                </div>
            </div>
            {/* <div className="px-[1%] ">
                <DashFooter></DashFooter>
            </div> */}

        </div>
    );
};

export default DashLayout;