import { View, Image, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'nativewind';

import {
	darkTornPaper,
	lightTornPaper,
	lightBackground,
	darkBackground,
	darkHome,
	darkBookshelf,
	darkShop,
	darkProfile,
	lightActiveHome,
	darkActiveHome,
	lightHome,
	lightActiveBookshelf,
	lightBookshelf,
	darkActiveBookshelf,
	lightActiveShop,
	lightShop,
	darkActiveShop,
	lightActiveProfile,
	lightProfile,
	darkActiveProfile,
	darkPlus,
} from '../constants/images';

const CustomTabBar = ({
	state,
	descriptors,
	navigation,
}: BottomTabBarProps) => {
	const { colorScheme } = useColorScheme();

	const icon = {
		home: (props: any) => (
			<Image
				source={
					colorScheme === 'dark' && props.isFocused
						? lightActiveHome
						: colorScheme === 'dark'
						? lightHome
						: colorScheme === 'light' && props.isFocused
						? darkActiveHome
						: darkHome
				}
				className="w-10 h-10 "
				resizeMode="contain"
				{...props}
			/>
		),
		bookshelf: (props: any) => (
			<Image
				source={
					colorScheme === 'dark' && props.isFocused
						? lightActiveBookshelf
						: colorScheme === 'dark'
						? lightBookshelf
						: colorScheme === 'light' && props.isFocused
						? darkActiveBookshelf
						: darkBookshelf
				}
				className="w-10 h-10 "
				resizeMode="contain"
				{...props}
			/>
		),
		add: (props: any) => (
			<View className="bg-lightText w-24 h-24 rounded-full jutstify-center items-center absolute -top-24 -left-8">
				<Image source={darkPlus} className="w-24 h-24" />
			</View>
		),
		shop: (props: any) => (
			<Image
				source={
					colorScheme === 'dark' && props.isFocused
						? lightActiveShop
						: colorScheme === 'dark'
						? lightShop
						: colorScheme === 'light' && props.isFocused
						? darkActiveShop
						: darkShop
				}
				className="w-10 h-10 "
				resizeMode="contain"
				{...props}
			/>
		),
		profile: (props: any) => (
			<Image
				source={
					colorScheme === 'dark' && props.isFocused
						? lightActiveProfile
						: colorScheme === 'dark'
						? lightProfile
						: colorScheme === 'light' && props.isFocused
						? darkActiveProfile
						: darkProfile
				}
				className="w-10 h-10"
				resizeMode="contain"
				{...props}
			/>
		),
	};
	return (
		<View className="w-full h-20 flex-row justify-center items-center pl-10 pb-4">
			<Image
				source={colorScheme === 'dark' ? darkTornPaper : lightTornPaper}
				className="absolute w-[180%] -left-[65px] -bottom-[615px] opacity-80"
				resizeMode="contain"
			/>

			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<Pressable
						key={route.name}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{ flex: 1 }}
					>
						{icon[route.name]({
							isFocused: isFocused,
						})}
					</Pressable>
				);
			})}
		</View>
	);
};

export default CustomTabBar;
