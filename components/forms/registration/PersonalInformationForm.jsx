import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const PersonalInformationForm = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    // Update the form data for personal information
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const borderStyle = {
    "& fieldset": {
      backgroundColor: "rgb(248, 250, 252)",
      borderRadius: "8px",
    },
  };
  const menuItemStyle = {
    fontFamily: "Poppins",
  };
  return (
    <form sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName || ""}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              style: {
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              },
            }}
            sx={borderStyle}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Middle Name"
            name="middleName"
            value={formData.middleName || ""}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              style: {
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              },
            }}
            sx={borderStyle}
          />
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              style: {
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              },
            }}
            sx={borderStyle}
          />
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Holy Name"
            name="holyName"
            value={formData.holyName || ""}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              style: {
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              },
            }}
            sx={borderStyle}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              style: {
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              },
            }}
            sx={borderStyle}
          />
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <FormControl>
            <FormLabel
              sx={menuItemStyle}
              id="demo-controlled-radio-buttons-group"
            >
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              onChange={handleChange}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                sx={menuItemStyle}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                sx={menuItemStyle}
              />
            </RadioGroup>
          </FormControl>
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Place Of Birth"
            //  placeholder="Town/City"
            name="placeOfBirth"
            value={formData.placeOfBirth || ""}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              style: {
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              },
            }}
            sx={borderStyle}
          />
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Holy Father's Name"
            name="holyFatherName"
            value={formData.holyFatherName || ""}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              style: {
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              },
            }}
            sx={borderStyle}
          />
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Batch"
            name="batch"
            value={formData.batch || ""}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              style: {
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              },
            }}
            sx={borderStyle}
          />
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              }}
              id="demo-simple-select-label"
            >
              Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.department || ""}
              label="Department"
              onChange={handleChange}
              sx={borderStyle}
            >
              <MenuItem sx={menuItemStyle} value={10}>
                Ten
              </MenuItem>
              <MenuItem sx={menuItemStyle} value={20}>
                Twenty
              </MenuItem>
              <MenuItem sx={menuItemStyle} value={30}>
                Thirty
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              }}
              id="demo-simple-select-label"
            >
              Division
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.division || ""}
              label="Division"
              onChange={handleChange}
              sx={borderStyle}
            >
              <MenuItem sx={menuItemStyle} value={"youth"}>
                Youth
              </MenuItem>
              <MenuItem sx={menuItemStyle} value={"stalled"}>
                Jhon The Baptist
              </MenuItem>
              <MenuItem sx={menuItemStyle} value={"kidsamuel"}>
                Kid Samuel
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>{" "}
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                fontSize: "15px",
                fontFamily: "Poppins", // Set your desired label color
              }}
              id="demo-simple-select-label"
            >
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.status || ""}
              label="Status"
              onChange={handleChange}
              sx={borderStyle}
            >
              <MenuItem sx={menuItemStyle} value={"active"}>
                Active
              </MenuItem>
              <MenuItem sx={menuItemStyle} value={"stalled"}>
                Stalled
              </MenuItem>
              <MenuItem sx={menuItemStyle} value={"Lost"}>
                Lost
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Add other personal information fields as needed */}
    </form>
  );
};

export default PersonalInformationForm;
