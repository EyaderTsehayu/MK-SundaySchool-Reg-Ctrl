import { connectToDB } from "@/utils/database";
import Member from "@/models/member";

export const GET = async (request, { params }) => {
  try {
    const division = params.id;
    await connectToDB();
    if (division == "all") {
      const members = await Member.find({});
      return new Response(JSON.stringify(members), { status: 200 });
    } else {
      const members = await Member.find({ division: division });
      return new Response(JSON.stringify(members), { status: 200 });
    }

    return new Response(JSON.stringify(members), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all members", { status: 500 });
  }
};
