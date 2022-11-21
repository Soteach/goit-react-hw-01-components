import FriendList from './components/Friends/Friendlist';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/Transaction/TransactionHistory';
import '../src/app.css';
import profile from './data/user.json';
import stats from './data/data.json';
import friends from './data/friends.json';

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
      <FriendList friends={friends} />
      <TransactionHistory />
    </>
  );
}

export default App;
