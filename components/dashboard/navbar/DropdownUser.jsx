import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useTheme } from "@mui/material/styles";
const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const theme = useTheme();
  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <Chip
          sx={{
            height: "48px",
            alignItems: "center",
            borderRadius: "27px",
            transition: "all .2s ease-in-out",
            backgroundColor: "rgb(238, 242, 246)",

            "& .MuiChip-label": {
              lineHeight: 0,
            },
          }}
          icon={
            <Avatar
              src={"../../../public/images/noavatar.png"}
              sx={{
                margin: "8px 0 8px 8px !important",
                cursor: "pointer",
                width: 34,
                height: 34,
              }}
              color="inherit"
            />
          }
          label={<SettingsIcon sx={{ color: "#5e35b1" }} />}
          color="primary"
        />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        sx={{ borderRadius: "28px" }}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-3xl  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <Paper>
          <Box sx={{ pl: 2, pr: 2, pt: 2, pb: 1 }}>
            <Stack>
              <Stack direction="row" alignItems="center">
                <Typography
                  component="span"
                  variant="h2"
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 550,
                    fontSize: "18px",
                    color: "rgb(54, 65, 82)",

                    pb: 0.5,
                  }}
                >
                  Daniel Gebretsadik
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "#5e35b1",
                }}
                variant="subtitle2"
              >
                Control Department Head
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ pl: 2, pr: 2 }}>
            <Divider />
            <List
              component="nav"
              sx={{
                width: "100%",
                maxWidth: 350,
                minWidth: 300,
                backgroundColor: theme.palette.background.paper,
                borderRadius: "10px",
                [theme.breakpoints.down("md")]: {
                  minWidth: "100%",
                },
                "& .MuiListItemButton-root": {
                  // mt: 0.5,
                },
              }}
            >
              <ListItemButton
                sx={{ borderRadius: "8px" }}
                //  selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0, "#")}
              >
                <ListItemIcon>
                  <SettingsOutlinedIcon
                    sx={{ fontSize: "1.5rem", stroke: 1.5 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "15px",
                        color: "#5e35b1",
                      }}
                    >
                      Account Settings
                    </Typography>
                  }
                />
              </ListItemButton>

              <ListItemButton
                sx={{ borderRadius: "8px" }}
                //  selected={selectedIndex === 4}
                //  onClick={handleLogout}
              >
                <ListItemIcon>
                  <ExitToAppIcon sx={{ fontSize: "1.5rem", stroke: 1.5 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "15px",
                        color: "#5e35b1",
                      }}
                      variant="body2"
                    >
                      Logout
                    </Typography>
                  }
                />
              </ListItemButton>
            </List>
          </Box>
        </Paper>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
