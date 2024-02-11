"use client";
import { Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import InputField from "./InputField";
import DropdownField from "./DropDownField";
import DatePickerField from "./DatePickerField";
import MultiStepForm, { FormStep } from "./MultiStepForm";

const personalInfoValidation = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  middleName: yup.string().required("Middle Name is required"),
  lastName: yup.string().required("Last Name is required"),
  holyName: yup.string().required("Holy Name is required"),
  gender: yup.string().required("Gender is required"),
  placeOfBirth: yup.string().required("Place Of Birth is required"),
  dateOfBirth: yup
    .date("Invalid date")
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth must be in the past")
    .test(
      "age",
      "Age must be greater than 4 years",
      (value) => value && new Date().getFullYear() - value.getFullYear() > 4
    ), // Assuming the date of birth cannot be in the future
  holyFatherName: yup.string().required("Holy Father Name is required"),
  batch: yup.string().required("Batch is required"),
  department: yup.string().required("Department is required"),
  division: yup.string().required("Division is required"),
  status: yup.string().required("Status is required"),
  town: yup.string().required("town is required"),
});

const additionalInfoValidation = yup.object().shape({
  phoneNumber: yup.string().required("phone Number is required"),
  address: yup.string().required("Address is required"),
  kebele: yup.string().required("kebele is required"),
  houseNumber: yup.string().required("House Number is required"),
  workCondition: yup.string().required("work Condition is required"),
  offficeName: yup.string().required("Offfice Name is required"),

  //  additionalFile: yup.string().required("Additional File is required"),
  // bio: yup.string().required("Bio is required"),
});

const guardianInfoValidation = yup.object().shape({
  guardianName: yup.string().required("Guardian Name is required"),
  parentPhoneNumber: yup.string().required("Parent Phone Number is required"),
});

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  holyName: "",
  town: "",
  gender: "",
  placeOfBirth: "",
  dateOfBirth: "",
  holyFatherName: "",
  batch: "",
  department: "",
  division: "",
  status: "",

  phoneNumber: "",
  address: "",
  kebele: "",
  houseNumber: "",
  workCondition: "",
  offficeName: "",
  additionalFile: "",
  bio: "",

  guardianName: "",
  parentPhoneNumber: "",
};

const RegisterationForm = () => {
  return (
    <div>
      {" "}
      <MultiStepForm
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        //  validationSchema={validationSchema}
      >
        <FormStep validationSchema={personalInfoValidation}>
          {(formik) => (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="firstName" label="First Name" />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="middleName" label="Middle Name" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="lastName" label="Last Name" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="holyName" label="Holy Name" />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="town" label="Town" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <DropdownField
                  name="gender"
                  label="Gender"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="placeOfBirth" label="Place Of Birth" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <DatePickerField name="dateOfBirth" label="Date of Birth" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <InputField name="holyFatherName" label="Holy Father's Name" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <InputField name="batch" label="Batch" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <DropdownField
                  name="department"
                  label="Department"
                  options={[
                    { value: "hymn", label: "Hymn" },
                    { value: "education", label: "Education" },
                    {
                      value: "artsAndLiterature",
                      label: "Arts And Literature",
                    },
                    // Add more options as needed
                  ]}
                />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <DropdownField
                  name="division"
                  label="Division"
                  options={[
                    { value: "youth", label: "Youth" },
                    { value: "johnTheBaptist", label: "John The Baptist" },
                    { value: "kidSamuel", label: "kid Samuel" },
                    // Add more options as needed
                  ]}
                />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <DropdownField
                  name="status"
                  label="Status"
                  options={[
                    { value: "active", label: "Active" },
                    { value: "stalled", label: "Stalled" },
                    { value: "lost", label: "Lost" },
                    // Add more options as needed
                  ]}
                />
              </Grid>
            </Grid>
          )}
        </FormStep>
        <FormStep validationSchema={additionalInfoValidation}>
          {(formik) => (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="phoneNumber" label="Phone Number" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="address" label="Current Address" />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="kebele" label="Kebele" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="houseNumber" label="House Number" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <DropdownField
                  name="workCondition"
                  label="Work Condition"
                  options={[
                    { value: "student", label: "Student" },
                    {
                      value: "civilServant",
                      label: "Civil Servant",
                    },
                    {
                      value: "privateEmployee",
                      label: "Private Employee",
                    },
                    {
                      value: "businessOwner",
                      label: "Business Owner",
                    },
                    {
                      value: "ngoEmployee",
                      label: "NGO Employee",
                    },

                    // Add more options as needed
                  ]}
                />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="offficeName" label="Office/School Name" />
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                <InputField name="additionalFile" label="Additional Files" />
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                <InputField name="bio" label="Bio" />
              </Grid>
            </Grid>
          )}
        </FormStep>
        <FormStep validationSchema={guardianInfoValidation}>
          {(formik) => (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputField
                  name="guardianName"
                  label="Parent/Guardian's Name"
                />
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                <InputField name="parentPhoneNumber" label="Phone Number" />
              </Grid>
            </Grid>
          )}
        </FormStep>
      </MultiStepForm>
    </div>
  );
};

export default RegisterationForm;
