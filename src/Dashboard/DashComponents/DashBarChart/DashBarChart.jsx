import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const DashBarChart = () => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className=" w-full h-full">
            <h2>Barchart</h2>
            <div className=" h-40  w-[100%]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart background='#fff' width={150} height={40} data={data}>
                        <Tooltip
                        contentStyle={{background: "#2a3447",   borderRadious: "5px"}}
                        labelStyle={{display:"none"}}
                        position={{x: 10, y: 60}}
                        />
                        <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default DashBarChart;







// <div className='chart'>
// <ResponsiveContainer width="100%" height="100%">
//     <LineChart width={300} height={100} data={data}>
    <Tooltip
    contentStyle={{background: "none", border: "none"}}
    labelStyle={{display:"none"}}
    position={{x: 10, y: 60}}
    />
//     <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
//     </LineChart>
// </ResponsiveContainer>
// </div>