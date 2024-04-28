import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import userData from "./userData.json";

import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./friends.json";

const App = () => {
  return (
    <div className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <FriendList friends={friends} />


    </div>



  );
  
}

export default App;
