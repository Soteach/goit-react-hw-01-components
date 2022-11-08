import ProfileList from './ProfileList';
import user from '../../src/user.json';
import Section from './Section';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section>
        <ProfileList items={user} />
      </Section>
    </div>
  );
};
