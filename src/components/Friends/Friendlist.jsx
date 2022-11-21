import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendL,
  Header,
  Chip,
  Avatar,
  Name,
} from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <>
      <FriendL>
        <Header>Friendlist</Header>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendItem key={id}>
            <Chip status={isOnline ? 'isOnline' : ''}></Chip>
            {/* className={friend.isOnline ? css.itemOnline : css.itemOffline} */}
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </FriendItem>
        ))}
      </FriendL>
    </>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
