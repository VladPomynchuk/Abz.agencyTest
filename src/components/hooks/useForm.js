import { useFormik } from 'formik';
import { useGetPositionsQuery } from 'redux/usersApi';
import { useAddUserMutation, useLazyGetTokenQuery } from 'redux/usersApi';
import { axiosToken } from 'redux/axiosBaseQuery';
import schema from 'components/AddUserForm/validationSchema';
import toast from 'react-hot-toast';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  position_id: '',
  photo: '',
};

export const useForm = (setUsers, setPage) => {
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
      if (isSuccess) {
        setUsers(null);
        setPage(1);
      }
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

  return { isSuccess, isLoading, formik, data, isError, error };
};
