// BACK END

import { Meteor } from 'meteor/meteor';
import { MoveCollection } from '/imports/api/MoveCollection';


const insertMove = move => MoveCollection.insert( { _id: 1, value: move} );
const updateMove = move => MoveCollection.update({}, {$set: { value: move}});


// Meteor.startup(() => {    
//     if (MoveCollection.find().count() === 0) { // triple equal
// 	insertMove(1);
//     }
// });

// API
Meteor.methods({
    'moves.updateMove'(value) {updateMove(value)}
})

const SEED_USERNAME = 'gusl';
const SEED_PASSWORD = 'gusl';

  // Constant Table
  // QUESTIONS: 'question_name', 'statement', 'hint1', 'hint2', 'correct_answer'


Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  // Reset Table
  // MONEY: 'player', 'money'
  new Mongo.Collection('players');
  // At every question, reset table ANSWERS
});

// Make a git commit from here

// Publish everything
// Tutorial: customize publishing, after user management
