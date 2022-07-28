import { Container } from 'components/Container';
import { Title, Section, Text, Button } from './Hero.styled';
import { Link } from 'components/Header/Header.styled';

const Hero = () => {
  return (
    <Section>
      <Container>
        <Title>Test assignment for front-end developer</Title>
        <Text>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Text>
        <Button>
          <Link href="/">Sing up</Link>
        </Button>
      </Container>
    </Section>
  );
};

export default Hero;
