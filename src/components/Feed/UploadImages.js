import React, {Component} from 'react';

export default class UploadImages extends Component {
	render() {
		initState = {
			photos : [],
		};

		state = initState;

		selectPhotos = (e) => {
			let a = [];
			const files = e.target.files;
			for (const value of files) {
				a.push(URL.createObjectURL(value));
			}
			this.setState(
				{
					...this.state,
					tmp : [...this.state.tmp.concat(a)],
				},
				console.log(JSON.stringify({})),
			);
		};

		toggelImg = () => {
			const tmp = this.state.tmp;
			if (tmp) {
				return tmp.map((file, id) => {
					return <img key={id} src={file} alt="hello" className="new-post-img" />;
				});
			}
		};

		return (
			<>
				<label className="new-photo" htmlFor="file-btn">
					<FontAwesomeIcon size="2x" icon={faImage} id="new-photo-upload" />
				</label>
				<input id="file-btn" type="file" accept="image/*" multiple={true} onChange={this.selectPhotos} hidden />
			</>
		);
	}
}
