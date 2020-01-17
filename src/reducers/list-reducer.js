import { lists as defaultLists } from '../normalized-state';
import set from 'lodash/fp/set'; // fp is the functional programming version

//set (chainOfProperties, whatYouWantToReplace, theObject) // how lodash's set works

 
const listsReducer = (lists = defaultLists, action) => {
	
	if(action.type === 'CARD_CREATE'){
		const { cardId, listId } = action.payload;
		const entities = { ...lists.entities }; // making a clone instead of modifying for React's sake

		const cards = lists.entities[listId].cards.concat(cardId); // all of the cardId's plus new one
		return set(['entities', listId, 'cards'], cards, lists)

		// Commented below was the way to do it before two lines above that are using lodash's set

		// entities[listId] = {
		// 	...entities[listId],
		// 	cards: entities[listId].cards.concat(cardId)
		// };

		// return{
		// 	...lists,
		// 	entities
		// };
	}

	return lists;
	
};

export default listsReducer;