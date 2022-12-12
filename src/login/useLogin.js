import React, { useCallback, useState } from "react";
import axios from 'axios';
export function useLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = useCallback(() => {
    axios
      .post("/login", {
        userName: userName,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userName, password]);

  return {
    userName,
    setUserName,
    setPassword,
    password,
    onSubmit,
  };
}
