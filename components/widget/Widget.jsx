import "./widget.scss";
import SchoolIcon from "@mui/icons-material/School";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import ManOutlinedIcon from "@mui/icons-material/ManOutlined";
import Woman2TwoToneIcon from "@mui/icons-material/Woman2TwoTone";
import Groups2Icon from "@mui/icons-material/Groups2";

export const Students = ({ count }) => {
  return (
    <div className="student-card card">
      <div className="left">
        <div className="right">
          <Groups2Icon sx={{ fontSize: "45px" }} className="icon" />
        </div>
        <span className="counter">{count}</span>
        <span className="title">Total members</span>
      </div>

      <div className="backCircle"></div>
      <div className="frontCirle"></div>
    </div>
  );
};

export const Teachers = () => {
  return (
    <div className="teacher-card card">
      <div className="left">
        <div className="right">
          <CastForEducationIcon className="icon" />
        </div>
        <span className="counter">14</span>
        <span className="title">Department</span>
      </div>

      <div className="backCircle"></div>
      <div className="frontCirle"></div>
    </div>
  );
};

export const MaleStudents = ({ count }) => {
  return (
    <div className="male-student-card card">
      <div className="left">
        <ManOutlinedIcon sx={{ fontSize: "50px" }} className="icon" />
      </div>
      <div className="right">
        <span className="counter">{count}</span>
        <span className="title">Male Members</span>
      </div>

      <div className="backCircle"></div>
      <div className="frontCirle"></div>
    </div>
  );
};

export const FemaleStudents = ({ count }) => {
  return (
    <div className="female-student-card card">
      <div className="left">
        <Woman2TwoToneIcon sx={{ fontSize: "50px" }} className="icon" />
      </div>
      <div className="right">
        <span className="counter">{count}</span>
        <span className="title">Female Members</span>
      </div>
      <div className="backCircle"></div>
      <div className="frontCirle"></div>
    </div>
  );
};
