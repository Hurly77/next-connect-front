import { useState } from 'react';
import styles from '@/styles/comps/post.module.scss';

const UploadImages = () => {
	const [photos, setPhotos] = useState({
		photos: [],
	});

	selectPhotos = (e) => {
		let a = [];
		const files = e.target.files;
		for (const value of files) {
			a.push(URL.createObjectURL(value));
		}
		setPhotos(
			{
				...photos,
				tmp: [...tmp.concat(a)],
			},
			console.log(JSON.stringify({})),
		);
	};

	toggleImg = () => {
		const tmp = tmp;
		if (tmp) {
			return tmp.map((file, id) => {
				return (
					<img
						key={id}
						src={file}
						alt="hello"
						className={styles.newPostImg}
					/>
				);
			});
		}
	};

	return (
		<div>
			<div className={styles.newPhotosContainer}>
				{this.toggleImg()}
			</div>
			<label
				className={styles.newPhoto}
				htmlFor="file-btn"></label>
			<input
				id="file-btn"
				type="file"
				accept="image/*"
				multiple={true}
				onChange={selectPhotos}
				hidden
			/>
		</div>
	);
};

export default UploadImages;
