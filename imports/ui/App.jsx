import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { MoveCollection } from '/imports/api/MoveCollection';
import { Box } from './Box';

//FRONT END

export const App = () => {
    const moves = useTracker(() => MoveCollection.find({}).fetch()); // JS, using Meteor library
    const increment = () => {
	Meteor.call('moves.updateMove', moves[0].value + 1);
    };

    
    //ToDo: implement onClick elsewhere
    return(
	<div>
	    <h1>Welcome to Meteor!</h1>
	    <ul onClick={() => increment()}>
		{ moves.map((move) => <Box key={ move._id } player={ move.value }/>) }
	    </ul>
	</div>
    )};
