import { Box } from '@chakra-ui/react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Workouts from './components/Workouts';

const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };
function App() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

	return (
		<>
			<Sidebar
				variant={variants?.navigation}
				isOpen={isSidebarOpen}
				onClose={toggleSidebar}
			/>
			<Box ml={!variants?.navigationButton && 200}>
				<Header
					showSidebarButton={variants?.navigationButton}
					onShowSidebar={toggleSidebar}
				/>
				<Workouts />
			</Box>
		</>
	);
}

export default App;
