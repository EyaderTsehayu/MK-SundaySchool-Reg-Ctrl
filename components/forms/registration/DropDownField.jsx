import {
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useField } from "formik";

const DropdownField = ({ label, options, ...props }) => {
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
      <FormControl fullWidth variant="outlined">
        <InputLabel
          sx={borderStyle.inputLabel}
          htmlFor={props.id || props.name}
        >
          {label}
        </InputLabel>
        <Select
          label={label}
          {...field}
          {...props}
          input={<OutlinedInput label={label} />}
          error={meta.touched && Boolean(meta.error)}
          sx={borderRad}
        >
          {options.map((option) => (
            <MenuItem
              sx={{ fontSize: "15px", fontFamily: "Poppins" }}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {meta.touched && meta.error && (
          <FormHelperText sx={borderStyle.inputLabel}>
            {meta.error}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export default DropdownField;
