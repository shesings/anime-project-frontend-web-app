import { createSlice } from "@reduxjs/toolkit";

const mockData = {
    firstName: 'Sheetal', lastName: 'Singh', 
    profileName: 'Sheetal',
    handle: '@shesings',
    tweetCount: 1292,
    profilePicture: 'https://i.pinimg.com/236x/2c/67/80/2c678002e587299b3511cec86382daf1.jpg', 	bannerPicture: 'https://wallpapercave.com/wp/wp5788474.jpg',
    bio: `Student, Software Engineer by day, gamer by night.
          Ratings and favorites are not endorsements.`,
    website: 'youtube.com/webdevtv',
    location: 'Chicago, IL',	dateOfBirth: '7/7/2035',	dateJoined: '4/2009',
    followingCount: 340,	followersCount: 223
  }

const profileSlice = createSlice({
    name: 'tuits',
    initialState: mockData,
    reducers: {
        saveProfile: (state, action) => {
            console.log(action.payload);
            return {...state, ...action.payload}
        }
    }
});

export const {saveProfile} = profileSlice.actions;

export default profileSlice.reducer;