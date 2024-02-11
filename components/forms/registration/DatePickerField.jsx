import {
  InputLabel,
  OutlinedInput,
  FormHelperText,
  TextField,
} from "@mui/material";
import { useField } from "formik";

const DatePickerField = ({ label, ...props }) => {
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
  const [field, meta] = useField(props);

  return (
    <div>
      <TextField
        fullWidth
        type="date" // Use type="date" for the date picker
        label={label}
        {...field}
        {...props}
        inputProps={{ sx: borderStyle.fieldset }}
        error={meta.touched && Boolean(meta.error)}
        sx={borderRad}
        InputLabelProps={{
          shrink: true, // Ensures the label is not hidden when a value is selected
        }}
      />
      {meta.touched && meta.error && (
        <FormHelperText sx={borderStyle.inputLabel}>
          {meta.error}
        </FormHelperText>
      )}
    </div>
  );
};

export default DatePickerField;
