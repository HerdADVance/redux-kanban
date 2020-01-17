import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';

const defaultCardData = {
	title: '',
	description: '',
	assignedTo: ''
};

// mapDispatchToProps must always return object
const mapDispatchToProps = (dispatch) => {
	return {
		createCard(listId, cardData){
			const cardId = Date.now().toString(); // cheating for now
			const card = {
				id: cardId,
				...defaultCardData, // defined above
				...cardData // overrides previous properties
			};
			dispatch({
				type: 'CARD_CREATE',
				payload: { card, listId, cardId }
			});
		}
	};
};

// first arg null because no mapStateToProps
// CreateCard here is from import at top. createCard is just the name of the action
export default connect(null, mapDispatchToProps)(CreateCard)