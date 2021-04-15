import { check } from "meteor/check";

Meteor.methods({
    "users.insert" (users) {
      check(users, [
        {
          username: String,
          password: String
        },
      ]);
  
      users.forEach(({username, password}) => {
        const userExists = Accounts.findUserByUsername(username);
        if (!userExists) {
          const userId = Accounts.createUser({username, password});
        }
      });
    },
  });