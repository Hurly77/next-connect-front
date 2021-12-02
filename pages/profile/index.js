import ProfileLayout from '@/profile/profile-layout';
import About from '@/profile/about/index';

export default function Profile(props) {
	return <About {...props} />;
}

Profile.NestedLayout = ProfileLayout;

export const getStaticProps = async (context) => {
	return {
		props: {
			user: {
				first_name: 'Chester',
				last_name: 'Tester',
			},
		},
	};
};
