"use client";
import { Grid, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { CldUploadWidget } from "next-cloudinary";

import InputField from "./InputField";
import DropdownField from "./DropDownField";
import DatePickerField from "./DatePickerField";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import { personalInfoValidation } from "@/utils/validation";
import { additionalInfoValidation } from "@/utils/validation";
import { guardianInfoValidation } from "@/utils/validation";
import { toast } from "react-toastify";

const initialValues = {
  memberId: "",
  profilePic: null,
  firstName: "",
  middleName: "",
  lastName: "",
  holyName: "",
  town: "",
  gender: "",
  placeOfBirth: "",
  dateOfBirth: "",
  holyFatherName: "",
  dateOfJoining: "",
  department: "",
  division: "",
  status: "",

  phoneNumber: "",
  address: "",
  kebele: "",
  houseNumber: "",
  workCondition: "",
  officeName: "",
  additionalFile: "",
  bio: "",

  guardianName: "",
  parentPhoneNumber: "",
};
const handleSubmit = async (values, actions) => {
  console.log("Values", values.profilePic);

  const image = values.profilePic;
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "mkss_pro_pic");
  const uploadResponse = await fetch(
    "https://api.cloudinary.com/v1_1/dqavpwzbn/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const uploadedImageData = await uploadResponse.json();
  const imageUrl = uploadedImageData.secure_url;
  // console.log("image url", imageUrl);
  //alert(JSON.stringify(values, null, 2));
  if (imageUrl !== null) {
    try {
      const response = await fetch("/api/member/new", {
        method: "POST",
        body: JSON.stringify({
          firstName: values.firstName,
          middleName: values.middleName,
          lastName: values.lastName,
          profilePicture: imageUrl,
          memberId: values.memberId,
          holyName: values.holyName,
          town: values.town,
          gender: values.gender,
          placeOfBirth: values.placeOfBirth,
          dateOfBirth: values.dateOfBirth,
          holyFatherName: values.holyFatherName,
          dateOfJoining: values.dateOfJoining,
          department: values.department,
          division: values.division,
          status: values.status,
          phoneNumber: values.phoneNumber,
          address: values.address,
          kebele: values.kebele,
          houseNumber: values.houseNumber,
          workCondition: values.workCondition,
          officeName: values.officeName,
          additionalFile: values.additionalFile,
          bio: values.bio,
          guardianName: values.guardianName,
          parentPhoneNumber: values.parentPhoneNumber,
        }),
      });
      if (response.ok) {
        //  router.push("/");
        toast.success("Successfully regsitered");
        actions.resetForm();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const RegisterationForm = () => {
  return (
    <div>
      {" "}
      <MultiStepForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
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
                <InputField name="memberId" label="Member Id" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <div>
                  <label
                    htmlFor="file_input"
                    className="p-3.5 block text-sm text-gray-200 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white dark:border-gray-300 dark:placeholder-blue-100"
                  >
                    {formik.values.profilePic != null ? (
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-600">
                        {formik.values.profilePic.name}
                      </p>
                    ) : (
                      <p
                        class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                        id="file_input_help"
                      >
                        Upload member's picture. PNG or JPG (MAX. 1Mb).
                      </p>
                    )}
                    <input
                      type="file"
                      id="file_input"
                      className="hidden"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "profilePic",
                          event.target.files[0]
                        );
                      }}
                    />
                  </label>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DropdownField
                  name="gender"
                  label="Gender"
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <DatePickerField name="dateOfBirth" label="Date of Birth" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="placeOfBirth" label="Place Of Birth" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="town" label="Town" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="holyName" label="Holy Name" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <InputField name="holyFatherName" label="Holy Father's Name" />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                {/* <InputField name="dateOfJoining" label="dateOfJoining" /> */}
                <DatePickerField name="dateOfJoining" label="Date Of Joining" />
              </Grid>{" "}
            </Grid>
          )}
        </FormStep>
        <FormStep validationSchema={additionalInfoValidation}>
          {(formik) => (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <DropdownField
                  name="department"
                  label="Department"
                  options={[
                    { value: "Hymn", label: "Hymn" },
                    { value: "Education", label: "Education" },
                    {
                      value: "Arts And Literature",
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
                    { value: "Youth", label: "Youth" },
                    { value: "John The Baptist", label: "John The Baptist" },
                    { value: "Kid Samuel", label: "kid Samuel" },
                    // Add more options as needed
                  ]}
                />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <DropdownField
                  name="status"
                  label="Status"
                  options={[
                    { value: "Active", label: "Active" },
                    { value: "Stalled", label: "Stalled" },
                    { value: "Lost", label: "Lost" },
                    // Add more options as needed
                  ]}
                />
              </Grid>
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
                      value: "Civil Servant",
                      label: "Civil Servant",
                    },
                    {
                      value: "Private Employee",
                      label: "Private Employee",
                    },
                    {
                      value: "Business Owner",
                      label: "Business Owner",
                    },
                    {
                      value: "Ngo Employee",
                      label: "NGO Employee",
                    },

                    // Add more options as needed
                  ]}
                />
              </Grid>{" "}
              <Grid item xs={12} md={6} lg={4}>
                <InputField name="officeName" label="Office/School Name" />
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
