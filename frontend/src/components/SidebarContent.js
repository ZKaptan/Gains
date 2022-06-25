import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FiInbox, FiSun } from 'react-icons/fi';
import { IoAnalytics } from 'react-icons/io5';
import { FaUserNinja } from 'react-icons/fa';
import { BiDumbbell } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import dk from '../img/dk.png';

const SidebarContent = ({ onClick }) => (
	<VStack mt="5" gap="2">
		<HStack w="100%">
			<Image w="27px" borderRadius="100%" src={dk} />
			<Text>Deniz Kaptan</Text>
		</HStack>
		<HStack onClick={onClick} w="100%">
			<FiInbox />
			<Text>Home</Text>
		</HStack>
		<HStack onClick={onClick} w="100%">
			<FiSun />
			<Text>Analytics</Text>
		</HStack>
		<HStack onClick={onClick} w="100%">
			<IoAnalytics />
			<Text>Analytics</Text>
		</HStack>
		<HStack onClick={onClick} w="100%">
			<FaUserNinja />
			<Text>Profile</Text>
		</HStack>
		<HStack onClick={onClick} w="100%">
			<BiDumbbell />
			<Text>Exercises</Text>
		</HStack>
		<HStack onClick={onClick} w="100%">
			<HiOutlineUserGroup />
			<Text>Friends</Text>
		</HStack>
	</VStack>
);

export default SidebarContent;
