import { VStack } from '@chakra-ui/react';
import React from 'react';
import WorkoutPanel from './WorkoutPanel';
import { workouts } from '../data/Workout';

const Workouts = () => {
	return (
		<VStack alignItems="flex-start">
			{workouts.map((workout) => (
				<WorkoutPanel workout={workout} />
			))}
		</VStack>
	);
};

export default Workouts;
