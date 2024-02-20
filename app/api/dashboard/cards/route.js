import { connectToDB } from "@/utils/database";
import Member from "@/models/member";

export const GET = async (request) => {
  try {
    await connectToDB();

    // Fetch all members
    const members = await Member.find({});

    const totalMembers = members.length;

    const maleMembers = members.filter(
      (member) => member.gender === "Male"
    ).length;

    const femaleMembers = members.filter(
      (member) => member.gender === "Female"
    ).length;

    const responseData = {
      totalMembers,
      maleMembers,
      femaleMembers,
    };

    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch member statistics", { status: 500 });
  }
};
