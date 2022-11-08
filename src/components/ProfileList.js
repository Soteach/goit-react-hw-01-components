import Profile from './Profile';

function ProfileList({ profiles }) {
  return (
    <ul>
      {profiles.map(user => (
        <li>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProfileList;
