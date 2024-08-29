import { View, Text, Image } from 'react-native';
import React from 'react';
import { useColorScheme } from 'nativewind';
import { YourStuffItemProps } from '@/types';

const YourStuffItem = ({ lightIcon, darkIcon, amount }: YourStuffItemProps) => {
	const { colorScheme } = useColorScheme();

	return (
		<View className="flex-row">
			<Image
				source={colorScheme === 'dark' ? lightIcon : darkIcon}
				className="w-12 h-12"
				resizeMode="contain"
			/>
			<Text
				className={`ml-2 font-coveredBYG text-3xl self-end ${
					colorScheme === 'dark' ? 'text-lightText' : 'text-black'
				}`}
			>
				x {amount}
			</Text>
		</View>
	);
};

export default YourStuffItem;
