import { useEffect } from 'react';
import { useState } from 'react';
import { useGetUsersQuery, useLazyGetUsersQuery } from 'redux/usersApi';

export const useUpdateUsers = (page, setPage, setUsers) => {
  const { data, isLoading } = useGetUsersQuery();
  const [trigger, { isFetching }] = useLazyGetUsersQuery();
  const [totalUsers, setTotalUsers] = useState(null);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
      setTotalUsers(data.total_users);
    }
  }, [data, setUsers]);

  useEffect(() => {
    async function updateUsers() {
      const {
        data: { users },
      } = await trigger(page);
      setUsers(prevState => [...prevState, ...users]);
    }

    if (page !== 1) {
      updateUsers();
    }
  }, [page, setUsers, trigger]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return { isLoading, isFetching, totalUsers, handleClick };
};
