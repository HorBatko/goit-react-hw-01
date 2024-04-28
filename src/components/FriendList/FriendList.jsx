import css from "./FriendList.module.css";
import FriendListItem from "./FriendsListItem/FriendListItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.listItem}>

      {friends.map((item) => {
        return (
          <li className={css.friendItem} key={item.id}>
            <FriendListItem  
            avatar={item.avatar}
            status={item.isOnline}
            friendName={item.name}
            />
          </li >
        );
           }
         )
      }

    </ul>
  )
}

export default FriendList;
