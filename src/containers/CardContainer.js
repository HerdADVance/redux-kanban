import { connect } from 'react-redux';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => { // ownProps are passed to the container when used
	return {
		card: state.cards.entities[ownProps.cardId]
	};
};

export default connect(mapStateToProps)(Card);