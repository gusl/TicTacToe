import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";

// ToDo: support account creation
export const GameForm = ({ user }) => {
  const [number, setNumber] = useState("");

  // It's easier to do some things on start-up than as reactive methods
  const drawnumber = (e) => {
    callBack = (result, error) => {
      console.log(result);
      setNumber(result);
    };
    Meteor.call("users.drawnumber", callBack);
  };

  return (
    <form onSubmit={drawnumber} className="game-form">
      <label htmlFor="username">Username</label>
      <button type="submit">Get a number</button>
      <div>{number}</div>
    </form>
  );
};
