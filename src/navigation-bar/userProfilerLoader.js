import React, { useEffect } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { findUserByIdThunk } from "../login/login-thunks";

const UserProfileLoad = () => {
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem('currentUser');

  useEffect(() => {
    console.log({currentUser});
    if (currentUser)  {
        const currUser = JSON.parse(currentUser);
        if (currUser.authenticated) {
          dispatch(findUserByIdThunk(currUser._id));
        }
    }
  }, [currentUser])

  return (<></>);
};

export default UserProfileLoad;
