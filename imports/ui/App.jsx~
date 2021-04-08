import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { MoveCollection } from '/imports/api/MoveCollection';
import { Box } from './Box';

//let myArray = createState()
//let value = myArray[0]
//let setFunction = myArray[1]

// let [value, setFunction] = createState()

// Template.userDisplay.helpers({
//   onClick() {
//       () => setMove(1)
//   }
// });

export const App = () => {
    //    const moves = useTracker(() => MoveCollection.find({}).fetch()); // JS, using Meteor library
    const [move, setMove] = useState(1); // React
    const increment = () => {
	setMove(move + 1);
    };
    //ToDo: implement onClick elsewhere
    return(
	<div>
	    <h1>Welcome to Meteor!</h1>
	    <ul onClick={() => increment()}> 
		<Box player={move} />
	    </ul>
	</div>
    )};


//	    <ul onClick={() => setMove('x')}>
