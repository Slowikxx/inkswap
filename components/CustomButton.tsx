import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { useColorScheme } from 'nativewind';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ onPress, text }: CustomButtonProps) => {
	const { colorScheme } = useColorScheme();
	return (
		<Pressable onPress={onPress}>
			<View
				className={`w-72 h-10 rounded-lg px-3 py-2 mb-8 justify-center items-center ${
					colorScheme === 'dark' ? 'bg-gray-400' : 'bg-gray-200'
				}`}
			>
				<Text
					className={`font-coveredBYG text-xl ${
						colorScheme === 'dark' ? 'text-lightText' : 'text-black'
					}`}
				>
					{text}
				</Text>
			</View>
		</Pressable>
	);
};

export default CustomButton;
