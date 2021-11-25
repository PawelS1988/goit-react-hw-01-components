import "./App.css";
import Profile from "./zad1/Profile";
import Statistics from "./zad2/Statistics";
import FriendList from "./zad3/FriendList";
import TransactionHistory from "./zad4/TransactionHistory";
import user from "./zad1/user.json";
import data from "./zad2/data.json";
import friends from "./zad3/friends.json";
import transactions from "./zad4/transactions.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </header>
    </div>
  );
}

export default App;
