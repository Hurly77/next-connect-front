import React, {Component} from 'react';
import {connect} from 'react-redux';
import Results from '../components/NavBar/Results'

class ResultsContainer extends Component {

	render() {
		const users = this.props.results;
			return (
				<>
					<Results users={users}/>
				</>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		results        : state.search.results,
	};
};

export default connect(mapStateToProps)(ResultsContainer);
