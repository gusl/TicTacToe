// BACK END

import { Meteor } from 'meteor/meteor';
import { MoveCollection } from '/imports/api/MoveCollection';


const insertMove = move => MoveCollection.insert( { _id: 1, value: move} );
const updateMove = move => MoveCollection.update({}, {$set: { value: move}});


Meteor.startup(() => {
    if (MoveCollection.find().count() === 0) { // triple equal
	insertMove(1);
    }
});

// API
Meteor.methods({
    'moves.updateMove'(value) {updateMove(value)}
})


// Make a git commit from here
