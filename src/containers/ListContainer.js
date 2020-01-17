import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = (state, ownProps) => { // ownProps are passed to the container when used
	return {
		list: state.lists.entities[ownProps.listId]
	};
};

export default connect(mapStateToProps)(List);