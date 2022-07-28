import AddUserForm from 'components/AddUserForm/AddUserForm';
import { Container } from 'components/Container';
import { Section } from './Registration.styled';

const Registration = ({ setUsers }) => {
  return (
    <Section>
      <Container id="sign">
        <AddUserForm setUsers={setUsers} />
      </Container>
    </Section>
  );
};

export default Registration;
