import { FormTextInputProps } from '@/types';
import { View, TextInput } from 'react-native';
import { useColorScheme } from 'nativewind';

const FormTextInput = ({
	placeholder,
	value,
	setValue,
	isPassword,
}: FormTextInputProps) => {
	const { colorScheme } = useColorScheme();
	return (
		<View className="w-72 h-10 border-2 border-gray-200 rounded-lg px-3 py-2 mb-8">
			<TextInput
				value={value}
				onChangeText={(value) => setValue(value)}
				placeholder={placeholder}
				placeholderTextColor={'#a7a7a7'}
				className={`font-coveredBYG text-xl ${
					colorScheme === 'dark' ? 'text-lightText' : 'text-black'
				}`}
				secureTextEntry={isPassword}
			/>
		</View>
	);
};

export default FormTextInput;
