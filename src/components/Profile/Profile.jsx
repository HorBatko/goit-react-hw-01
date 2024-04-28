import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, followers, views, likes }) => {
    return (
        <div className={css.containerProfile}>
            <div className={css.profileLogo}>
                <img
                    className={css.profileLogoImg}
                    src={image}
                    alt="User avatar"
                    width={150}
                    height={150}                    
                />

                <p className={css.profileName}>
                    {name}</p>
                <p className={css.profileTag}>
                    @{tag}</p>
                <p className={css.profileLocation}>
                    {location}</p>
            </div>

            <ul className={css.profileList}>
                <li className={css.profileItem}>
                    <span>Followers</span>
                    <span className={css.profileItemText}>{followers}</span>
                </li>
                <li className={css.profileItem}>
                    <span>Views</span>
                    <span className={css.profileItemText}>{views}</span>
                </li>
                <li className={css.profileItem}>
                    <span>Likes</span>
                    <span className={css.profileItemText}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;

