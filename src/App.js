import { useState } from 'react';
import UsersList from 'components/UsersList';
import { useGetUsersQuery } from 'redux/usersApi';
import { useEffect } from 'react';
import Registration from 'components/Registration';
import Header from 'components/Header';
import Hero from 'components/Hero';

export const App = () => {
  const { data } = useGetUsersQuery();
  const [users, setUsers] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    if (data && !users) {
      setUsers(data.users);
      setTotalUsers(data.total_users);
    }
  }, [data, users]);

  return (
    <>
      <Header />
      <Hero />
      {users && (
        <UsersList users={users} setUsers={setUsers} totalUsers={totalUsers} />
      )}
      <Registration />
    </>
  );
};
