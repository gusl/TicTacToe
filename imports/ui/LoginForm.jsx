import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";

// ToDo: support account creation
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
  }; 
  
  // It's easier to do some things on start-up than as reactive methods
  const create = (e) => {
    e.preventDefault();
  //   const user = [{ // What type is this? Vector?
  //     username: username,
  //     password: password,
  //  }];
   Meteor.call('users.insert', username, password);
};

  return (
    <form onSubmit={submit} className="login-form">
      <label htmlFor="username">Username</label>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <label htmlFor="password">Password</label>

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Log In</button>
      <button onClick={create} type="create">
        Create new account
      </button>
    </form>
  );
};
