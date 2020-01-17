import { lists as defaultLists } from '../normalized-state';

const listsReducer = (lists = defaultLists, action) => {
	
	if(action.type === 'CARD_CREATE'){
		const { cardId, listId } = action.payload;
		const entities = { ...lists.entities }; // making a clone instead of modifying for React's sake

		entities[listId] = {
			...entities[listId],
			cards: entities[listId].cards.concat(cardId)
		};

		return{
			...lists,
			entities
		};
	}

	return lists;
	
};

export default listsReducer;