import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const GuardianInformationForm = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    // Update the form data for guardian information
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

  return (
    <form sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Parent/Guardian's Name"
            name="guardianName"
            value={formData.guardianName || ""}
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
        <Grid item xs={12} md={6}>
          <TextField
            label="Phone Number"
            name="phonenumber"
            value={formData.phonenumber || ""}
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

      {/* Add other guardian information fields as needed */}
    </form>
  );
};

export default GuardianInformationForm;
