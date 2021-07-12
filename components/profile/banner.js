import { useState, useEffect } from 'react';
import Image from 'next/image1';
import { connect } from 'react-redux';
import isEqual from 'lodash.isequal';

const Banner = (props) => {
	const [banner, setBanner] = useState(
		props.currentUser.banner,
	);

	useEffect((prevProps) => {
		if (
			!isEqual(props.currentUser, prevProps.currentUser)
		) {
			props.updateProps(props.currentUser.id);
		}
	}, []);

	handleChange = (e) => {
		setBanner(URL.createObjectURL(e.target.files[0]));
		const files = e.target.files;
		const data = new FormData();
		data.append('banner', files[0]);
		props.uploadBanner(props.currentUser, data);
	};

	const bannerUrl = props.currentUser.banner_url;
	const backUp =
		'https://www.thefilmagazine.com/wp-content/uploads/2016/07/bourne-banner.jpg';

	return (
		<>
			<div className={styles.profileBanner}>
				<Image
					width={100}
					height={100}
					src={bannerUrl ? bannerUrl : backUp}
					alt="banner"
				/>
			</div>
			<label className={styles.uploadBanner}>
				<input
					type="file"
					hidden
					accept="image/*"
					onChange={handleChange}
				/>
			</label>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser,
	};
};

export default connect(mapStateToProps, {
	updateProps,
	uploadBanner,
})(Banner);
