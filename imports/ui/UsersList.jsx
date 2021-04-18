import { Meteor } from "meteor/meteor";
import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";

// A hook for accounts/users https://www.javatpoint.com/react-hooks
const useUsers = () =>
  useTracker(() => {
    const users = Meteor.users;
    return {
      users,
    };
  }, []);

// ToDo: support account creation
export const UsersList = () => {
  // <-- functional component
  const users = useUsers();

  const [usersList, setUsersList] = useState([]); //userList is now accessible anywhere
  useEffect(() => {
    transformUsers();
  }, []); // a.k.a. 'onLoad': refresh every time the page is rendered, or any of the
  // variables in [].

  // Transforms the ugly JSON object to a usernames' array.
  const transformUsers = (e) => {
    const usersArray = users.users._collection._docs._map;
    let elements = [];
    Object.keys(usersArray).forEach((key) => {
      elements.push(usersArray[key].username);
    });
    console.log(elements);

    setUsersList(elements);
  };

  // Type: () => React/HTML
  function ArrayListItems({ elements }) {
    return elements.map((element) => <li key={element}>{element}</li>);
  }
  // const animals = ["dog", "cat", "mouse"];

  return (
    <div>
      <h2>Users List</h2> // Print a list of all users
      <button onClick={transformUsers}>Display users</button>
      <ArrayListItems elements={usersList} />
    </div>
  );
};
