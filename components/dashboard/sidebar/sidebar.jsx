import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { createTheme } from "@mui/material/styles";
import { Divider, useMediaQuery } from "@mui/material";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import StyleIcon from "@mui/icons-material/Style";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import SchoolIcon from "@mui/icons-material/School";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import SafetyDividerIcon from "@mui/icons-material/SafetyDivider";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GradingIcon from "@mui/icons-material/Grading";
import FeedbackIcon from "@mui/icons-material/Feedback";
import Groups2Icon from "@mui/icons-material/Groups2";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import Person4Icon from "@mui/icons-material/Person4";
import Person3Icon from "@mui/icons-material/Person3";
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  // staff approval dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null); // Create a ref for the dropdown element

  const handleDropdownItemClick = (page) => {
    // Navigate to the selected page here
    // You can use React Router, window.location.href, or any other navigation method
    // For example, if you are using React Router, you can use history.push('/your-page')
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Close the dropdown if the click is outside the dropdown
      setShowDropdown(false);
    } else if (!dropdownRef.current.contains(event.relatedTarget)) {
      // Close the dropdown if the mouse leaves the dropdown and doesn't hover over the dropdown button
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Close the dropdown if the click is outside the dropdown
        setShowDropdown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //  staff aproval end
  const [menuItems, setMenuItems] = useState(() => getMenuItems());
  function getMenuItems() {
    // const user = JSON.parse(localStorage.getItem("user"));

    return {
      dashboard: [
        {
          text: <Typography sx={itemTextStyle}>Dashboard</Typography>,
          icon: <Dashboard sx={{ fontSize: "18px", color: "#351478" }} />,
          path: "/dashboard",
        },
      ],
      basics: [
        {
          text: <Typography sx={itemTextStyle}>Memebers</Typography>,
          icon: <Groups2Icon sx={{ fontSize: "20px", color: "#351478" }} />,
          path: "/dashboard/members",
        },
        {
          text: <Typography sx={itemTextStyle}>Departments</Typography>,
          icon: (
            <SafetyDividerIcon sx={{ fontSize: "20px", color: "#351478" }} />
          ),
          path: "/dashboard/departments",
        },
        {
          text: <Typography sx={itemTextStyle}>Registration</Typography>,
          icon: (
            <AppRegistrationIcon sx={{ fontSize: "20px", color: "#351478" }} />
          ),
          path: "/dashboard/members/add",
        },
      ],
      divisions: [
        {
          text: <Typography sx={itemTextStyle}>Youth</Typography>,
          icon: <Person3Icon sx={{ fontSize: "20px", color: "#351478" }} />,
          path: "teachers",
        },
        {
          text: <Typography sx={itemTextStyle}>Jhon The Baptist</Typography>,
          icon: <Person4Icon sx={{ fontSize: "18px", color: "#351478" }} />,
          path: "clubs",
        },
        {
          text: <Typography sx={itemTextStyle}>Kid Samuel</Typography>,
          icon: <ChildCareIcon sx={{ fontSize: "20px", color: "#351478" }} />,
          path: "students",
        },
      ],

      academics: [
        {
          text: <Typography sx={itemTextStyle}>Curriculum</Typography>,
          icon: <StyleIcon sx={{ fontSize: "18px", color: "#351478" }} />,
          path: "curriculum",
        },
        {
          text: <Typography sx={itemTextStyle}>Ac. Curriculum</Typography>,
          icon: (
            <SourceOutlinedIcon sx={{ fontSize: "18px", color: "#351478" }} />
          ),
          path: "academicCurriculum",
        },
        {
          text: <Typography sx={itemTextStyle}>Registration</Typography>,
          icon: (
            <AppRegistrationIcon sx={{ fontSize: "18px", color: "#351478" }} />
          ),
          path: "registration",
        },
      ],
      operations: [
        {
          text: <Typography sx={itemTextStyle}>Ass. Teachers</Typography>,
          icon: (
            <AssignmentReturnIcon sx={{ fontSize: "18px", color: "#351478" }} />
          ),
          path: "assignTeacher",
        },
        {
          text: <Typography sx={itemTextStyle}>Student Result</Typography>,

          icon: <GradingIcon sx={{ fontSize: "18px", color: "#351478" }} />,
          path: "result",
        },

        {
          text: <Typography sx={itemTextStyle}>Requests</Typography>,
          icon: <FeedbackIcon sx={{ fontSize: "18px", color: "#351478" }} />,
          path: "requests",
        },
      ],
    };
  }
  return (
    <aside
      ref={sidebar}
      className={`fixed top-0 left-0 z-10 h-full  xl:w-2/12  w-64 overflow-y-auto bg-white drop-shadow-2 duration-300 ease-linear dark:bg-boxdark dark:drop-shadow-none lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } ${
        pathname == "/user" || pathname.includes("/user") ? "lg:hidden " : ""
      }`}
    >
      <SideBarTitle sx={styledSidebarTitle}>
        {/* <img
          src={require("../assets/unnamed.png")}
          alt={"W"}
          loading="W"
          style={styledImage}
        /> */}
        <Typography
          variant="p"
          sx={{
            // isSidebarOpen ?
            fontFamily: "Poppins",
            display: "block", //: "none",
            textAlign: "center",
            marginLeft: "10px",
            fontWeight: 600,
            fontSize: "20px",
            color: "#000",
          }}
        >
          MKSS-RCS
        </Typography>
      </SideBarTitle>

      <button
        ref={trigger}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        className="block lg:hidden"
      >
        <AppRegistrationIcon sx={{ fontSize: "20px" }} />,
      </button>

      {/* list of admin page */}
      <Box
        sx={{ marginTop: "83px", paddingLeft: "14px", paddingRight: "14px" }}
      >
        {menuItems.dashboard && (
          <List sx={styledList}>
            <Typography sx={itemTitleStyle}>Dashboard</Typography>
            {menuItems.dashboard.map((item) => (
              <Link href={item.path} key={item.path} style={styledLink}>
                <ListItemButton
                  //onClick={() => handleClick(item.path)}
                  sx={
                    pathname === item.path ? styledActiveButton : styledButton
                  }
                >
                  <StyledIconWrapper>{item.icon}</StyledIconWrapper>

                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        )}
        <Divider />
        {menuItems.basics && (
          <List sx={styledList}>
            <Typography sx={itemTitleStyle}>Basics</Typography>
            {menuItems.basics.map((item) => (
              <Link href={item.path} key={item.path} style={styledLink}>
                <ListItemButton
                  //onClick={() => handleClick(item.path)}
                  sx={
                    pathname === item.path ? styledActiveButton : styledButton
                  }
                >
                  <StyledIconWrapper>{item.icon}</StyledIconWrapper>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        )}
        <Divider />
        {menuItems.divisions && (
          <List sx={styledList}>
            <Typography sx={itemTitleStyle}>Divisions</Typography>
            {menuItems.divisions.map((item) => (
              <Link href={item.path} key={item.path} style={styledLink}>
                <ListItemButton
                  //onClick={() => handleClick(item.path)}
                  sx={
                    pathname === item.path ? styledActiveButton : styledButton
                  }
                >
                  <StyledIconWrapper>{item.icon}</StyledIconWrapper>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        )}
        <Divider />
        {menuItems.academics && (
          <List sx={styledList}>
            <Typography sx={itemTitleStyle}>Academics</Typography>
            {menuItems.academics.map((item) => (
              <Link href={item.path} key={item.path} style={styledLink}>
                <ListItemButton
                  //onClick={() => handleClick(item.path)}
                  sx={
                    pathname === item.path ? styledActiveButton : styledButton
                  }
                >
                  <StyledIconWrapper>{item.icon}</StyledIconWrapper>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        )}
        <Divider />

        {menuItems.operations && (
          <List sx={styledList}>
            <Typography sx={itemTitleStyle}>Operations</Typography>
            {menuItems.operations.map((item) => (
              <Link href={item.path} key={item.path} style={styledLink}>
                <ListItemButton
                  //onClick={() => handleClick(item.path)}
                  sx={
                    //isActivePage === item.path
                    //?
                    // styledActiveButton
                    styledButton
                  }
                >
                  <StyledIconWrapper>{item.icon}</StyledIconWrapper>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        )}
      </Box>
    </aside>
  );
};

export default Sidebar;

const SideBarTitle = styled("div")({
  //isSidebarOpen ?
  display: "flex", //: isSmallScreen ? "none" : "flex",
  position: "fixed",
  alignItems: "center",
  marginTop: "16px",
});

// list item style
const listStyle = {};

// link
const styledLink = {
  textDecoration: "none",
  margin: "0px 0px 4px",
  padding: 0,
};

// button in Link
const styledButton = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "left",
  color: "#000",
  background: "#fff",
  borderRadius: 2,
  height: "46px",
  marginBottom: "3px",

  //isSidebarOpen ?
  padding: "10px 16px 10px 24px", // : "15px",
  "&:hover": {
    background: "#EDE7F6",
    borderRadius: 2,
    color: "#774FBF",
  },
};

const styledActiveButton = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "left",
  height: "46px",
  //isSidebarOpen ?
  padding: "10px 16px 10px 24px", // : "15px",
  background: "#EDE7F6",
  borderRadius: 2,
  marginBottom: "3px",
  color: "#5e35b1",
  "&:hover": {
    background: "#EDE7F6",
    borderRadius: 2,
    color: "#5e35b1",
  },
};

// icon wrapper

const StyledIconWrapper = styled(ListItemIcon)({
  minWidth: "36px",
  height: "10px",
  color: "#000",
  marginBottom: "8px",
});

// image style
const styledImage = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  objectFit: "cover",
};
// sidebar title
const styledSidebarTitle = {
  // zIndex: isSidebarOpen ? (isSmallScreen ? "0" : "9999") : "9999",
  background: "white",
  height: "83px",
  //isSidebarOpen ? isSmallScreen ?
  width: "228px",
  //: "228px"
  //: isSmallScreen
  //? "0"
  //: "50px",
  margin: "0",
};

// item title
const itemTitleStyle = {
  color: "#4c2894",
  padding: "6px",
  fontWeight: 550,
  fontFamily: "Poppins",
};

const styledList = {
  paddingTop: "0",
  padding: "0",
  paddingBottom: "8px", //: "0px",
};

const itemTextStyle = {
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "15px",
  color: "#5e35b1",
};

// activePage
// activePagestyle
const activePageTitle = {
  fontFamily: "Poppins",
  fontWeight: 500,
  color: "#774FBF",
};
