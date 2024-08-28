import React from 'react';
import { Tabs } from 'expo-router';
import CustomHeader from '@/components/CustomHeader';
import CustomTabBar from '@/components/CustomTabBar';

const MainLayout = () => {
	return (
		<Tabs tabBar={(props) => <CustomTabBar {...props} />}>
			<Tabs.Screen
				name="home"
				options={{
					header: () => <CustomHeader isArrowShown={false} title={'Home'} />,
				}}
			/>
			<Tabs.Screen
				name="bookshelf"
				options={{
					header: () => (
						<CustomHeader isArrowShown={false} title={'Your stories'} />
					),
				}}
			/>
			<Tabs.Screen
				name="add"
				options={{
					header: () => (
						<CustomHeader isArrowShown={false} title={'Create a new story'} />
					),
				}}
			/>
			<Tabs.Screen
				name="shop"
				options={{
					header: () => <CustomHeader isArrowShown={false} title={'Shop'} />,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					header: () => <CustomHeader isArrowShown={false} title={'Profile'} />,
				}}
			/>
		</Tabs>
	);
};

export default MainLayout;
