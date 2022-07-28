import { useState } from 'react';
import UsersList from 'components/UsersList';
import Registration from 'components/Registration';
import Header from 'components/Header';
import Hero from 'components/Hero';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState(null);
  return (
    <>
      <Header />
      <Hero />
      <UsersList
        page={page}
        setPage={setPage}
        users={users}
        setUsers={setUsers}
      />
      <Registration setPage={setPage} setUsers={setUsers} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
