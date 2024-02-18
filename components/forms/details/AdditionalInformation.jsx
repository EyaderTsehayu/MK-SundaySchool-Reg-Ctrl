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

const AdditionalInformation = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("Form values submitted:", values);
      if (onSubmit) {
        onSubmit(values);
      }
    },
  });

  const departments = ["Hymn", "Education", "Arts And Literature"];
  const divisions = ["Youth", "John The Baptist", "Kid Samuel"];
  const statuses = ["Active", "Stalled", "Lost"];

  const workConditions = [
    "student",
    "Civil Servant",
    "Private Employee",
    "Business Owner",
    "Ngo Employee",
  ];

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
      <ProfileHeader />
      <SubCard>
        {" "}
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid sx={{ mt: 2 }} item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel sx={borderStyle.inputLabel} id="department">
                  Department
                </InputLabel>
                <Select
                  labelId="department"
                  id="department"
                  margin="normal"
                  {...formik.getFieldProps("department")}
                  input={<OutlinedInput label="department" />}
                  sx={borderRad}
                >
                  {departments.map((department) => (
                    <MenuItem key={department} value={department}>
                      {department}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>{" "}
            <Grid sx={{ mt: 2 }} item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel sx={borderStyle.inputLabel} id="division">
                  Division
                </InputLabel>
                <Select
                  labelId="division"
                  id="division"
                  margin="normal"
                  {...formik.getFieldProps("division")}
                  input={<OutlinedInput label="division" />}
                  sx={borderRad}
                >
                  {divisions.map((division) => (
                    <MenuItem key={division} value={division}>
                      {division}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>{" "}
            <Grid sx={{ mt: 2 }} item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel sx={borderStyle.inputLabel} id="status">
                  Status
                </InputLabel>
                <Select
                  labelId="status"
                  id="status"
                  margin="normal"
                  {...formik.getFieldProps("status")}
                  input={<OutlinedInput label="status" />}
                  sx={borderRad}
                >
                  {statuses.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("phoneNumber")}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="address"
                label="Current Address"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("address")}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="kebele"
                label="Kebele"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("kebele")}
                error={formik.touched.kebele && Boolean(formik.errors.kebele)}
                helperText={formik.touched.kebele && formik.errors.kebele}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="houseNumber"
                label="House Number"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("houseNumber")}
                error={
                  formik.touched.houseNumber &&
                  Boolean(formik.errors.houseNumber)
                }
                helperText={
                  formik.touched.houseNumber && formik.errors.houseNumber
                }
              />
            </Grid>{" "}
            <Grid sx={{ mt: 2 }} item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel sx={borderStyle.inputLabel} id="workCondition">
                  Work Condition
                </InputLabel>
                <Select
                  labelId="workCondition"
                  id="workCondition"
                  margin="normal"
                  {...formik.getFieldProps("workCondition")}
                  input={<OutlinedInput label="workCondition" />}
                  sx={borderRad}
                >
                  {workConditions.map((workCondition) => (
                    <MenuItem key={workCondition} value={workCondition}>
                      {workCondition}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="officeName"
                label="Office Name / School Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("officeName")}
                error={
                  formik.touched.officeName && Boolean(formik.errors.officeName)
                }
                helperText={
                  formik.touched.officeName && formik.errors.officeName
                }
              />
            </Grid>{" "}
          </Grid>

          <button type="submit">Save</button>
        </form>
      </SubCard>
    </div>
  );
};

export default AdditionalInformation;
