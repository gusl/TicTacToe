import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { MoveCollection } from "/imports/api/MoveCollection";
import { Box } from "./Box";
import { LoginForm } from "./LoginForm";
import { GameForm } from "./GameForm";
import { UsersList } from "./UsersList";

//FRONT END

// print user.username

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const moves = useTracker(() => MoveCollection.find({}).fetch()); // JS, using Meteor library
  // update the box

  const increment = () => {
    Meteor.call("moves.updateMove", moves[0].value + 1);
  };
  const logout = () => Meteor.logout();
  const deleteaccount = () => {
    if (Meteor.isServer) {
      Meteor.users.allow({
        //unlocking 'remove' function (similar to 'sudo')
        remove: function () {
          return true;
        },
      });
    }
    Meteor.users.remove(user._id);
  }; //ToDo: implement onClick elsewhere
  return (
    <div>
      <>
        {user ? (
          <>
            Hello {user.username}!{" "}
            <div className="user" onClick={logout}>
              <font color="blue">
                <u>log out</u>
              </font>
            </div>
            <button className="user" onClick={deleteaccount}>
              <u>Delete account</u>
            </button>
          </>
        ) : (
          <LoginForm />
        )}
      </>
      <h1>Welcome to Meteor!</h1>
      <UsersList />
      <GameForm user={user} />
      <ul onClick={() => increment()}>
        {moves.map((move) => (
          <Box key={move._id} player={move.value} />
        ))}
      </ul>
    </div>
  );
};

// <ul onClick={() => increment()}>

// Mongo: new table, 'user': 'random number'

// Click
// Button "stop timer", which also disables clicks
// Display clicks per second field
