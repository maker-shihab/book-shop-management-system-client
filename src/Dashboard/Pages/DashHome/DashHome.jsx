// import { chartBoxUser } from '../../DashComponents/DashChartBox/ChartData';
import DashBarChart from '../../DashComponents/DashBarChart/DashBarChart';
import DashBigChart from '../../DashComponents/DashBigChart/DashBigChart';
import DashChartBox from '../../DashComponents/DashChartBox/DashChartBox';
import DashPicChartBox from '../../DashComponents/DashPicChartBox/DashPicChartBox';
import TopBox from '../../DashComponents/TopBox/TopBox';
import './DashHome.css'

const DashHome = () => {
    return (
        <div className="bg-[#262E3B] w-full min-h-screen   ">
            <div className='px-[1%] grid grid-cols-4 gap-6 auto-rows-minmax'>
                <div className='p-4 border border-[#6a6a6a] bg-white  rounded-md col-span-1 row-span-3 '>
                    <TopBox></TopBox>
                </div>
                <div className='p-4 border border-[#6a6a6a]  bg-white  rounded-md '> <DashChartBox ></DashChartBox></div>
                <div className='p-4 border border-[#6a6a6a]  bg-white  rounded-md'> <DashChartBox></DashChartBox></div>
                <div className='p-4 border border-[#6a6a6a]  bg-white  rounded-md col-span-1 row-span-4'>
                    <DashPicChartBox></DashPicChartBox>
                </div>
                <div className='p-4 border border-[#6a6a6a]  bg-white  rounded-md'> <DashChartBox></DashChartBox></div>
                <div className='p-4 border border-[#6a6a6a] bg-white   rounded-md'> <DashChartBox></DashChartBox></div>
                
                <div className='p-4 border border-[#6a6a6a] bg-white   rounded-md col-span-2 row-span-2'> 
                    <DashBigChart></DashBigChart>
                </div>
                <div className='p-4 border border-[#6a6a6a]  bg-white  rounded-md'> 
                   <DashBarChart></DashBarChart>
                </div>
                {/* <div className='p-4 border border-[#6a6a6a]  bg-white  rounded-md'>
                <DashBarChart></DashBarChart>
                </div> */}
            </div>
        </div>
    );
};

export default DashHome;