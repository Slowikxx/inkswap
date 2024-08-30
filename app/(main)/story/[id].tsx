import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	TextInput,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'expo-router';
import CustomHeader from '@/components/CustomHeader';
import { useColorScheme } from 'nativewind';
import { darkLinedPaper, lightLinedPaper } from '@/constants/images';

const Story = () => {
	const navigation = useNavigation();
	const { colorScheme } = useColorScheme();
	const [storyPart, setStoryPart] = useState<string>('');
	const [numWords, setNumWords] = useState<number>(0);

	const countWords = (text: string) => {
		let words = text.split(' ');
		words = words.filter((word: string) => word !== '');
		setNumWords(words.length);
	};

	useEffect(() => {
		countWords(storyPart);
	}, [storyPart]);

	useEffect(() => {
		navigation.setOptions({
			title: 'Story',
			header: () => <CustomHeader isArrowShown={true} title={'Story'} />,
		});
	}, [navigation]);

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0} // Adjust this value as needed
		>
			<View className="flex-1">
				<ImageBackground
					source={colorScheme === 'dark' ? darkLinedPaper : lightLinedPaper}
					resizeMode="cover"
					className="absolute top-0 left-0 right-0 bottom-0 opacity-40"
				/>
				<ScrollView
					contentContainerStyle={{ flexGrow: 1 }}
					className="px-6 py-20"
				>
					<View className="h-full justify-between">
						<View>
							<View className="mb-4">
								<View className="flex-row mb-4">
									<View className="w-6 h-6 bg-gray-200 rounded-md mr-4 self-end" />
									<Text
										className={`font-coveredBYG text-xl w-[340px] text-left ${
											colorScheme === 'dark' ? 'text-lightText' : 'text-black'
										}`}
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque accumsan magna id facilisis euismod. Curabitur
										ullamcorper nisl
									</Text>
								</View>
								<View>
									<Text className="font-coveredBYG text-2xl text-gold self-end -mt-4">
										+ 9
									</Text>
								</View>
							</View>
							<View className="mb-4">
								<View className="flex-row mb-4">
									<Text
										className={`font-coveredBYG text-xl w-[340px] text-right ${
											colorScheme === 'dark' ? 'text-lightText' : 'text-black'
										}`}
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque accumsan magna id facilisis euismod. Curabitur
										ullamcorper nisl
									</Text>
									<View className="w-6 h-6 bg-gray-200 rounded-md ml-4 self-end" />
								</View>
								<View>
									<Text className="font-coveredBYG text-2xl text-gold -mt-4">
										+ 9
									</Text>
								</View>
							</View>
						</View>
						<View>
							<View className="border-2 border-gray-200 h-32 rounded-xl px-4 py-4">
								<TextInput
									value={storyPart}
									onChangeText={(text) => setStoryPart(text)}
									className={`font-coveredBYG text-xl ${
										colorScheme === 'dark' ? 'text-lightText' : 'text-black'
									} `}
									multiline={true}
								/>
							</View>
							<Text
								className={`font-coveredBYG text-2xl self-end mt-2 ${
									colorScheme === 'dark' ? 'text-lightText' : 'text-black'
								} `}
							>
								{numWords} / 150
							</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Story;
