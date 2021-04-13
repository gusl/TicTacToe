import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

// ToDo: support account creation
export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
  };

  const create = e => {
    e.preventDefault();
    Accounts.createUser(username, password);
  }

  return (
    <form onSubmit={submit} className="login-form">
      <label htmlFor="username">Username</label>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={e => setUsername(e.target.value)}
      />
      <br></br>
      <label htmlFor="password">Password</label>

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Log In</button>
      <button type="create">Create new account</button>
    </form>
  );
};