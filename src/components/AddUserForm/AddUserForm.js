import { Box, ThemeProvider, Alert } from '@mui/material';
import { AddButton, Title, Wrapper, theme } from './addUserForm.styled';
import IsSuccess from 'components/IsSuccess';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import FileInput from './FileInput';
import { useForm } from 'components/hooks/useForm';

const AddUserForm = ({ setUsers }) => {
  const { isSuccess, isLoading, formik, data, isError, error } =
    useForm(setUsers);

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
                    margin={'45px'}
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
                    Sign up
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
