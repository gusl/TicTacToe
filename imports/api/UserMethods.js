import { check } from "meteor/check";
import { Meteor } from 'meteor/meteor'

Meteor.methods({
    "users.insert" (username, password) { //Does this register a function? The place that uses it passes a single 'user'
        //  not users.  Is type conversion happening?
      // What does this do? Is it mapping the function to each row in 'users'?
      // For every user, if it doesn't exist, create it.
      const userExists = Accounts.findUserByUsername(username);
      if (!userExists) {
        const userId = Accounts.createUser({username, password});
      }
    },
    "users.list" () {
      console.log(Meteor.users());
      // return Accounts.find().fetch();
    }
  });