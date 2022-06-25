import {
	Box,
	Button,
	Flex,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import HabitItem from './HabitItem';
import React, { useState } from 'react';
import { v4 } from 'uuid';

const Habits = () => {
	const [habitCount, setHabitCount] = useState(0);
	const [habits, setHabits] = useState([]);

	const [habit, setHabit] = useState({
		title: '',
		description: '',
		startDate: '',
		endDate: '',
		id: '',
	});

	const { isOpen, onOpen, onClose } = useDisclosure();

	const onChange = (e) => {
		setHabit((prevState) => {
			return {
				...prevState,
				[e.target.id]: e.target.value,
			};
		});
	};

	const onAddHabit = () => {
		onClose();
		setHabitCount(habitCount + 1);
		habit.id = v4();

		setHabits((prevhabits) => {
			return [...prevhabits, habit];
		});

		setHabit({
			title: '',
			description: '',
			startDate: '',
			endDate: '',
			id: '',
		});
	};

	return (
		<Box m="8">
			<Flex justifyContent="space-between" alignItems="center">
				<Text fontSize="3xl">Habits</Text>
				<Button onClick={onOpen}>Add Habit</Button>
			</Flex>
			<Text fontSize="sm">
				{habitCount} active habit{habitCount > 1 && "'s"}
			</Text>
			<hr
				style={{
					marginTop: '5px',
					marginBottom: '25px',
					height: '1px',
					border: 'none',
					backgroundColor: '#1A202C',
				}}
			/>

			<Modal isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalBody p="10">
						<VStack spacing="4" alignItems="start">
							<Input
								placeholder="Title"
								id="title"
								value={habit.title}
								onChange={onChange}
							/>

							<Input
								placeholder="Description"
								id="description"
								value={habit.description}
								onChange={onChange}
							/>

							<VStack spacing="1" w="100%" alignItems="start">
								<Text fontSize="sm">Start Date</Text>
								<Input
									type="date"
									placeholder="Start Date"
									id="startDate"
									value={habit.startDate}
									onChange={onChange}
								/>
							</VStack>
							<VStack spacing="1" w="100%" alignItems="start">
								<Text fontSize="sm">End Date</Text>
								<Input
									type="date"
									placeholder="End Date"
									id="endDate"
									value={habit.endDate}
									onChange={onChange}
								/>
							</VStack>
						</VStack>
					</ModalBody>
					<ModalFooter>
						<HStack spacing="5">
							<Button p="2" fontSize="sm" onClick={onClose}>
								Cancel
							</Button>
							<Button onClick={onAddHabit} p="2" fontSize="sm">
								Add habit
							</Button>
						</HStack>
					</ModalFooter>
				</ModalContent>
			</Modal>

			{habits.map((habit) => (
				<HabitItem key={habit.id} habitData={habit} />
			))}
		</Box>
	);
};

export default Habits;
