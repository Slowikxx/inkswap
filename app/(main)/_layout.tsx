import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const MainLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="home" />
		</Stack>
	);
};

export default MainLayout;
