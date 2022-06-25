import { HStack, Link, Text } from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";

const HabitItem = ({ habitData }) => {
	return (
		<Link href={`habit/:${habitData.id}`}>
			<HStack spacing="5" alignItems="center" mb="7">
				<DragHandleIcon />
				<Text>{habitData.title}</Text>
			</HStack>
		</Link>
	);
};

export default HabitItem;
