import { Box, Item, Name, Text } from './UserItem.styled';
import userPhoto from 'images/photo-cover.svg';
import { CustomTooltip } from 'components/Tooltip/Tooltip';

const UserItem = ({ user: { name, phone, photo, email, position } }) => {
  return (
    <Item>
      <Box>
        <img
          src={photo}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = userPhoto;
          }}
          alt={name}
        />
      </Box>
      <CustomTooltip title={name}>
        <Name>{name}</Name>
      </CustomTooltip>
      <CustomTooltip title={position}>
        <Text>{position}</Text>
      </CustomTooltip>
      <CustomTooltip title={email}>
        <Text>{email}</Text>
      </CustomTooltip>
      <CustomTooltip title={phone}>
        <Text> {phone}</Text>
      </CustomTooltip>
    </Item>
  );
};

export default UserItem;
