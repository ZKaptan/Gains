import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Workout from './components/Workout';
import Home from './screens/Home';
import Workouts from './components/Workouts';

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<App />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Workouts />}></Route>
				<Route path="workout/:id" element={<Workout />} />
			</Routes>
		</BrowserRouter>
	</ChakraProvider>,
	document.getElementById('root')
);
