import { TextField } from '@mui/material';

const TextInput = ({ formik, name, label, margin = '50px' }) => {
  return (
    <TextField
      inputProps={{
        style: {
          padding: '15.5px 14px',
        },
      }}
      sx={{ mb: `${margin}` }}
      fullWidth
      id={name}
      name={name}
      label={label}
      type={name}
      value={formik.values[name]}
      onChange={e => {
        formik.setFieldTouched(name, true);
        formik.setFieldValue(name, e.currentTarget.value);
      }}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  );
};

export default TextInput;
