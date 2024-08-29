import {
	ImageBackground,
	View,
	Text,
	ScrollView,
	Pressable,
} from 'react-native';
import React from 'react';
import { useColorScheme } from 'nativewind';
import {
	darkBackground,
	darkLetters,
	lightBackground,
	lightLetters,
} from '@/constants/images';
import { yourStuff } from '@/constants/yourStuffConst';
import YourStuffItem from '@/components/YourStuffItem';
import FoldedShopItem from '@/components/FoldedShopItem';

const Shop = () => {
	const { colorScheme, setColorScheme } = useColorScheme();

	return (
		<ImageBackground
			source={colorScheme === 'dark' ? darkBackground : lightBackground}
			resizeMode="cover"
		>
			<View className="w-full h-full px-8 py-10">
				<Text
					className={`font-coveredBYG text-3xl ${
						colorScheme === 'dark' ? 'text-lightText' : 'text-black'
					}`}
				>
					Your stuff
				</Text>
				<View className="flex flex-row justify-between mb-4 mt-4">
					{yourStuff.slice(0, 3).map((item, i) => (
						<YourStuffItem
							key={i}
							lightIcon={item.lightIcon}
							darkIcon={item.darkIcon}
							amount={item.amount}
						/>
					))}
				</View>
				<View className="flex flex-row justify-between">
					{yourStuff.slice(3, 6).map((item, i) => (
						<YourStuffItem
							key={i}
							lightIcon={item.lightIcon}
							darkIcon={item.darkIcon}
							amount={item.amount}
						/>
					))}
				</View>
				<View className="w-full border-2 border-gray-200 rounded-xl mt-8 mb-4" />
				<Text
					className={`font-coveredBYG text-3xl ${
						colorScheme === 'dark' ? 'text-lightText' : 'text-black'
					}`}
				>
					Buffs
				</Text>
				<ScrollView showsVerticalScrollIndicator={false}>
					{yourStuff.map((item, i) => (
						<FoldedShopItem
							key={i}
							darkIcon={item.darkIcon}
							lightIcon={item.lightIcon}
							price={item.price}
							title={item.title}
							description={item.description}
						/>
					))}
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default Shop;
