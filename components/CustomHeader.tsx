import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import React, { useEffect } from 'react';

import { useColorScheme } from 'nativewind';
import { CustomHeaderProps } from '@/types';

import {
	darkBack,
	darkCoin,
	lightBack,
	lightCoin,
	darkTornPaper,
	lightTornPaper,
	lightBackground,
	darkBackground,
} from '../constants/images';

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
				<View className="justify-between items-center w-full h-full mt-3 flex-row px-4">
					<View className="flex-row items-center h-full gap-10">
						{isArrowShown && (
							<Pressable onPress={() => console.log('back')}>
								<Image
									source={colorScheme === 'dark' ? lightBack : darkBack}
									className="w-6 h-6 mb-1"
									resizeMode="contain"
								/>
							</Pressable>
						)}

						<Text
							className={`font-coveredBYG text-3xl ${
								colorScheme === 'dark' ? 'text-lightText' : 'text-black'
							}`}
						>
							{title}
						</Text>
					</View>
					<View className="flex-row justify-center items-center">
						<Image
							source={colorScheme === 'dark' ? lightCoin : darkCoin}
							resizeMode="contain"
							className="w-8 h-8 mr-2"
						/>
						<Text
							className={`font-coveredBYG text-2xl ${
								colorScheme === 'dark' ? 'text-lightText' : 'text-black'
							}`}
						>
							231
						</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default CustomHeader;
