import { combineReducers } from 'redux';

import lists from './list-reducer';
import cards from './card-reducer';

// Gives us 1 store
export default combineReducers({
	lists,
	cards
});