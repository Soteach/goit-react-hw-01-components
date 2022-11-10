import FriendList from 'components/Friends/Friendlist';
import Profile from 'components/Profile/Profile';
import MainStat from 'components/Statistics/Main/MainStat';
import TransactionHistory from 'components/Transaction/TransactionHistory';

function App() {
  return (
    <>
      <Profile />
      <MainStat />
      <FriendList />
      <TransactionHistory />
    </>
  );
}

export default App;
