import css from "./FriendsListItem.module.css";

const FriendListItem = ({ avatar, status, friendName }) => {
    return (
        <div className={css.ItemIn}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.ItemText}>{friendName}</p>
  <p className={status ? css.isOnline : css.isOffline}>{status ? "Online" : "Offline"}</p>
</div>
    )
}
export default FriendListItem;