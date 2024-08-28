import { Image } from 'react-native';
import React from 'react';
import { Stack, Tabs } from 'expo-router';
import CustomHeader from '@/components/CustomHeader';
import { useColorScheme } from 'nativewind';
import { lightHome, darkHome } from '@/constants/images';
import CustomTabBar from '@/components/CustomTabBar';

const MainLayout = () => {
	const { colorScheme } = useColorScheme();
	return (
		<Tabs tabBar={(props) => <CustomTabBar {...props} />}>
			<Tabs.Screen
				name="home"
				options={{
					header: () => <CustomHeader isArrowShown={true} title={'Home'} />,
					title: '',
					// tabBarIcon: () => (
					// 	<Image
					// 		source={colorScheme === 'dark' ? lightHome : darkHome}
					// 		className="w-10 h-10"
					// 		resizeMode="contain"
					// 	/>
					// ),
				}}
			/>
			<Tabs.Screen
				name="bookshelf"
				options={{
					header: () => (
						<CustomHeader isArrowShown={true} title={'Your stories'} />
					),
					title: '',
					// tabBarIcon: () => (
					// 	<Image
					// 		source={colorScheme === 'dark' ? lightHome : darkHome}
					// 		className="w-10 h-10"
					// 		resizeMode="contain"
					// 	/>
					// ),
				}}
			/>
			<Tabs.Screen
				name="add"
				options={{
					header: () => (
						<CustomHeader isArrowShown={true} title={'Create a new story'} />
					),
					title: '',
					// tabBarIcon: () => (
					// 	<Image
					// 		source={colorScheme === 'dark' ? lightHome : darkHome}
					// 		className="w-10 h-10"
					// 		resizeMode="contain"
					// 	/>
					// ),
				}}
			/>
			<Tabs.Screen
				name="shop"
				options={{
					header: () => <CustomHeader isArrowShown={true} title={'Shop'} />,
					title: '',
					// tabBarIcon: () => (
					// 	<Image
					// 		source={colorScheme === 'dark' ? lightHome : darkHome}
					// 		className="w-10 h-10"
					// 		resizeMode="contain"
					// 	/>
					// ),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					header: () => <CustomHeader isArrowShown={true} title={'Profile'} />,
					title: '',
					// tabBarIcon: () => (
					// 	<Image
					// 		source={colorScheme === 'dark' ? lightHome : darkHome}
					// 		className="w-10 h-10"
					// 		resizeMode="contain"
					// 	/>
					// ),
				}}
			/>
		</Tabs>
	);
};

export default MainLayout;
