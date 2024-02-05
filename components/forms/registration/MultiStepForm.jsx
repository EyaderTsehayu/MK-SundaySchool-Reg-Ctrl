import React, { Children, useState } from "react";
import { Form, Formik } from "formik";
import FormNavigation from "./FormNavigation";
import { Typography } from "@mui/material";

const MultiStepForm = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber + 1 === totalSteps;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (values, actions) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          {/* <p>
            Step {stepNumber + 1} of {totalSteps}
          </p>{" "} */}
          {stepNumber === 0 && (
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#0033cc",

                fontSize: 16,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Personal Information
            </Typography>
          )}
          {stepNumber === 1 && (
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#0033cc",

                fontSize: 16,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Additional Information
            </Typography>
          )}
          {stepNumber === 2 && (
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#0033cc",

                fontSize: 16,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Parent/Guardian Information
            </Typography>
          )}
          {React.cloneElement(step, { formik })}
          <FormNavigation
            isLastStep={isLastStep}
            hasPrevious={stepNumber > 0}
            onBackClick={() => previous(formik.values)}
          />
          {/* <Debug /> */}
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;

export const FormStep = ({ formik, children }) => {
  return <div>{children(formik)}</div>;
};
