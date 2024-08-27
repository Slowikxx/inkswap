export type FormTextInputProps = {
	placeholder: string;
	value: string;
	setValue: (value: string) => void;
	isPassword: boolean;
};

export type CustomButtonProps = {
	onPress: () => void;
	text: string;
};
