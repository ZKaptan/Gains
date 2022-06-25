import {
	Box,
	HStack,
	Center,
	IconButton,
	Text,
	Flex,
	Button,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaUserNinja } from 'react-icons/fa';

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
	return (
		<Flex p={4} justifyContent="center">
			{showSidebarButton && (
				<Box flex="1">
					<IconButton
						icon={<ChevronRightIcon w={8} h={8} />}
						colorScheme="blackAlpha"
						variant="outline"
						onClick={onShowSidebar}
					/>
				</Box>
			)}

			<Center gap="7">
				<Text fontSize="xl">Gains</Text>
				<Button bg="inherit">
					<FaUserNinja />
				</Button>
			</Center>
		</Flex>
	);
};

export default Header;
