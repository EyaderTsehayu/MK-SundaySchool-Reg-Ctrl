"use client";

//import { useSelector } from "react-redux";
import { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import * as Yup from "yup";
import { Formik } from "formik";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import AuthFooter from "@/components/cards/AuthFooter";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const borderStyle = {
    fieldset: {
      borderColor: "rgb(248, 250, 252)",
      borderRadius: "12px",
    },
    input: {
      backgroundColor: "rgb(248, 250, 252)",
      borderRadius: "30px",
    },
    inputLabel: {
      fontSize: "13px",
      fontFamily: "Poppins",
    },
  };
  const theme = useTheme();
  const [checked, setChecked] = useState(true);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className=" bg-debreselam bg-cover bg-blend-hard-light  bg-no-repeat h-screen flex flex-col items-center justify-center">
        <div className="bg-white py-8 px-8 rounded-2xl opacity-85  mx-4">
          <Grid
            item
            sx={{ fontFamily: "Poppins" }}
            className="flex font-bold text-xl text-blue-700 justify-center items-center text-center mb-3"
          >
            <Image
              src={"/images/logo.png"}
              width={100}
              height={100}
              //className="rounded-full"
            />
          </Grid>
          <Grid
            item
            sx={{ fontFamily: "Poppins" }}
            className="flex font-bold text-xl text-blue-700 justify-center items-center text-center"
          >
            Mahiteme Kirstos Sunday School
            <br />
            Registration and Controlling
            <br />
            System
          </Grid>
          <Grid item sx={{ mt: "6px", mb: "22px" }}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

              <Button
                variant="outlined"
                sx={{
                  m: 2,
                  py: 0.5,
                  px: 7,
                  borderColor: `${theme.palette.grey[100]} !important`,
                  fontFamily: "Poppins",
                  borderRadius: "8px",
                  // color: "#000",
                }}
                style={{ color: "#6420AA" }}
                className="font-semibold  text-lg"
                disableRipple
                disabled
              >
                Login
              </Button>

              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            </Box>
          </Grid>
          <Formik
            initialValues={{
              memberId: "",
              password: "",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              memberId: Yup.string().required("Member's id  is required"),
              password: Yup.string()
                .min(8)
                .max(20)
                .required("Password is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              router.push("/dashboard");
              setStatus({ success: true });
              setSubmitting(false);
              toast.success("Login successfully");
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit} className=" gap-4">
                <FormControl
                  fullWidth
                  error={Boolean(touched.memberId && errors.memberId)}
                  sx={{ mb: "16px" }}
                >
                  <TextField
                    type="text"
                    value={values.memberId}
                    name="memberId"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Member's Id"
                    sx={{ fontFamily: "Poppins" }}
                    inputProps={{}}
                  />
                  {touched.memberId && errors.memberId && (
                    <FormHelperText error sx={borderStyle.inputLabel}>
                      {errors.memberId}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  sx={{ mb: "26px" }}
                >
                  {" "}
                  <InputLabel htmlFor="Password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    sx={{ fontFamily: "Poppins" }}
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error sx={borderStyle.inputLabel}>
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <div className="flex items-center">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={(event) => setChecked(event.target.checked)}
                          name="checked"
                          color="secondary"
                          sx={{ fontFamily: "Poppins" }}
                        />
                      }
                    />

                    <Typography
                      variant="subtitle1"
                      color="secondary"
                      sx={{
                        cursor: "pointer",
                        fontFamily: "Poppins",
                      }}
                      className="text-base font-normal"
                    >
                      Remember me
                    </Typography>
                  </div>

                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{
                      cursor: "pointer",
                      fontFamily: "Poppins",
                    }}
                    className="text-base"
                  >
                    Forgot Password?
                  </Typography>
                </Stack>
                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText sx={borderStyle.inputLabel} error>
                      {errors.submit}
                    </FormHelperText>
                  </Box>
                )}

                <Box sx={{ mt: 2 }}>
                  <Button
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    className="bg-blue-700 hover:bg-blue-800"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Sign in
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </div>
        <Grid className="absolute bottom-1 w-full px-8" xs={12}>
          <AuthFooter />
        </Grid>
      </div>
    </>
  );
};

export default Login;
