import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useColorScheme } from 'nativewind';
import { FoldedShopItemProps } from '@/types';

const FoldedShopItem = ({
	lightIcon,
	darkIcon,
	title,
	description,
	price,
}: FoldedShopItemProps) => {
	const { colorScheme } = useColorScheme();

	return (
		<View>
			<View className="w-full h-20 border-2 border-gray-200 rounded-xl items-center px-2 flex-row mb-4 z-10 ">
				<Image
					source={colorScheme === 'dark' ? lightIcon : darkIcon}
					className="w-12 h-12"
					resizeMode="contain"
				/>
				<View className="w-[220px] flex-col justify-center">
					<Text
						className={`font-coveredBYG text-2xl ml-4 ${
							colorScheme === 'dark' ? 'text-lightText' : 'text-black'
						} `}
					>
						{title}
					</Text>
					<Text
						className={`ml-4 font-coveredBYG text-md ${
							colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-200'
						}`}
					>
						{description}
					</Text>
				</View>
				<Pressable onPress={() => console.log('siema')}>
					<View className="w-16 h-10 border-2 border-gold rounded-lg justify-center items-center">
						<Text className="font-coveredBYG text-3xl text-gold">{price}</Text>
					</View>
				</Pressable>
			</View>
		</View>
	);
};

export default FoldedShopItem;
