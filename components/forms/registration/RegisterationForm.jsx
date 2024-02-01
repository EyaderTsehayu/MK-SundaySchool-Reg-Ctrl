"use client";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fragment, useState } from "react";
import PersonalInformationForm from "./PersonalInformationForm";
import AdditionalInformationForm from "./AdditionalInformationForm";
import GuardianInformationForm from "./GuardianInformationForm";

const steps = [
  "Personal Information",
  "Additional Information",
  "Parent/Guardian Information",
];

export default function RegistrationStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [formData, setFormData] = useState({
    personalInformation: {},
    additionalInformation: {},
    guardianInformation: {},
  });
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      personalInformation: {},
      additionalInformation: {},
      guardianInformation: {},
    });
  };

  // Define a function to update form data based on step
  const updateFormData = (step, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [step]: data,
    }));
  };

  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Stepper activeStep={activeStep} sx={{ mb: 3, mt: 2 }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <Typography sx={{ fontFamily: "Poppins", fontSize: 14 }}>
                  {" "}
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          {activeStep === 0 && (
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#351478",

                fontSize: 16,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Personal Information
            </Typography>
          )}
          {activeStep === 1 && (
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#351478",

                fontSize: 16,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Additional Information
            </Typography>
          )}
          {activeStep === 2 && (
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#351478",

                fontSize: 16,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Parent/Guardian Information
            </Typography>
          )}
          {/* Render the appropriate form based on the active step */}
          {activeStep === 0 && (
            <PersonalInformationForm
              formData={formData.personalInformation}
              updateFormData={(data) =>
                updateFormData("personalInformation", data)
              }
            />
          )}
          {activeStep === 1 && (
            <AdditionalInformationForm
              formData={formData.additionalInformation}
              updateFormData={(data) =>
                updateFormData("additionalInformation", data)
              }
            />
          )}
          {activeStep === 2 && (
            <GuardianInformationForm
              formData={formData.guardianInformation}
              updateFormData={(data) =>
                updateFormData("guardianInformation", data)
              }
            />
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}
