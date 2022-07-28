import { useEffect } from 'react';
import { useState } from 'react';
import { useGetUsersQuery, useLazyGetUsersQuery } from 'redux/usersApi';
import UserItem from 'components/UserItem';
import { Section, Title, List, Button } from './UserList.styled';
import { Container } from 'components/Container';
import Loader from 'components/Loader/Loader';

const UsersList = ({ page, setPage, users, setUsers }) => {
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

  return (
    <Section>
      <Container>
        <Title>Working with GET request</Title>
        {isLoading && <Loader />}
        {users && (
          <List>
            {users.map(user => (
              <UserItem key={user.id} user={user} />
            ))}
          </List>
        )}
        {isFetching ? (
          <Loader />
        ) : (
          <>
            {users && totalUsers > users.length && (
              <Button onClick={handleClick}>Show more</Button>
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default UsersList;
