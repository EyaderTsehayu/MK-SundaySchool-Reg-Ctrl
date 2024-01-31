import { Typography } from "@mui/material";
import MainCard from "@/components/cards/MainCard";
import Breadcrumb from "@/components/cards/Breadcrumb";
const page = () => {
  return (
    <div>
      <Breadcrumb />
      <MainCard title="Members Registration">
        <Typography>registration</Typography>
        <Typography>registration</Typography>
        <Typography>registration</Typography>
        <Typography>registration</Typography>
        <Typography>registration</Typography>
      </MainCard>
    </div>
  );
};

export default page;
