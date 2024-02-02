"use client";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Box } from "@mui/material";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const cardContainer = {
  //   mt: "-4px",
  //   ml: "-4px",
  //   mr: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "left",
  color: "#000",
  background: "#fff",
  borderRadius: 2,
  // height: "46px",
  marginBottom: "3px",
  p: "16px",

  //  boxSizing: border-box,
  // display: flex;
  // flex-flow: wrap;
  // margin-top: -8px;
  // margin-left: -8px;
  // justify-content: space-between;
  // align-items: center;
};
const titleCont = {
  display: "flex",
};
const title = {
  //margin: 0px;
  fontSize: "1.25rem",
  color: "#0033cc",
  //color: "rgb(18, 25, 38)",
  fontFamily: "Poppins",
  lineHeight: 1.167,
  // fontWeight: 550,
};

const pathCont = {
  display: "flex",
};
export default function Breadcrumb({ brtitle, path }) {
  return (
    <Box className="mb-6">
      <Box sx={cardContainer}>
        <Box sx={titleCont}>
          <Typography sx={title} className="font-semibold">
            {brtitle}
          </Typography>
        </Box>
        <Box sx={pathCont} class="MuiGrid-root MuiGrid-item css-1wxaqej">
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                href="/dashboard"
                underline="none"
              >
                <HomeIcon
                  sx={{ mr: 0.5, fontSize: "18px", color: "#5e35b1" }}
                />
              </Link>

              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Poppins",
                }}
                color="#0033cc"
              >
                {path}
              </Typography>
            </Breadcrumbs>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
