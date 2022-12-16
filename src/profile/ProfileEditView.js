import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveProfile } from "./profile-reducer";
import "./ProfileView.css";
import { useNavigate } from 'react-router-dom';
import { updateUserProfileThunk } from "../login/login-thunks";


const ProfileEditView = () => {
   const {user} = useSelector((state) => state.user);

  const {
    profilePicture = 'https://i.pinimg.com/236x/2c/67/80/2c678002e587299b3511cec86382daf1.jpg', 	bannerPicture = 'https://wallpapercave.com/wp/wp5788474.jpg',
    name = "Anon",
    nick = "Mysterious fox",
    bio = "This user likes to be mysterious and has a few missing info",
    dob = "someday, somewhere",
    location = "LaLa land",
    joined = "XX/XX",
  } = user;
 
   const [username, setName] = useState(name);
   const [locationInput, setLocation] = useState(location);
   const [websiteInput, setWebsite] = useState(nick);
   const [dateOfBirthInput, setDateOfBirth] = useState(dob);

   const [editBio, setBio] = useState(bio);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const submitEditProfile = () => {
      const currentEdits = {
         name: name,
         location: locationInput,
         dob: dateOfBirthInput,
         bio: editBio,
         nick: websiteInput
      }
      dispatch(updateUserProfileThunk({uid: user._id, updates: currentEdits}));

      navigate('/profile');
   }
    
    return( <>
      <div className={'profileEditHeader'}>           
           <div className={'profileEditLabels'}>
               <Link style={{color: 'black'}} to={'/profile'}><i className="bi bi-x"></i></Link>
               <div>
                     <section><strong>Edit profile</strong></section>
               </div>
            </div>
           <button className="saveButton" onClick={submitEditProfile}>Save</button>
        </div>
        <div>
             
         </div>
        <br/>
        <div className="headerWithImage">
                <img src={bannerPicture} height="230px"/>
                <img className="profileImage" src={profilePicture} />
      </div>
       <br/>
       <div className="form-floating mb-3">
            <input type="text" className="form-control" onChange={(event) => setName(event.target.value)} id="nameInput" placeholder="Name" value={username} />
            <label for="nameInput" className="form-label">Name</label>
         </div> 
         <div className="form-floating mb-3">
             <textarea value={editBio} placeholder="Enter your bio"
               style={{height: '100px'}}
               id="bioInput"
                     className="form-control"
                     onChange={(event) => setBio(event.target.value)}>
            </textarea>
            <label for="bioInput" className="form-label">Bio</label>
         </div> 
         <div className="form-floating  mb-3">
            <input type="text" value={locationInput} onChange={(event) => setLocation(event.target.value)} className="form-control" id="locationInput" placeholder="Location" />
            <label for="locationInput" className="form-label">Location</label>
         </div> 
         
         <div className="form-floating mb-3">
            <input type="text" value={websiteInput} onChange={(event) => setWebsite(event.target.value)} className="form-control" id="websiteInput" placeholder="website" />
            <label for="websiteInput" className="form-label">Nickname</label>
         </div> 
         
         <div className="form-floating mb-3">
           <input type="text" value={dateOfBirthInput} onChange={(event) => setDateOfBirth(event.target.value)} className="form-control" id="locationInput" placeholder="Location" />
            <label for="locationInput" className="form-label">Birth Date</label>
         </div> 
   </>
   )
};

export default ProfileEditView;