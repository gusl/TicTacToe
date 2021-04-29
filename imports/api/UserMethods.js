import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "users.insert"(username, password) {
    //Does this register a function? The place that uses it passes a single 'user'
    //  not users.  Is type conversion happening?
    // What does this do? Is it mapping the function to each row in 'users'?
    // For every user, if it doesn't exist, create it.
    const userExists = Accounts.findUserByUsername(username);
    if (!userExists) {
      const userId = Accounts.createUser({ username, password });
      Meteor.call("numbers.insert");
    }
  },
  // if you remove "autopublish" package you need to go through the backend
  // because then all of other user details aren't accessible to all users
  "users.getAll"() {
    const users = Meteor.users;
    console.log(users);
  },
  "users.drawnumber"() {
    const id = this.userId;
    const number = Math.random();
    console.log(number);
    Meteor.users.update({ _id: id }, { $set: { number: number } });
    return number;
  },
});
