import SubCard from "@/components/cards/SubCard";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { format, parse } from "date-fns";

const ProfileHeader = ({ initialValues }) => {
  //console.log("inital values inside the profile header", initialValues);
  // Parse the date string into a JavaScript Date object
  const startDate = parse(
    initialValues.dateOfJoining,
    "yyyy-MM-dd",
    new Date()
  );
  // Format the date
  const formattedDate = format(startDate, "MMMM yyyy");
  const imageurl = initialValues.profilePicture;
  return (
    <SubCard>
      <div className=" flex items-center justify-center gap-16">
        <div className="h-40 w-40 items-start">
          <Image
            //src={"/images/eyader.JPG"}
            // unoptimized
            src={imageurl}
            className="rounded-full"
            width={600}
            height={600}
            alt="User"
          />
        </div>

        <div className="flex flex-col items-baseline gap-2 ">
          <Typography
            variant="h2"
            sx={fullName}
            className="lg:text-3xl text-2xl text-center"
          >
            {initialValues.firstName} {initialValues.middleName}{" "}
            {initialValues.lastName}
          </Typography>{" "}
          <Typography
            variant="h5"
            sx={joinedSince}
            className=" text-slate-500 text-left "
          >
            Member since {formattedDate}
          </Typography>
        </div>
      </div>{" "}
    </SubCard>
  );
};

export default ProfileHeader;
const fullName = {
  //fontSize: "1.75rem",
  fontFamily: "Poppins",
  fontWeight: 600,
  color: "#0033cc",
};
const joinedSince = {
  fontSize: "1rem",
  fontFamily: "Poppins",
  fontWeight: 500,
};
