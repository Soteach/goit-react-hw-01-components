import FriendList from 'components/Friends/Friendlist';
import Profile from 'components/Profile/Profile';
import MainStat from 'components/Statistics/Main/MainStat';
import TransactionHistory from 'components/Transaction/TransactionHistory';
import '../src/app.css';

import profile from './data/user.json';

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
      <MainStat />
      <FriendList />
      <TransactionHistory />
    </>
  );
}

export default App;
