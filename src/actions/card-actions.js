const CREATE_CARD = 'CREATE_CARD';

const defaultCardData = {
	title: '',
	description: '',
	assignedTo: ''
}; 

export const createCard = (listId, cardData) => {
	const cardId = Date.now().toString(); // cheating for now
	
	const card = {
		id: cardId,
		...defaultCardData, // defined above
		...cardData // overrides previous properties
	};

	return {
		type: 'CARD_CREATE',
		payload: { card, listId, cardId }
	};
};