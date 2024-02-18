"use client";
import Breadcrumb from "@/components/cards/Breadcrumb";
import MainCard from "@/components/cards/MainCard";
import SubCard from "@/components/cards/SubCard";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material/";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import StyleIcon from "@mui/icons-material/Style";

import MemberProfile from "@/components/forms/details/MemberProfile";
import AdditionalInformation from "@/components/forms/details/AdditionalInformation";
import ParentInformation from "@/components/forms/details/ParentInformation";
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
const handleSubmit = (values) => {
  // Handle form submission logic (e.g., save to MongoDB)
  console.log("Form submitted in Details component:", values);
};

const Details = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery("(max-width: 768px)");
  const [value, setValue] = useState(0);

  const initialValues = {
    // Define initial values for each field
    memberProfileField1: "bam bam",
    memberProfileField2: "boom",
    additionalInfoField1: "ban ban",
    additionalInfoField2: "banny banny",
    gender: "Male",
    parentInfoField2: "bally",
    serviceBioField1: "",
    serviceBioField2: "",
  };

  const validationSchema = Yup.object().shape({
    // Define validation schema for each field
    memberProfileField1: Yup.string().required("Required"),
    memberProfileField2: Yup.string().required("Required"),
    additionalInfoField1: Yup.string().required("Required"),
    additionalInfoField2: Yup.string().required("Required"),
    parentInfoField1: Yup.string().required("Required"),
    parentInfoField2: Yup.string().required("Required"),
    serviceBioField1: Yup.string().required("Required"),
    serviceBioField2: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submission started");
      // Handle form submission - You can send data to MongoDB here
      console.log("Form values submitted:", values);
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Breadcrumb path={"Details"} brtitle={"Member's Detail Information"} />

      <MainCard>
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
