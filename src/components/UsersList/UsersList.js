import { useEffect } from 'react';
import { useState } from 'react';
import { useLazyGetUsersQuery } from 'redux/usersApi';
import UserItem from 'components/UserItem';
import { Section, Title, List, Button } from './UserList.styled';
import { Container } from 'components/Container';

const UsersList = ({ users, setUsers, totalUsers }) => {
  const [page, setPage] = useState(1);
  const [trigger, result] = useLazyGetUsersQuery();

  useEffect(() => {
    async function updateUsers() {
      const {
        data: { users },
      } = await trigger(page);
      setUsers(prevState => [...prevState, ...users]);
    }
    if (page > 1) {
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
        <List>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </List>
        {totalUsers > users.length && (
          <Button onClick={handleClick}>Show more</Button>
        )}
      </Container>
    </Section>
  );
};

export default UsersList;
