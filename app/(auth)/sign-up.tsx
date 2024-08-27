import { View, Text, Keyboard, Pressable, ImageBackground } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import FormTextInput from '@/components/FormTextInput';
import { useRouter } from 'expo-router';

const darkBackground = require('../../assets/images/dark-background.png');
const lightBackground = require('../../assets/images/white-background.png');

const SignUp = () => {
	const { colorScheme, setColorScheme } = useColorScheme();
	const router = useRouter();

	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	useEffect(() => {
		setColorScheme('light');
	}, [colorScheme]);

	return (
		<Pressable className="w-full h-full" onPress={() => Keyboard.dismiss()}>
			<ImageBackground
				source={colorScheme === 'dark' ? darkBackground : lightBackground}
				resizeMode="cover"
				className="flex-1 justify-center items-center"
			>
				<StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
				<View className="gap-3 justify-center items-center">
					<Text
						className={`font-coveredBYG text-5xl ${
							colorScheme === 'dark' ? 'text-lightText' : 'text-black'
						}`}
					>
						Welcome to
					</Text>
					<Text
						className={`font-coveredBYG text-8xl ${
							colorScheme === 'dark' ? 'text-lightText' : 'text-black'
						} `}
					>
						Inkswap
					</Text>
					<Text
						className={`font-coveredBYG text-2xl flex-wrap w-64 text-center ${
							colorScheme === 'dark' ? 'text-lightText' : 'text-black'
						}`}
					>
						To get started please create an account
					</Text>
				</View>
				<View className="mt-10">
					<FormTextInput
						placeholder="username"
						value={username}
						setValue={setUsername}
						isPassword={false}
					/>
					<FormTextInput
						placeholder="email"
						value={email}
						setValue={setEmail}
						isPassword={false}
					/>

					<FormTextInput
						placeholder="password"
						value={password}
						setValue={setPassword}
						isPassword={true}
					/>
				</View>
				<Text
					className={`-mt-2 font-coveredBYG text-base ${
						colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-200'
					}`}
				>
					Already have one?{' '}
					<Pressable onPress={() => router.replace('/sign-in')}>
						<Text
							className={`font-coveredBYG text-base ${
								colorScheme === 'dark' ? 'text-gray-500' : 'text-gray-300'
							}`}
						>
							Sign in!
						</Text>
					</Pressable>
				</Text>
			</ImageBackground>
		</Pressable>
	);
};

export default SignUp;
