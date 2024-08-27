import { View, Text, Image, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';

import { useColorScheme } from 'nativewind';
import { CustomHeaderProps } from '@/types';

const darkTornPaper = require('../assets/images/dark_torn_paper.png');
const lightTornPaper = require('../assets/images/torn_paper.png');

const darkBackground = require('../assets/images/dark-background.png');
const lightBackground = require('../assets/images/white-background.png');

const CustomHeader = ({ title, isArrowShown }: CustomHeaderProps) => {
	const { colorScheme, setColorScheme } = useColorScheme();

	useEffect(() => {
		setColorScheme('light');
	}, [colorScheme]);

	return (
		<View className="w-full h-24">
			<ImageBackground
				source={colorScheme === 'dark' ? darkBackground : lightBackground}
			>
				<Image
					source={colorScheme === 'dark' ? darkTornPaper : lightTornPaper}
					className="absolute w-[140%] -top-[610px] -left-[100px] opacity-80"
					resizeMode="contain"
				/>
				<View className="justify-between items-center w-full h-full mt-4 flex-row px-4">
					<View className="flex-row items-center h-full gap-10">
						{isArrowShown && <Text>{'<'}</Text>}

						<Text
							className={`font-coveredBYG text-3xl ${
								colorScheme === 'dark' ? 'text-lightText' : 'text-black'
							}`}
						>
							{title}
						</Text>
					</View>
					<Text
						className={`font-coveredBYG text-2xl ${
							colorScheme === 'dark' ? 'text-lightText' : 'text-black'
						}`}
					>
						Money: 231
					</Text>
				</View>
			</ImageBackground>
		</View>
	);
};

export default CustomHeader;
