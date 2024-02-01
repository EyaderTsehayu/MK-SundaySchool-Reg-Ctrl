import React from "react";
import TextField from "@mui/material/TextField";

const GuardianInformationForm = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    // Update the form data for guardian information
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <TextField
        label="Guardian's Name"
        name="guardianName"
        value={formData.guardianName || ""}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Relationship"
        name="relationship"
        value={formData.relationship || ""}
        onChange={handleChange}
        fullWidth
      />
      {/* Add other guardian information fields as needed */}
    </form>
  );
};

export default GuardianInformationForm;
