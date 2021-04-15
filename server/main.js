// BACK END
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { MoveCollection } from "../imports/api/MoveCollection";
import  '../imports/api/UserMethods.js';

const insertMove = (move, user) =>
  MoveCollection.insert({ userId: user._id, value: move });
const updateMove = (move) => {
  MoveCollection.update({}, { $set: { value: move } });
};
// Meteor.startup(() => {
//     if (MoveCollection.find().count() === 0) { // triple equal
// 	insertMove(1);
//     }
// });

// API
Meteor.methods({
  "moves.updateMove"(value) {
    updateMove(value);
  },
}); 

const SEED_USERNAME = "gusl";
const SEED_PASSWORD = "gusl";

// Constant Table
// QUESTIONS: 'question_name', 'statement', 'hint1', 'hint2', 'correct_answer'

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (!MoveCollection.find().count() === 0) {
    [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
    ].forEach((move) => insertMove(move, user));
  }
  // Reset Table
  // MONEY: 'player', 'money'

  const players = new Mongo.Collection("players");

  // At every question, reset table ANSWERS
});

// Make a git commit from here

// Publish everything
// Tutorial: customize publishing, after user management
