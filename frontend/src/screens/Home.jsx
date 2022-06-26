import { Box } from '@chakra-ui/react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Workouts from '../components/Workouts';

const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };
function Home() {
	return <Workouts />;
}

export default Home;
