import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfileView.css";

const ProfileView = () => {
  const {user} = useSelector((state) => state.user);

  const {
    profilePicture = 'https://i.pinimg.com/236x/2c/67/80/2c678002e587299b3511cec86382daf1.jpg', 	
    bannerPicture = 'https://wallpapercave.com/wp/wp5788474.jpg',
    name = "Anon",
    nick = "Mysterious fox",
    bio = "This user likes to be mysterious and has a few missing info",
    dob = "someday, somewhere",
    location = "LaLa land",
    joined = "XX/XX",
  } = user;

  return (
    <>
        <div className="headerWithImage">
          <img src={bannerPicture} height="230px"/>
          <img className="profileImage" src={profilePicture} />
        </div>
        <div className="profile-details">
          <NameAndTag name={name} nick={nick} bio={bio} />
        </div>
        <div className="profile-details">
          <ProfileLineDetail {...user} />
        </div>
    </>
  );
};

const NameAndTag = ({ name, nick, bio }) => {
  return (
    <div>
      <div className="nameTagEdit">
        <div>
          <section>
            <h4 style={{ margin: 0 }}>{name}</h4>
          </section>
          <section>{nick}</section>
          <br />
        </div>
        <Link to={"/profile/edit-view"}>
          <button className="editButton">Edit Profile</button>
        </Link>
      </div>
      <p>{bio}</p>
    </div>
  );
};

const ProfileLineDetail = ({ location, dob, joined }) => {
  return (
    <div className="lineDetailSection">
      <p>
        {" "}
        <i className="bi bi-pin-map-fill"></i>
        {location}
      </p>
      <p>
        {" "}
        <i className="bi bi-balloon"></i>
        {dob}
      </p>
      <p>
        {" "}
        <i className="bi bi-calendar-heart"></i>
        {joined}
      </p>
    </div>
  );
};

export default ProfileView;
