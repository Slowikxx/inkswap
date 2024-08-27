import { View, Text } from 'react-native';
import React from 'react';
import { Stack, Tabs } from 'expo-router';
import CustomHeader from '@/components/CustomHeader';

const MainLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="home"
				options={{
					header: () => <CustomHeader isArrowShown={true} title={'Home'} />,
				}}
			/>
		</Tabs>
	);
};

export default MainLayout;
