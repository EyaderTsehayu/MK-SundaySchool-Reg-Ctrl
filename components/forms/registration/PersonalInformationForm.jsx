import React from "react";
import TextField from "@mui/material/TextField";

const PersonalInformationForm = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    // Update the form data for personal information
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName || ""}
        onChange={handleChange}
        fullWidth
        className="mb-4"
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName || ""}
        onChange={handleChange}
        fullWidth
      />
      {/* Add other personal information fields as needed */}
    </form>
  );
};

export default PersonalInformationForm;
