import { connectToDB } from "@/utils/database";
import Member from "@/models/member";
export const POST = async (req) => {
  try {
    await connectToDB();

    const data = await req.json();
    // console.log(data);
    let count = 0;
    for (const userData of data) {
      const newMember = new Member({
        firstName: userData["First Name"],
        middleName: userData["Middle Name"],
        lastName: userData["Last Name"],
        memberId: userData["Member Id"],
        profilePicture: userData["Profile Picture"],
        holyName: userData["Holy Name"],
        town: userData["Town"],
        gender: userData["Gender"],
        placeOfBirth: userData["Place Of Birth"],
        dateOfBirth: userData["Date Of Birth"],
        holyFatherName: userData["Holy Father Name"],
        dateOfJoining: userData["Date Of Joining"],
        department: userData["Department"],
        division: userData["Division"],
        status: userData["Status"],
        phoneNumber: userData["Phone Number"],
        address: userData["Address"],
        kebele: userData["Kebele"],
        houseNumber: userData["House Number"],
        workCondition: userData["Work Condition"],
        officeName: userData["Office Name"],
        additionalFile: userData["Additional File"],
        bio: userData["Biography"],
        guardianName: userData["Guardian Name"],
        parentPhoneNumber: userData["Parent Phone Number"],
        // Map each property to the corresponding field in your User model
      });
      //  console.log(studentId, firstName, last);
      await newMember.save();
      count++;
    }

    // return res.status(201).json({ message: "Users created successfully" });
    return new Response(`${count} users added successfully`, { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Faild to create a new user", { status: 500 });
    //return res.status(500).json({ message: "Failed to create users" });
  }
};
