import React, {Component} from 'react';
import {connect} from 'react-redux';
import Result from '../components/NavBar/Result';
import  friends from '../Redux/actions/friendActions';

class ResultsContainer extends Component {

	componentDidMount(){
	
	}

	render() {
		const users = this.props.results;	
		return users.map((user) => {
			return (
				<div key={user.id} className="search-card">
					<Result user={user} />
				</div>
			);
		});
	}
}

const mapStateToProps = (state) => {
	return {
		results: state.search.results,
	};
};

export default connect(mapStateToProps, {friends})(ResultsContainer);
