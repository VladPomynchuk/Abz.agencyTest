import { Title } from './IsSuccess.styled';
import successImage from 'images/success-image.svg';

const IsSuccess = () => {
  return (
    <>
      <Title>User successfully registered</Title>
      <img
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
        src={successImage}
        alt="Success"
      />
      ;
    </>
  );
};

export default IsSuccess;
