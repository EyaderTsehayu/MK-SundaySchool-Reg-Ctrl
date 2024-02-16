import { connectToDB } from "@/utils/database";
import Member from "@/models/member";

export const GET = async (request) => {
  try {
    await connectToDB();
    const members = await Member.find({});

    return new Response(JSON.stringify(members), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all members", { status: 500 });
  }
};
