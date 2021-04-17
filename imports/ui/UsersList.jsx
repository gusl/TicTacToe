import { Meteor } from "meteor/meteor";
import React, { useState, useEffect } from "react";
import { Accounts } from "meteor/accounts-base";

// ToDo: support account creation
export const UsersList = () => { // <-- functional component
  const [userList, setUsersList] = useState([]); //userList is now accessible anywhere
  useEffect(() => { userlist() }, []); // a.k.a. 'onLoad': refresh every time the page is rendered, or any of the
                           // variables in [].
  const userlist = (e) => { // Meteor method: => ()
    setUsersList(Meteor.call("users.list"));
  };
  function ArrayListItems({elements}) { // Type: () => React/HTML
    return elements.map((element) => <li key={element}>{element}</li>);
  }
  const animals = ['dog', 'cat', 'mouse'];
  return (
  <div><h2>Users List</h2> // Print a list of all users
  <ArrayListItems elements={animals}/></div>

  );
};
