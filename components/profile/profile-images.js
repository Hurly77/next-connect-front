import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
	uploadAvatar,
	updateProps,
} from '../../Redux/actions/authActions';
import Image from 'next/image';

const ProfileImages = (props) => {
	const [avatar, setAvatar] = useState(
		props.currentUser.photo_url,
	);

	useEffect((prevProps) => {
		if (
			!isEqual(props.currentUser, prevProps.currentUser)
		) {
			props.updateProps(props.currentUser.id);
		}
	}, []);

	toggleImg = () => {};

	fileSelectAvatar = (e) => {
		setAvatar(URL.createObjectURL(e.target.files[0]));
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		props.uploadAvatar(props.currentUser, data);
	};

	const avatar = avatar;
	return (
		<div className={styles.Avatar}>
			<input
				type="file"
				name="newPhoto"
				accept="image/*"
				multiple={false}
				onChange={fileSelectAvatar}
				id="actual-btn"
				hidden
			/>
			<Image
				width={100}
				height={100}
				id="fileUpload"
				src={avatar ? avatar : '/images/no-avatar.png'}
				alt="0"
				className={styles.avatarPhoto}
			/>
			<label
				className={styles.uploadAvatar}
				htmlFor="actual-btn">
				<FontAwesomeIcon
					icon={faPencilAlt}
					size="2x"
					id="uploaded"
				/>
			</label>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser,
	};
};

export default withRouter(
	connect(mapStateToProps, { uploadAvatar, updateProps })(
		ProfileImages,
	),
);
