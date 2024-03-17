import mongoose, { model, Schema, models } from "mongoose";

const MemberSchema = new Schema({
  //   creator: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  firstName: {
    type: String,
    required: [true, "First Name is required."],
  },
  middleName: {
    type: String,
    required: [true, "Middle Name is required."],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required."],
  },
  memberId: {
    type: String,
    required: [true, "Member Id is required."],
  },
  profilePicture: {
    type: String,
    // required: [true, "Profile Picture is required."],
  },
  holyName: {
    type: String,
    required: [true, "Holy Name is required."],
  },
  town: {
    type: String,
    required: [true, "Town is required."],
  },
  gender: {
    type: String,
    required: [true, "Gender is required."],
  },
  placeOfBirth: {
    type: String,
    required: [true, "Place of Birth is required."],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date of Birth is required."],
  },
  holyFatherName: {
    type: String,
    required: [true, "Holy Father Name is required."],
  },
  dateOfJoining: {
    type: String,
    required: [true, "Date Of Joining is required."],
  },
  department: {
    type: String,
    required: [true, "Department is required."],
  },
  division: {
    type: String,
    required: [true, "Division is required."],
  },
  status: {
    type: String,
    required: [true, "Status is required."],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required."],
  },
  address: {
    type: String,
    required: [true, "Address is required."],
  },
  kebele: {
    type: String,
    required: [true, "Kebele is required."],
  },
  houseNumber: {
    type: String,
    required: [true, "House Number is required."],
  },
  workCondition: {
    type: String,
    required: [true, "Work Condition is required."],
  },
  officeName: {
    type: String,
    required: [true, "Offfice Name is required."],
  },
  additionalFile: {
    type: String,
    // required: [true, "Additional File is required."],
  },
  bio: {
    type: String,
    // required: [true, "Bio is required."],
  },
  guardianName: {
    type: String,
    required: [true, "Guardian Name is required."],
  },
  parentPhoneNumber: {
    type: String,
    required: [true, "Parent Phone Number is required."],
  },
});

const Member = models.Member || model("Member", MemberSchema);
export default Member;
