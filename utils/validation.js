import * as yup from "yup";

export const personalInfoValidation = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  middleName: yup.string().required("Middle Name is required"),
  lastName: yup.string().required("Last Name is required"),
  memberId: yup.string().required("Member Id is required"),
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
  dateOfJoining: yup
    .date("Invalid date")
    .required("Date Of Joining is required")
    .max(new Date(), "Date of Birth must be in the past"),

  town: yup.string().required("Town is required"),
});

export const additionalInfoValidation = yup.object().shape({
  department: yup.string().required("Department is required"),
  division: yup.string().required("Division is required"),
  status: yup.string().required("Status is required"),
  phoneNumber: yup.string().required("phone Number is required"),
  address: yup.string().required("Address is required"),
  kebele: yup.string().required("kebele is required"),
  houseNumber: yup.string().required("House Number is required"),
  workCondition: yup.string().required("work Condition is required"),
  offficeName: yup.string().required("Offfice Name is required"),

  //  additionalFile: yup.string().required("Additional File is required"),
  // bio: yup.string().required("Bio is required"),
});

export const guardianInfoValidation = yup.object().shape({
  guardianName: yup.string().required("Guardian Name is required"),
  parentPhoneNumber: yup.string().required("Parent Phone Number is required"),
});
