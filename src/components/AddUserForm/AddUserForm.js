import {
  TextField,
  Button,
  Box,
  Avatar,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  InputLabel,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Container } from '@mui/system';
import { useGetPositionsQuery } from 'redux/usersApi';
import { useAddUserMutation, useLazyGetTokenQuery } from 'redux/usersApi';
import { axiosToken } from 'redux/axiosBaseQuery';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  position_id: 1,
  photo: '',
};

const phoneValid = /\+]{0,1}380([0-9]{9})$/;

const schema = yup.object({
  name: yup.string().min(2).max(60).required(),
  email: yup.string().min(2).max(60).email().required(),
  phone: yup.string().required().matches(phoneValid, 'Phone is not valid'),
  position_id: yup.string().required(),
  photo: yup.string().required(),
});

const AddUserForm = () => {
  const { data, result } = useGetPositionsQuery();
  const [getToken] = useLazyGetTokenQuery();
  const [addUser, { isLoading }] = useAddUserMutation();

  const postUser = async user => {
    const {
      data: { token },
    } = await getToken();
    console.log(token);
    axiosToken.set(token);
    try {
      addUser(user);
    } catch (error) {}
    axiosToken.unset();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (value, _) => {
      postUser(new FormData(document.getElementById('form')));
    },
  });

  return (
    <div>
      <Container component="span" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography color="#fff" component="h2" variant="h5">
            Sign in
          </Typography>

          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}
            autoComplete="off"
            id="form"
          >
            <TextField
              margin="normal"
              fullWidth
              id="name"
              name="name"
              label="Your name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            {data?.positions && (
              <RadioGroup
                id="position_id"
                value={formik.values.position_id}
                name="position_id"
                onChange={formik.handleChange}
              >
                {data.positions.map(({ id, name }) => {
                  return (
                    <FormControlLabel
                      key={id}
                      value={id}
                      control={<Radio />}
                      label={name}
                    />
                  );
                })}
              </RadioGroup>
            )}
            <InputLabel
              error={formik.touched.photo && Boolean(formik.errors.photo)}
            >
              <Button variant="contained" component="label">
                Upload
                <input
                  hidden
                  max-size={2000}
                  accept=" .jpg, .jpeg"
                  multiple
                  id="photo"
                  name="photo"
                  onChange={e => {
                    if (e.currentTarget.files[0].size > 5000000) {
                      return;
                    }
                    formik.setFieldValue('photo', e.currentTarget.files[0]);
                  }}
                  type="file"
                />
              </Button>
              {formik.values.photo.name}
            </InputLabel>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default AddUserForm;
