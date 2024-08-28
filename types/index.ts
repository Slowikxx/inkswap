export type FormTextInputProps = {
	placeholder: string;
	value: string;
	setValue: (value: string) => void;
	isPassword: boolean;
};

export type CustomButtonProps = {
	onPress: () => void;
	text: string;
	additionalStyles: string;
};

export type CustomHeaderProps = {
	title: string;
	isArrowShown: boolean;
};

export type FoldedButtonProps = {
	text: string;
	onPress: () => void;
	icon: string;
};
