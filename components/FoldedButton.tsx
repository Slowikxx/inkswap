import { View, Text, Pressable, Image } from 'react-native';
import { useColorScheme } from 'nativewind';
import { FoldedButtonProps } from '@/types';

const FoldedButton = ({ text, icon, onPress }: FoldedButtonProps) => {
	const { colorScheme } = useColorScheme();

	return (
		<Pressable onPress={onPress} className="mb-6">
			<View className="relative w-72 h-12 border-2 border-gray-200 rounded-xl items-center px-4 flex-row">
				<Image source={icon} className="w-8 h-8" resizeMode="contain" />
				<Text
					className={`font-coveredBYG text-2xl ml-4 ${
						colorScheme === 'dark' ? 'text-lightText' : 'text-black'
					} ${text === 'Logout' && 'text-logoutRed'}`}
				>
					{text}
				</Text>
			</View>
			<View className="w-5 h-5 bg-gray-200 absolute bottom-0 right-0" />
			<View className="w-8 h-8 bg-[#E8E8E8] absolute -bottom-[17px] -right-[17px] rotate-45" />
		</Pressable>
	);
};

export default FoldedButton;
