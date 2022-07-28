import { Box, Item, Name, Text } from './UserItem.styled';

const UserItem = ({ user: { name, phone, photo, email, position } }) => {
  return (
    <Item>
      <Box>
        <img src={photo} alt="qwe" />
      </Box>
      <Name>{name}</Name>
      <Text>{position}</Text>
      <Text>{email}</Text>
      <Text>{phone}</Text>
    </Item>
  );
};

export default UserItem;
