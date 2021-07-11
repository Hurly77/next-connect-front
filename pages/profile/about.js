import React, { Component } from 'react';
import About from '../../components/About/About';
import './aboutContainer.css';

const AboutPage = () => {
	return (
		<>
			<div className="about-main">
				<div className="about-container-1">
					<About />
				</div>
			</div>
		</>
	);
};

export default AboutPage;
