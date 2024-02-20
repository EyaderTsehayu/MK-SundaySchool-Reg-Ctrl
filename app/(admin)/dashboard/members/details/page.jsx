"use client";
import Breadcrumb from "@/components/cards/Breadcrumb";
import MainCard from "@/components/cards/MainCard";
import SubCard from "@/components/cards/SubCard";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material/";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import StyleIcon from "@mui/icons-material/Style";

import MemberProfile from "@/components/forms/details/MemberProfile";
import AdditionalInformation from "@/components/forms/details/AdditionalInformation";
import ParentInformation from "@/components/forms/details/ParentInformation";
import { useRouter, useSearchParams } from "next/navigation";
function TabPanel(props) {
  const { children, value, index, smallScreen, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={!smallScreen ? { pr: 3, pl: 3 } : {}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Details = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery("(max-width: 768px)");
  const [value, setValue] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  const handleSubmit = async (values) => {
    try {
      const response = await fetch(`/api/member/details/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          firstName: values.firstName,
          middleName: values.middleName,
          lastName: values.lastName,
          profilePicture: values.profilePicture,
          memberId: values.memberId,
          holyName: values.holyName,
          town: values.town,
          gender: values.gender,
          placeOfBirth: values.placeOfBirth,
          dateOfBirth: values.dateOfBirth,
          holyFatherName: values.holyFatherName,
          dateOfJoining: values.dateOfJoining,
          department: values.department,
          division: values.division,
          status: values.status,
          phoneNumber: values.phoneNumber,
          address: values.address,
          kebele: values.kebele,
          houseNumber: values.houseNumber,
          workCondition: values.workCondition,
          officeName: values.officeName,
          additionalFile: values.additionalFile,
          bio: values.bio,
          guardianName: values.guardianName,
          parentPhoneNumber: values.parentPhoneNumber,
        }),
      });

      if (response.ok) {
        // router.push("/");
        setMember({
          firstName: values.firstName,
          middleName: values.middleName,
          lastName: values.lastName,
          profilePicture: values.profilePicture,
          memberId: values.memberId,
          holyName: values.holyName,
          town: values.town,
          gender: values.gender,
          placeOfBirth: values.placeOfBirth,
          dateOfBirth: values.dateOfBirth,
          holyFatherName: values.holyFatherName,
          dateOfJoining: values.dateOfJoining,
          department: values.department,
          division: values.division,
          status: values.status,
          phoneNumber: values.phoneNumber,
          address: values.address,
          kebele: values.kebele,
          houseNumber: values.houseNumber,
          workCondition: values.workCondition,
          officeName: values.officeName,
          additionalFile: values.additionalFile,
          bio: values.bio,
          guardianName: values.guardianName,
          parentPhoneNumber: values.parentPhoneNumber,
        });
        toast.success("Successfully updated");
        // console.log("Successfully updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [member, setMember] = useState({
    memberId: "",
    profilePic: null,
    firstName: "",
    middleName: "",
    lastName: "",
    holyName: "",
    town: "",
    gender: "",
    placeOfBirth: "",
    dateOfBirth: "",
    holyFatherName: "",
    dateOfJoining: "",
    department: "",
    division: "",
    status: "",

    phoneNumber: "",
    address: "",
    kebele: "",
    houseNumber: "",
    workCondition: "",
    officeName: "",
    additionalFile: "",
    bio: "",

    guardianName: "",
    parentPhoneNumber: "",
  });

  useEffect(() => {
    const getMemberDetails = async () => {
      const response = await fetch(`/api/member/details/${userId}`);
      const data = await response.json();

      setMember({
        firstName: data[0].firstName,
        middleName: data[0].middleName,
        lastName: data[0].lastName,
        profilePicture: data[0].profilePicture,
        memberId: data[0].memberId,
        holyName: data[0].holyName,
        town: data[0].town,
        gender: data[0].gender,
        placeOfBirth: data[0].placeOfBirth,
        dateOfBirth: data[0].dateOfBirth,
        holyFatherName: data[0].holyFatherName,
        dateOfJoining: data[0].dateOfJoining,
        department: data[0].department,
        division: data[0].division,
        status: data[0].status,
        phoneNumber: data[0].phoneNumber,
        address: data[0].address,
        kebele: data[0].kebele,
        houseNumber: data[0].houseNumber,
        workCondition: data[0].workCondition,
        officeName: data[0].officeName,
        additionalFile: data[0].additionalFile,
        bio: data[0].bio,
        guardianName: data[0].guardianName,
        parentPhoneNumber: data[0].parentPhoneNumber,
      });
    };

    if (userId) getMemberDetails();
  }, [userId]);

  const initialValues = {
    // Define initial values for each field
    firstName: member.firstName,
    middleName: member.middleName,
    lastName: member.lastName,
    profilePicture: member.profilePicture,
    memberId: member.memberId,
    holyName: member.holyName,
    town: member.town,
    gender: member.gender,
    placeOfBirth: member.placeOfBirth,
    dateOfBirth: member.dateOfBirth,
    holyFatherName: member.holyFatherName,
    dateOfJoining: member.dateOfJoining,
    department: member.department,
    division: member.division,
    status: member.status,
    phoneNumber: member.phoneNumber,
    address: member.address,
    kebele: member.kebele,
    houseNumber: member.houseNumber,
    workCondition: member.workCondition,
    officeName: member.officeName,
    additionalFile: member.additionalFile,
    bio: member.bio,
    guardianName: member.guardianName,
    parentPhoneNumber: member.parentPhoneNumber,
  };

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log("Form submission started");
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Breadcrumb path={"Details"} brtitle={"Member's Detail Information"} />

      <MainCard>
        {initialValues.firstName != "" && (
          <Box className="flex-grow bg-background-paper flex flex-col md:flex-row gap-2 md:gap-0">
            <Tabs
              orientation={smallScreen ? "horizontal" : "vertical"}
              variant="scrollable"
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: { display: "none" },
              }}
              aria-label="Vertical tabs example"
              sx={{
                flex: smallScreen ? "1" : "0 0 250px", // Set a fixed width for the Tabs section
                overflowY: "auto", // Enable vertical scrolling if necessary
              }}
            >
              <Tab
                {...a11yProps(0)}
                className="rounded-lg items-start mb-2  "
                sx={tabItem}
                label={
                  <Box className="flex flex-row justify-center items-top gap-4">
                    <Person2OutlinedIcon />
                    <div className="flex flex-col items-start gap-0.5">
                      <Typography
                        variant="h4"
                        className="text-left"
                        sx={itemTitle}
                      >
                        Member Profile
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={itemSubTitle}
                        className=" text-slate-500 "
                      >
                        Detailed profile
                      </Typography>
                    </div>
                  </Box>
                }
              />
              <Tab
                {...a11yProps(1)}
                className="rounded-lg items-start mb-2 "
                sx={tabItem}
                label={
                  <Box className="flex flex-row justify-center items-top gap-4">
                    <StyleIcon sx={{ fontSize: "18px" }} />
                    <div className="flex flex-col items-start gap-0.5">
                      <Typography
                        className="text-left"
                        variant="h4"
                        sx={itemTitle}
                      >
                        Additional information
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={itemSubTitle}
                        className=" text-slate-500 text-lef"
                      >
                        Extra profiles
                      </Typography>
                    </div>
                  </Box>
                }
              />
              <Tab
                {...a11yProps(2)}
                className="rounded-lg items-start mb-2 "
                sx={tabItem}
                label={
                  <Box className="flex flex-row justify-center items-top gap-4">
                    <EscalatorWarningOutlinedIcon />
                    <div className="flex flex-col items-start  gap-0.5">
                      <Typography
                        variant="h4"
                        className="text-left"
                        sx={itemTitle}
                      >
                        Parent Profile
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={itemSubTitle}
                        className=" text-slate-500 text-left "
                      >
                        Member's guardian/parent
                      </Typography>
                    </div>
                  </Box>
                }
              />
              <Tab
                {...a11yProps(3)}
                className="rounded-lg items-start mb-2 "
                sx={tabItem}
                label={
                  <Box className="flex flex-row justify-center items-top gap-4">
                    <Person2OutlinedIcon />
                    <div className="flex flex-col items-start  gap-0.5">
                      <Typography
                        variant="h4"
                        className="text-left"
                        sx={itemTitle}
                      >
                        Service Biography
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={itemSubTitle}
                        className=" text-slate-500 text-left "
                      >
                        Member's Service record
                      </Typography>
                    </div>
                  </Box>
                }
              />
            </Tabs>
            <Box className="flex-grow" sx={{ overflowY: "auto" }}>
              <TabPanel value={value} index={0} smallScreen={smallScreen}>
                <MemberProfile
                  onSubmit={handleSubmit}
                  initialValues={initialValues}
                />
              </TabPanel>
              <TabPanel value={value} index={1} smallScreen={smallScreen}>
                <AdditionalInformation
                  onSubmit={handleSubmit}
                  initialValues={initialValues}
                />
              </TabPanel>
              <TabPanel value={value} index={2} smallScreen={smallScreen}>
                <ParentInformation
                  onSubmit={handleSubmit}
                  initialValues={initialValues}
                />
              </TabPanel>
              <TabPanel value={value} index={3} smallScreen={smallScreen}>
                <SubCard>Item Four</SubCard>
              </TabPanel>
            </Box>
          </Box>
        )}
      </MainCard>
    </div>
  );
};

export default Details;

const tabItem = {
  color: "#5e35b1",
  textTransform: "none",
  "&.Mui-selected": {
    bgcolor: "rgb(248, 240, 252)",
    color: "#0033cc",
  },
  "&:hover": {
    bgcolor: "rgb(248, 250, 252)",
  },
};
const itemTitle = {
  fontSize: "0.9rem",
  fontFamily: "Poppins",
  fontWeight: 600,
};
const itemSubTitle = {
  fontSize: "0.85rem",
  fontFamily: "Poppins",
  fontWeight: 500,
};
