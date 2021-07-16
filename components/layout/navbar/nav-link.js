import Link from 'next/link';
import styles from '@/styles/layout.module.scss';
import classes from '@/styles/pages/profilePage.module.scss';
import Icon from '@/ui/icon';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const NavLink = ({ name, location, icon = false }) => {
	const router = useRouter();
	const [isActive, setIsActive] = useState(null);

	useEffect(() => {
		if (router.pathname === location) {
			setIsActive(true);
		} else setIsActive(false);
	}, [router.pathname]);

	return (
		<li
			className={
				isActive ? classes.active : styles.navLink
			}>
			<Link href={location}>
				<a className={styles.navLinkText}>
					{icon ? <Icon name={name} /> : name}
				</a>
			</Link>
			<div
				className={
					isActive ? classes.activeBar : classes.inactiveBar
				}
			/>
		</li>
	);
};

export default NavLink;
