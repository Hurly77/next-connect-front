import styles from '@/styles/layout.module.scss';
import Icon from '@/ui/icon';
import { useRouter } from 'next/router';
const Logout = (props) => {
	let router = useRouter();
	return (
		<button
			onClick={() => {
				router.push('/');
			}}
			className="navbar-end">
			<Icon name="logout" />
		</button>
	);
};

export default Logout;
