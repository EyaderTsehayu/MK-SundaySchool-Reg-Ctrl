import { connectToDB } from "@/utils/database";
import Member from "@/models/member";

export const PATCH = async (request) => {
  try {
    await connectToDB();
    const { rowSelectionModel } = await request.json();
    const result = await Member.updateMany(
      { _id: { $in: rowSelectionModel } },
      { $set: { division: "Youth" } }
    );
    // Respond with a success message or any relevant data
    if (!result) {
      return new Response("Unable to enroll", { status: 404 });
    }

    return new Response("Enrolled succesfully", { status: 200 });
  } catch (error) {
    console.error("Error updating data:", error);
    return new Response("Failed to fetch member details", {
      status: 500,
    });
  }
};
