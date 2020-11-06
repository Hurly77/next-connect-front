import React, {Component} from 'react';

export default class NewUserForm extends Component {
	render() {
		return (
			<form className="container-sm-form">
        <p className="">Welcome, to...</p>
				<div className="form-group row-sm">
					<label htmlFor="firstName">first name: </label>
					<input type="text" className="form-control" id="firstName"  />
				</div>

				<div className="form-group row-sm">
					<label htmlFor="formGroupLastName">last name: </label>
					<input type="text" className="form-control" id="formGroupLastName" />
				</div>

				<div className="form-group row-sm">
					<label htmlFor="email">email </label>
					<input type="text" className="form-control" id="email" />
				</div>

				<div className="form-group row-sm">
					<label htmlFor="password">password </label>
					<input type="password" className="form-control" id="password" />
				</div>

				<div className="form-group row-sm">
					<label htmlFor="confirm">confirm password: </label>
					<input type="password" className="form-control" id="confirm" />
				</div>

				<button type="submit" className="btn">Create Account</button>
			</form>
		);
	}
}
