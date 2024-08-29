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

export type YourStuffItemProps = {
	lightIcon: string;
	darkIcon: string;
	amount: number;
};
export type FoldedShopItemProps = {
	lightIcon: string;
	darkIcon: string;
	title: string;
	description: string;
	price: number;
};
