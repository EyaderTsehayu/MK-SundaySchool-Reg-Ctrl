import React from "react";
import TextField from "@mui/material/TextField";

const AdditionalInformationForm = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    // Update the form data for additional information
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <TextField
        label="Address"
        name="address"
        value={formData.address || ""}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber || ""}
        onChange={handleChange}
        fullWidth
      />
      {/* Add other additional information fields as needed */}
    </form>
  );
};

export default AdditionalInformationForm;
