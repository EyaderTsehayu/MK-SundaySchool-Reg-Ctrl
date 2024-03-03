import SubCard from "@/components/cards/SubCard";
import { TextField, Grid } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import { useFormik } from "formik";
import {
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

const MemberProfile = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("Form values submitted:", values);
      if (onSubmit) {
        onSubmit(values);
      }
    },
  });
  const names = ["Male", "Female"];

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
      fontSize: "15px",
      fontFamily: "Poppins",
    },
  };

  const borderRad = {
    "& fieldset": {
      borderRadius: "8px",
    },
  };

  return (
    <div className="flex flex-col gap-2">
      {" "}
      <ProfileHeader initialValues={initialValues} />
      <SubCard>
        {" "}
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("firstName")}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="middleName"
                label="Middle Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("middleName")}
                error={
                  formik.touched.middleName && Boolean(formik.errors.middleName)
                }
                helperText={
                  formik.touched.middleName && formik.errors.middleName
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("lastName")}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="memberId"
                label="Memeber Id"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("memberId")}
                error={
                  formik.touched.memberId && Boolean(formik.errors.memberId)
                }
                helperText={formik.touched.memberId && formik.errors.memberId}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="profilePicture"
                label="Profile Picture"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("profilePicture")}
                error={
                  formik.touched.profilePic && Boolean(formik.errors.profilePic)
                }
                helperText={
                  formik.touched.profilePic && formik.errors.profilePic
                }
              />
            </Grid>
            <Grid sx={{ mt: 2 }} item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel sx={borderStyle.inputLabel} id="gender">
                  Gender
                </InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  margin="normal"
                  {...formik.getFieldProps("gender")}
                  input={<OutlinedInput label="Gender" />}
                  sx={borderRad}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="dateOfBirth"
                type="date"
                label="Date of Birth"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("dateOfBirth")}
                error={
                  formik.touched.dateOfBirth &&
                  Boolean(formik.errors.dateOfBirth)
                }
                helperText={
                  formik.touched.dateOfBirth && formik.errors.dateOfBirth
                }
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="placeOfBirth"
                label="Place Of Birth"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("placeOfBirth")}
                error={
                  formik.touched.placeOfBirth &&
                  Boolean(formik.errors.placeOfBirth)
                }
                helperText={
                  formik.touched.placeOfBirth && formik.errors.placeOfBirth
                }
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="town"
                label="Town"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("town")}
                error={formik.touched.town && Boolean(formik.errors.town)}
                helperText={formik.touched.town && formik.errors.town}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="holyName"
                label="Holy Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("holyName")}
                error={
                  formik.touched.holyName && Boolean(formik.errors.holyName)
                }
                helperText={formik.touched.holyName && formik.errors.holyName}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="holyFatherName"
                label="Holy Father Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("holyFatherName")}
                error={
                  formik.touched.holyFatherName &&
                  Boolean(formik.errors.holyFatherName)
                }
                helperText={
                  formik.touched.holyFatherName && formik.errors.holyFatherName
                }
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="dateOfJoining"
                type="date"
                label="Date Of Joining"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("dateOfJoining")}
                error={
                  formik.touched.dateOfJoining &&
                  Boolean(formik.errors.dateOfJoining)
                }
                helperText={
                  formik.touched.dateOfJoining && formik.errors.dateOfJoining
                }
              />
            </Grid>{" "}
          </Grid>

          <button
            className="rounded-lg mt-6 bg-blue-600 items-end py-2 px-6 font-medium text-white  hover:bg-opacity-95"
            sx={{ fontFamily: "Popins" }}
            type="submit"
          >
            Save
          </button>
        </form>
      </SubCard>
    </div>
  );
};

export default MemberProfile;
