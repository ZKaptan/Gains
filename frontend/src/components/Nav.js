import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	SunIcon,
	CalendarIcon,
	ChevronDownIcon,
} from "@chakra-ui/icons";
import { MdInbox, MdDarkMode } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
	const [toggled, setToggled] = useState(true);

	const onClick = () => {
		setToggled(!toggled);
	};

	return (
		<Box as="header" bg="rgb(32, 35, 38)" p="1em">
			<Flex justifyContent="space-between">
				<Menu>
					<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
						Options
					</MenuButton>
					<MenuList>
						<MenuItem>Today</MenuItem>
						<MenuItem>Tomorrow</MenuItem>
					</MenuList>
				</Menu>

				<HStack spacing="2">
					<Button
						bg="none
                "
						colorScheme="blackAlpha"
					>
						<SunIcon color="#fff" w="25" height="25" />
					</Button>

					<Button
						bg="none
                "
						colorScheme="blackAlpha"
					>
						<CalendarIcon color="#fff" w="25" height="25" />
					</Button>
					<Button
						bg="none
                "
						colorScheme="blackAlpha"
					>
						<Icon as={MdInbox} color="#fff" w="30px" height="30px" />
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Nav;
