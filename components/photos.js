const Photos = ({ photos }) => {
	return (
		<div className={styles.userPhotos}>
			{photos.map((photo, idx) => {
				return (
					<div key={idx}>
						<Image width={200} height={200} src={photo} />
					</div>
				);
			})}
		</div>
	);
};

export default Photos;
