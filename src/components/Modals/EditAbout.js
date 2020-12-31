import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUser} from '../../Redux/actions/authActions';
import {withRouter} from 'react-router-dom';

class EditAbout extends Component {
	state = {
		currentUser : this.props.currentUser ? this.props.currentUser : {},
	};

	handleChange = (e) => {
		this.setState((prevState) => {
			return {
				...this.state,
				currentUser : {
					...prevState.currentUser,
					[e.target.name]: e.target.value,
				},
			};
		});
	};

	handleSubmit = (e) => {
    e.preventDefault();
		this.props.updateUser(this.state.currentUser, this.props.history)
	};

	render() {
		return (
			<form className="edit-about-modal" onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChange}
					name="work"
					value={this.state.work}
					id="about-item-1"
					type="text"
					placeholder="what work do you do"
				/>
				<input
					onChange={this.handleChange}
					name="education"
					value={this.state.education}
					id="about-item-2"
					type="text"
					placeholder="where did you go to school education"
				/>
				<input
					onChange={this.handleChange}
					name="relationship"
					value={this.state.relationship}
					id="about-item-3"
					type="text"
					placeholder="are you in a relationship"
				/>
				<input
					onChange={this.handleChange}
					name="lives"
					value={this.state.lives}
					id="about-item-4"
					type="text"
					placeholder="where do you live"
				/>
				<input
					onChange={this.handleChange}
					name="from"
					value={this.state.from}
					id="about-item-5"
					type="text"
					placeholder="where are you from"
				/>
				<button type="submit">Save</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser : state.auth.currentUser,
	};
};

export default withRouter(connect(mapStateToProps, {updateUser})(EditAbout));
