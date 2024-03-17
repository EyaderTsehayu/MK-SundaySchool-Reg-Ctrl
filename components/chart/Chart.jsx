import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.scss";

const Chart = ({ data }) => {
  const workCount = {};
  data.forEach((obj) => {
    const workCondition = obj.workCondition;
    if (workCount[workCondition]) {
      workCount[workCondition]++;
    } else {
      workCount[workCondition] = 1;
    }
  });
  // console.log("Work count", workCount);

  // alternative way
  // data.forEach((obj) => {
  //   const workCondition = obj.workCondition;
  //   if (workCondition in workCount) {
  //     workCount[workCondition]++;
  //   } else {
  //     workCount[workCondition] = 1;
  //   }
  // });

  // Convert the count to the desired format
  const resultArray = [];
  for (const work in workCount) {
    resultArray.push({ work: work, count: workCount[work] });
  }

  // console.log("result array inside the chart", resultArray);

  return (
    <div className="chart">
      <div className="title"> {"Memeber's work condition"}</div>
      <div className="chart-list">
        <ResponsiveContainer width={"100%"} height={575}>
          <AreaChart
            width={730}
            height={250}
            data={resultArray}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            backgroundColor={"#fff"}
          >
            <defs>
              <linearGradient id="colormale" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1e88e5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1e88e5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorfemale" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5e35b1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#5e35b1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="work" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#1e88e5"
              fillOpacity={1}
              fill="url(#colormale)"
            />
            {/* <Area
              type="monotone"
              dataKey="female"
              stroke="#5e35b1"
              fillOpacity={1}
              fill="url(#colorfemale)"
            /> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
