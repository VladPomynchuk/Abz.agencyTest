import {
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@mui/material';

const RadioInput = ({ formik, data }) => {
  return (
    <RadioGroup
      id="position_id"
      value={formik.values.position_id}
      name="position_id"
      onChange={formik.handleChange}
      sx={{ mb: '37px' }}
    >
      <FormLabel sx={{ color: 'black', marginBottom: '11px' }} id="position_id">
        Select your position
      </FormLabel>
      {data.positions.map(({ id, name }) => {
        return (
          <FormControlLabel
            sx={{ height: '26px', marginBottom: '7px' }}
            key={id}
            value={id}
            control={<Radio />}
            label={name}
          />
        );
      })}
      <FormHelperText
        error={formik.touched.position_id && Boolean(formik.errors.position_id)}
      >
        {formik.touched.position_id && formik.errors.position_id}
      </FormHelperText>
    </RadioGroup>
  );
};

export default RadioInput;
