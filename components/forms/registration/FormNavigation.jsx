import { Button } from "@mui/material";
import React from "react";

const FormNavigation = (props) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 50,
        justifyContent: "space-between",
      }}
    >
      {props.hasPrevious && (
        <Button
          variant="contained"
          onClick={props.onBackClick}
          type="submit"
          style={{
            backgroundColor: "#9c27b0",
            color: "white",
            fontFamily: "Poppins",
          }}
        >
          Back
        </Button>
      )}

      <Button
        variant="contained"
        type="submit"
        style={{
          backgroundColor: "#3d5afe",
          color: "white",
          fontFamily: "Poppins",
        }}
      >
        {props.isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default FormNavigation;
