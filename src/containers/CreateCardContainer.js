import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';
import { createCard } from '../actions/card-actions';

// mapDispatchToProps must always return object
// We were doing below before importing action

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		createCard(listId, cardData){
// 			const cardId = Date.now().toString(); // cheating for now
// 			const card = {
// 				id: cardId,
// 				...defaultCardData, // defined above
// 				...cardData // overrides previous properties
// 			};
// 			return {
// 				type: 'CARD_CREATE',
// 				payload: { card, listId, cardId }
// 			};
// 		}
// 	};
// };

// first arg null because no mapStateToProps
// CreateCard here is from import at top. createCard is just the name of the action
// export default connect(null, mapDispatchToProps)(CreateCard)

// doing above before importing action, which takes place of mapDispatchToProps
export default connect(null, {createCard})(CreateCard)