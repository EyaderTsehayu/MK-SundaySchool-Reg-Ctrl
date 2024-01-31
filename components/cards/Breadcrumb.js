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
  color: "rgb(18, 25, 38)",
  fontFamily: "Poppins",
  lineHeight: 1.167,
  // fontWeight: 550,
};

const pathCont = {
  display: "flex",
};
export default function Breadcrumb() {
  return (
    <Box className="mb-6">
      <Box sx={cardContainer}>
        <Box sx={titleCont}>
          <Typography sx={title} className="font-semibold">
            Forms Validation
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
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                Breadcrumb
              </Typography>
            </Breadcrumbs>
          </div>
          {/* <nav
              class="MuiTypography-root MuiTypography-body1 MuiBreadcrumbs-root css-1rrdvbm"
              aria-label="breadcrumb"
            >
              <ol class="MuiBreadcrumbs-ol css-nhb8h9">
                <li class="MuiBreadcrumbs-li">
                  <a
                    class="MuiTypography-root MuiTypography-subtitle1 css-kxpuwu"
                    href="/"
                  >
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="HomeIcon"
                      style="margin-right: 0px; margin-top: -2px; width: 1rem; height: 1rem; color: rgb(103, 58, 183);"
                    >
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                    </svg>
                  </a>
                </li>
                <li
                  aria-hidden="true"
                  class="MuiBreadcrumbs-separator css-3mf706"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-chevron-right"
                  >
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </li>
                <li class="MuiBreadcrumbs-li">
                  <h6 class="MuiTypography-root MuiTypography-subtitle1 css-m8bd4q">
                    Forms Validation
                  </h6>
                </li>
              </ol>
            </nav> */}
        </Box>
      </Box>
    </Box>
  );
}
