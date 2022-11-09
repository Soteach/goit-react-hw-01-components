import Profile from './Profile';

function ProfileList({ profiles }) {
  return (
    <ul>
      {profiles.map(profile => (
        <li>
          {
            <Profile
              username={profile.username}
              tag={profile.tag}
              location={profile.location}
              avatar={profile.avatar}
              stats={profile.stats}
            />
          }
        </li>
      ))}
    </ul>
  );
}

export default ProfileList;
