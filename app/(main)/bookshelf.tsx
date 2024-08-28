import { ImageBackground } from 'react-native';
import React from 'react';
import { useColorScheme } from 'nativewind';
import { darkBackground, lightBackground } from '@/constants/images';

const Bookshelf = () => {
	const { colorScheme, setColorScheme } = useColorScheme();

	return (
		<ImageBackground
			source={colorScheme === 'dark' ? darkBackground : lightBackground}
			resizeMode="cover"
			className="flex-1 justify-center items-center"
		></ImageBackground>
	);
};

export default Bookshelf;
