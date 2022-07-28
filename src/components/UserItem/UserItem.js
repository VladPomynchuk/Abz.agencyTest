import { Box, Item, Name, Text } from './UserItem.styled';

const UserItem = ({ user: { name, phone, photo, email, position } }) => {
  return (
    <Item>
      <Box>
        <img src={photo} alt="qwe" />
      </Box>
      <Name title={name}>{name}</Name>
      <Text title={position}>{position}</Text>
      <Text title={email}>{email}</Text>
      <Text title={phone}> {phone}</Text>
    </Item>
  );
};

export default UserItem;
