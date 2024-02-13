import { connectToDB } from "@/utils/database";
import Member from "@/models/member";

export const POST = async (req) => {
  const {
    firstName,
    middleName,
    lastName,
    profilePicture,
    memberId,
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
    offficeName,
    additionalFile,
    bio,
    guardianName,
    parentPhoneNumber,
  } = await req.json();
  try {
    await connectToDB();

    const newMember = new Member({
      firstName,
      middleName,
      lastName,
      memberId,
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
      offficeName,
      additionalFile,
      bio,
      guardianName,
      parentPhoneNumber,
    });
    await newMember.save();
    return new Response(JSON.stringify(newMember), { status: 201 });
  } catch (error) {
    return new Response("Faild to create a new prompt", { status: 500 });
  }
};
