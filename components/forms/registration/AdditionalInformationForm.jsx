import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const AdditionalInformationForm = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    // Update the form data for additional information
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
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber || ""}
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
            label="Current Address"
            name="address"
            value={formData.address || ""}
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
            label="Kebele"
            name="kebele"
            value={formData.kebele || ""}
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
            label="House Number"
            name="housenumber"
            value={formData.housenumber || ""}
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
              Work Condition
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.workcondition || ""}
              label="Work Condition"
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
          <TextField
            label="Office/School Name"
            name="offficename"
            value={formData.phoneNumber || ""}
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
        <Grid item xs={12} md={6}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber || ""}
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
        <Grid item xs={12} md={6}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber || ""}
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
      </Grid>
    </form>
  );
};

export default AdditionalInformationForm;
