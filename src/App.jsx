import FriendList from 'components/Friends/Friendlist';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Stat/Statistics';
import TransactionHistory from 'components/Transaction/TransactionHistory';
import '../src/app.css';
import profile from './data/user.json';
import stats from './data/data.json';

function App() {
  return (
    <>
      <Profile
        user={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <Statistics stats={stats} />

      <FriendList />
      <TransactionHistory />
    </>
  );
}

export default App;
