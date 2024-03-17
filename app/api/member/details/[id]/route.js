import { connectToDB } from "@/utils/database";
import Member from "@/models/member";
import { ObjectId } from "mongodb";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const id = params.id;

    var o_id = ObjectId.createFromHexString(id);
    const details = await Member.find({ _id: o_id });

    return new Response(JSON.stringify(details), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch member details", {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  const {
    memberId,
    profilePic,
    firstName,
    middleName,
    lastName,
    profilePicture,
    holyName,
    town,
    gender,
    placeOfBirth,
    dateOfBirth,
    holyFatherName,
    dateOfJoining,
    department,
    division,
    status,

    phoneNumber,
    address,
    kebele,
    houseNumber,
    workCondition,
    officeName,
    additionalFile,
    bio,

    guardianName,
    parentPhoneNumber,
  } = await request.json();
  console.log("Firstname in request", firstName);
  try {
    await connectToDB();
    const existingMember = await Member.findById(params.id);
    //  console.log("existing memebr in details api", existingMember);
    if (!existingMember) {
      return new Response("Member not found", { status: 404 });
    }

    existingMember.memberId = memberId;
    existingMember.profilePic = profilePic;
    existingMember.firstName = firstName;
    existingMember.middleName = middleName;
    existingMember.lastName = lastName;
    existingMember.profilePicture = profilePicture;
    existingMember.holyName = holyName;
    existingMember.town = town;
    existingMember.gender = gender;
    existingMember.placeOfBirth = placeOfBirth;
    existingMember.dateOfBirth = dateOfBirth;
    existingMember.holyFatherName = holyFatherName;
    existingMember.dateOfJoining = dateOfJoining;
    existingMember.department = department;
    existingMember.division = division;
    existingMember.status = status;
    existingMember.phoneNumber = phoneNumber;
    existingMember.address = address;
    existingMember.kebele = kebele;
    existingMember.houseNumber = houseNumber;
    existingMember.workCondition = workCondition;
    existingMember.officeName = officeName;
    existingMember.additionalFile = additionalFile;
    existingMember.bio = bio;
    existingMember.guardianName = guardianName;
    existingMember.parentPhoneNumber = parentPhoneNumber;

    await existingMember.save();
    return new Response(JSON.stringify(existingMember), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the prompt", { status: 200 });
  }
};
