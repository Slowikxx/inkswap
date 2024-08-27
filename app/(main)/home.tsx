import { View, Text, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import { useColorScheme } from 'nativewind';

const darkBackground = require('../../assets/images/dark-background.png');
const lightBackground = require('../../assets/images/white-background.png');

const Home = () => {
	const { colorScheme, setColorScheme } = useColorScheme();

	return (
		<ImageBackground
			source={colorScheme === 'dark' ? darkBackground : lightBackground}
			resizeMode="cover"
			className="flex-1 justify-center items-center"
		></ImageBackground>
	);
};

export default Home;
