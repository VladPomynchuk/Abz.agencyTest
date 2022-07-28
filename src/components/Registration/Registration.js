import AddUserForm from 'components/AddUserForm/AddUserForm';
import { Container } from 'components/Container';
import { Section } from './Registration.styled';

const Registration = ({ setUsers, setPage }) => {
  return (
    <Section>
      <Container id="sign">
        <AddUserForm setUsers={setUsers} setPage={setPage} />
      </Container>
    </Section>
  );
};

export default Registration;
