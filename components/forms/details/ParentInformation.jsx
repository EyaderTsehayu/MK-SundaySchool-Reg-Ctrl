import SubCard from "@/components/cards/SubCard";
import { TextField, Grid } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import { useFormik } from "formik";

const ParentInformation = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("Form values submitted:", values);
      if (onSubmit) {
        onSubmit(values);
      }
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <ProfileHeader initialValues={initialValues} />
      <SubCard>
        {" "}
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="guardianName"
                label="Parent/Guardian Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("guardianName")}
                error={
                  formik.touched.guardianName &&
                  Boolean(formik.errors.guardianName)
                }
                helperText={
                  formik.touched.guardianName && formik.errors.guardianName
                }
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                id="parentPhoneNumber"
                label=" Parent Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("parentPhoneNumber")}
                error={
                  formik.touched.parentPhoneNumber &&
                  Boolean(formik.errors.parentPhoneNumber)
                }
                helperText={
                  formik.touched.parentPhoneNumber &&
                  formik.errors.parentPhoneNumber
                }
              />
            </Grid>
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

export default ParentInformation;
