import UserItem from 'components/UserItem';
import { Section, Title, List, Button } from './UserList.styled';
import { Container } from 'components/Container';
import Loader from 'components/Loader/Loader';
import { useUpdateUsers } from 'hooks/useUpdateUsers';

const UsersList = ({ page, setPage, users, setUsers }) => {
  const { isLoading, isFetching, totalUsers, handleClick } = useUpdateUsers(
    page,
    setPage,
    setUsers
  );

  return (
    <Section>
      <Container>
        <Title id="users">Working with GET request</Title>
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
