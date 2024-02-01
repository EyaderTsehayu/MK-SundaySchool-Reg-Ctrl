import { Typography } from "@mui/material";
import MainCard from "@/components/cards/MainCard";
import Breadcrumb from "@/components/cards/Breadcrumb";
import RegistrationStepper from "@/components/forms/registration/RegisterationForm";
const page = () => {
  return (
    <div>
      <Breadcrumb path={"Register"} brtitle={"Member's Registration"} />
      <MainCard title="Registration Form">
        <RegistrationStepper />
      </MainCard>
    </div>
  );
};

export default page;
