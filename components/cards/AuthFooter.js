// material-ui
import { Link, Typography, Stack } from "@mui/material";

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography
      variant="subtitle2"
      //component={Link}
      color={"#fff"}
      sx={{ fontFamily: "Poppins", cursor: "pointer" }}
      className="sm:text-sm text-xs"

      // href="https://codedthemes.com"
    >
      &copy; Mahiteme Kirstos Sunday School
    </Typography>
    <Typography
      variant="subtitle2"
      //component={Link}
      color={"#fff"}
      sx={{ fontFamily: "Poppins", cursor: "pointer" }}
      className="sm:text-sm text-xs"
      // href="https://berrydashboard.io"
      // target="_blank"
    >
      Developed By - Eyader Tsehayu
    </Typography>
  </Stack>
);

export default AuthFooter;
