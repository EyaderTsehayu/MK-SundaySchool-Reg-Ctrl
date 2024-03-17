import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Featured = ({ data }) => {
  const departmentCount = {};
  data.forEach((obj) => {
    const department = obj.department;
    if (departmentCount[department]) {
      departmentCount[department]++;
    } else {
      departmentCount[department] = 1;
    }
  });

  // Convert the count to the desired format
  const resultArray = [];
  for (const department in departmentCount) {
    resultArray.push({
      department: department,
      count: departmentCount[department],
    });
  }
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Department's Distribution</h1>
      </div>
      <div className="mt-5">
        <ResponsiveContainer width={"100%"} height={550}>
          <BarChart
            data={resultArray}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            backgroundColor={"#fff"}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" stackId="a" fill="#673ab7" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Featured;
