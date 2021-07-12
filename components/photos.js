const mapImages = (photos) => {
	return photos.map((photo) => {
		if (photo) {
			return (
				<div className={styles.img}>
					<img src={photo} />
				</div>
			);
		}
	});
};

const Photos = ({ photos }) => {
	return (
		<div className={styles.userPhotos}>
			{mapImages(photos)}
		</div>
	);
};

export default Photos;
