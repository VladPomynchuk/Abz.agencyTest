import { Box, ThemeProvider, Alert } from '@mui/material';
import { useFormik } from 'formik';
import { useGetPositionsQuery } from 'redux/usersApi';
import { useAddUserMutation, useLazyGetTokenQuery } from 'redux/usersApi';
import { axiosToken } from 'redux/axiosBaseQuery';
import { AddButton, Title, Wrapper, theme } from './addUserForm.styled';
import IsSuccess from 'components/IsSuccess';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import FileInput from './FileInput';
import schema from './validationSchema';
import toast from 'react-hot-toast';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  position_id: '',
  photo: '',
};

const AddUserForm = ({ setUsers }) => {
  const { data, isLoading } = useGetPositionsQuery();
  const [getToken] = useLazyGetTokenQuery();
  const [addUser, { isSuccess, error, isError }] = useAddUserMutation();

  const postUser = async user => {
    try {
      const {
        data: { token },
      } = await getToken();

      axiosToken.set(token);

      await addUser(user);
      isSuccess && setUsers(null);
    } catch (error) {
      toast.error('Ups... Something went wrong, try letter');
      console.log(error);
    }

    axiosToken.unset();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validateOnBlur: false,
    validationSchema: schema,
    onSubmit: async () => {
      await postUser(new FormData(document.getElementById('form')));
    },
  });

  return (
    <div>
      {!isSuccess ? (
        <>
          {!isLoading && (
            <ThemeProvider theme={theme}>
              <Title>Working with POST request</Title>
              <Wrapper>
                <Box
                  component="form"
                  onSubmit={formik.handleSubmit}
                  autoComplete="off"
                  id="form"
                  sx={{ fontFamily: 'Nunito' }}
                >
                  <TextInput
                    formik={formik}
                    name={'name'}
                    label={'Your name'}
                  />
                  <TextInput formik={formik} name={'email'} label={'Email'} />
                  <TextInput
                    formik={formik}
                    name={'phone'}
                    label={'Phone'}
                    margin={'23px'}
                  />

                  {data?.positions && (
                    <RadioInput formik={formik} data={data} />
                  )}
                  <FileInput formik={formik} />
                  {isError && (
                    <Alert
                      sx={{ backgroundColor: 'inherit', color: 'black' }}
                      severity="error"
                    >
                      {error.data.message}
                    </Alert>
                  )}
                  <AddButton disabled={!formik.dirty} type="submit">
                    Sign in
                  </AddButton>
                </Box>
              </Wrapper>
            </ThemeProvider>
          )}
        </>
      ) : (
        <IsSuccess />
      )}
    </div>
  );
};

export default AddUserForm;
