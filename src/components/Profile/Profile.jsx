import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Name,
  Tag,
  Avatar,
  Location,
  Stats,
  StatsItem,
  Quantity,
  Value,
} from './Profile.styled';

function Profile({ user, tag, location, avatar, stats }) {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} />
        <Name>{user}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Quantity>Followers</Quantity>
          {/* {Object.keys(stats)[0]} */}
          <Value>{stats.followers}</Value>
        </StatsItem>
        <StatsItem>
          <Quantity>Views</Quantity>
          <Value>{stats.views}</Value>
        </StatsItem>
        <StatsItem>
          <Quantity>Likes</Quantity>
          <Value>{stats.likes}</Value>
        </StatsItem>
      </Stats>
    </Card>
  );
}

export default Profile;

Profile.propTypes = {
  user: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
