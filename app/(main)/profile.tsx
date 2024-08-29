import { ImageBackground, View, Text } from 'react-native';
import React from 'react';
import { useColorScheme } from 'nativewind';
import {
	darkBackground,
	darkFriends,
	darkHelp,
	darkLogout,
	darkSettings,
	lightBackground,
	lightFriends,
	lightHelp,
	lightLogout,
	lightSettings,
} from '@/constants/images';
import CustomButton from '@/components/CustomButton';
import FoldedButton from '@/components/FoldedButton';

const Profile = () => {
	const { colorScheme } = useColorScheme();

	return (
		<ImageBackground
			source={colorScheme === 'dark' ? darkBackground : lightBackground}
			resizeMode="cover"
			className="flex-1 items-center"
		>
			<View className="flex justify-center items-center mt-10">
				<View className={`w-40 h-40 rounded-xl bg-gray-100 mb-3`} />
				<Text
					className={`font-coveredBYG text-4xl ${
						colorScheme === 'dark' ? 'text-lightText' : 'text-black'
					}`}
				>
					username
				</Text>
				<Text
					className={`font-coveredBYG text-md -mt-2 mb-3 ${
						colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-200'
					}`}
				>
					email@mail.com
				</Text>
				<CustomButton
					text="edit profile"
					onPress={() => {
						console.log('edit');
					}}
					additionalStyles={`w-36 h-10 ${
						colorScheme === 'dark' ? 'bg-gray-400' : 'bg-gray-100'
					}`}
				/>
			</View>

			<View className="mt-2">
				<FoldedButton
					text="Settings"
					onPress={() => {
						console.log('settings');
					}}
					icon={colorScheme === 'dark' ? lightSettings : darkSettings}
				/>
				<FoldedButton
					text="Help"
					onPress={() => {}}
					icon={colorScheme === 'dark' ? lightHelp : darkHelp}
				/>
				<FoldedButton
					text="Manage friends"
					onPress={() => {}}
					icon={colorScheme === 'dark' ? lightFriends : darkFriends}
				/>
				<FoldedButton
					text="Logout"
					onPress={() => {}}
					icon={colorScheme === 'dark' ? lightLogout : darkLogout}
				/>
			</View>
		</ImageBackground>
	);
};

export default Profile;
