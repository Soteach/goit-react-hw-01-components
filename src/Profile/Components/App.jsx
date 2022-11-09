import Profile from './Profile';
import user from '../user.json';
import Section from './Section';

export const App = () => {
  return (
    <div>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
    </div>
  );
};
