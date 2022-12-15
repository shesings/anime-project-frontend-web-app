import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveProfile } from "./profile-reducer";
import "./ProfileView.css";
import { useNavigate } from 'react-router-dom';

// const test = {
//    firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
//    profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
//    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.
//          Retuits and likes are not endorsements.',
//    website: 'youtube.com/webdevtv',
//    location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
//    followingCount: 340,	followersCount: 223
//  }
 
const ProfileEditView = () => {
   const tuitProfile = useSelector((state) => state.profile);
   const {profileName = 'Sheetal', bio, profilePicture, bannerPicture, location, website, dateOfBirth} = tuitProfile;

   const [name, setName] = useState(profileName);
   const [locationInput, setLocation] = useState(location);
   const [websiteInput, setWebsite] = useState(website);
   const [dateOfBirthInput, setDateOfBirth] = useState(dateOfBirth);

   const [editBio, setBio] = useState(bio);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const submitEditProfile = () => {
      const tuitProfile = {
         profileName: name,
         location: locationInput,
         website: websiteInput,
         dateOfBirth: dateOfBirthInput,
         bio: editBio
      }
      dispatch(saveProfile(tuitProfile));

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
            <input type="text" className="form-control" onChange={(event) => setName(event.target.value)} id="nameInput" placeholder="Name" value={name} />
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
            <label for="websiteInput" className="form-label">Website</label>
         </div> 
         
         <div className="form-floating mb-3">
           <input type="text" value={dateOfBirthInput} onChange={(event) => setDateOfBirth(event.target.value)} className="form-control" id="locationInput" placeholder="Location" />
            <label for="locationInput" className="form-label">Birth Date</label>
         </div> 
   </>
   )
};

export default ProfileEditView;