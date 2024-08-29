import {
	darkLetters,
	darkMoney,
	darkShield,
	darkSteal,
	darkStop,
	darkSurprise,
	lightLetters,
	lightMoney,
	lightShield,
	lightSteal,
	lightStop,
	lightSurprise,
} from './images';

export const yourStuff = [
	{
		lightIcon: lightLetters,
		darkIcon: darkLetters,
		amount: 12,
		title: 'Say more!',
		description: 'Instead of 150 you can write up to 200 words in your move',
		price: 40,
	},
	{
		lightIcon: lightMoney,
		darkIcon: darkMoney,
		amount: 5,
		title: 'Let it rain!',
		description: 'You will get more money for your next move (x2)',
		price: 60,
	},
	{
		lightIcon: lightStop,
		darkIcon: darkStop,
		amount: 3,
		title: 'Stop!',
		description: 'Next player will not get any money for their move',
		price: 80,
	},
	{
		lightIcon: lightSurprise,
		darkIcon: darkSurprise,
		amount: 2,
		title: 'Surprise!',
		description:
			'Lets you make-up a word that the next player has to use in their move',
		price: 40,
	},
	{
		lightIcon: lightSteal,
		darkIcon: darkSteal,
		amount: 1,
		title: 'Thief!',
		description: 'You get half of the money earned by the next player',
		price: 100,
	},
	{
		lightIcon: lightShield,
		darkIcon: darkShield,
		amount: 5,
		title: 'Protection!',
		description:
			'For the next round you are immune to the buffs used by the other players',
		price: 120,
	},
];
