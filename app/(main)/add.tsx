import {
	ImageBackground,
	View,
	Text,
	ScrollView,
	TextInput,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'nativewind';
import {
	darkBackground,
	darkLinedPaper,
	lightBackground,
	lightLinedPaper,
} from '@/constants/images';
import FormTextInput from '@/components/FormTextInput';
import CustomButton from '@/components/CustomButton';

const AddStory = () => {
	const { colorScheme } = useColorScheme();
	const [title, setTitle] = useState<string>('');
	const [story, setStory] = useState<string>('');
	const [numWords, setNumWords] = useState<number>(0);

	const countWords = (text: string) => {
		let words = text.split(' ');
		words = words.filter((word: string) => word !== '');
		setNumWords(words.length);
	};

	useEffect(() => {
		countWords(story);
	}, [story]);

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			className="flex-1"
		>
			<ImageBackground
				source={colorScheme === 'dark' ? darkBackground : lightBackground}
				resizeMode="cover"
				className="flex-1 py-12 px-6"
			>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View className="self-center">
						<FormTextInput
							placeholder="title"
							value={title}
							setValue={setTitle}
							isPassword={false}
						/>
					</View>
					<Text
						className={`font-coveredBYG text-2xl mb-3 ${
							colorScheme === 'dark' ? 'text-lightText' : 'text-black'
						} `}
					>
						Invite your friends!
					</Text>
					<ScrollView
						showsVerticalScrollIndicator={false}
						className="mb-3 max-h-48"
					>
						<View className="flex-row items-center mb-2">
							<View className="bg-gray-200 w-8 h-8 rounded-lg mr-2" />
							<Text
								className={`font-coveredBYG text-xl ${
									colorScheme === 'dark' ? 'text-lightText' : 'text-black'
								} `}
							>
								friend_username
							</Text>
							<View className="bg-gray-200 w-6 h-6 rounded-lg ml-2" />
						</View>
						<View className="flex-row items-center mb-2">
							<View className="bg-gray-200 w-8 h-8 rounded-lg mr-2" />
							<Text
								className={`font-coveredBYG text-xl ${
									colorScheme === 'dark' ? 'text-lightText' : 'text-black'
								} `}
							>
								friend_username
							</Text>
							<View className="bg-gray-200 w-6 h-6 rounded-lg ml-2" />
						</View>
						<View className="flex-row items-center mb-2">
							<View className="bg-gray-200 w-8 h-8 rounded-lg mr-2" />
							<Text
								className={`font-coveredBYG text-xl ${
									colorScheme === 'dark' ? 'text-lightText' : 'text-black'
								} `}
							>
								friend_username
							</Text>
							<View className="bg-gray-200 w-6 h-6 rounded-lg ml-2" />
						</View>
						<View className="flex-row items-center mb-2">
							<View className="bg-gray-200 w-8 h-8 rounded-lg mr-2" />
							<Text
								className={`font-coveredBYG text-xl ${
									colorScheme === 'dark' ? 'text-lightText' : 'text-black'
								} `}
							>
								friend_username
							</Text>
							<View className="bg-gray-200 w-6 h-6 rounded-lg ml-2" />
						</View>
					</ScrollView>

					<View className="gap-5">
						<Text
							className={`font-coveredBYG text-2xl ${
								colorScheme === 'dark' ? 'text-lightText' : 'text-black'
							} `}
						>
							Start writing the story
						</Text>

						<View className="border-2 border-gray-200 h-52 rounded-xl px-4 py-4 -mb-2">
							<TextInput
								value={story}
								onChangeText={(text) => setStory(text)}
								className={`font-coveredBYG text-xl ${
									colorScheme === 'dark' ? 'text-lightText' : 'text-black'
								} `}
								multiline={true}
							/>
						</View>

						<Text
							className={`font-coveredBYG text-2xl self-end ${
								colorScheme === 'dark' ? 'text-lightText' : 'text-black'
							} `}
						>
							{numWords} / 150
						</Text>
					</View>
					<CustomButton
						text="create"
						onPress={() => {
							console.log('create');
						}}
						additionalStyles={`w-36 h-10 self-center mt-3 ${
							colorScheme === 'dark' ? 'bg-gray-400' : 'bg-gray-100'
						}`}
					/>
				</ScrollView>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
};

export default AddStory;
