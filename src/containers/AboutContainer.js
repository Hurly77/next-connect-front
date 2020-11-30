import React, {Component} from 'react';
import About from '../components/Profile/About';
import EditButton from '../components/ModalButtons/EditButton'

export default class AboutContainer extends Component {
	render() {
		return (
			<>
				<div className="about-main">
					<div className="about-container-1">
						<About />
            <EditButton />
					</div>
				</div>
			</>
		);
	}
}
