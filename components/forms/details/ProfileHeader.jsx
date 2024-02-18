import SubCard from "@/components/cards/SubCard";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProfileHeader = () => {
  return (
    <SubCard>
      <div className=" flex items-center justify-center gap-16">
        <div className="h-40 w-40 items-start">
          <Image
            src={"/images/eyader.JPG"}
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
            //className=" text-slate-500 text-left "
          >
            Eyader Tsehayu Bogale
          </Typography>{" "}
          <Typography
            variant="h5"
            sx={joinedSince}
            className=" text-slate-500 text-left "
          >
            Member since January 2009
          </Typography>
        </div>
      </div>{" "}
    </SubCard>
  );
};

export default ProfileHeader;
const fullName = {
  fontSize: "1.75rem",
  fontFamily: "Poppins",
  fontWeight: 600,
  color: "#0033cc",
};
const joinedSince = {
  fontSize: "1rem",
  fontFamily: "Poppins",
  fontWeight: 500,
};
