import links from '@/data/links';
import NavLink from './nav-link';
import InboxButton from '@/ui/modal-btn/InboxButton';
import styles from '@/styles/layout.module.scss';

const NavMap = () => {
	return (
		<ul className={styles.navMap}>
			{links.map((link, idx) => {
				return (
					<NavLink
						key={idx}
						name={link.name}
						location={link.location}
						icon={link.icon}
					/>
				);
			})}
			<li>
				<InboxButton />
			</li>
		</ul>
	);
};

export default NavMap;
