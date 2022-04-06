import React from 'react';
import logo from '../../assets/images/alaf-logo-plain.png';
import Image from 'next/image';
import { NextPage } from 'next';
import styles from './navbar.module.scss';
import Link from 'next/link';

const Navbar: NextPage = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<Image width={46} height={40} src={logo} alt='logo' />
			</div>
			<ul>
				<li>
					<Link href='/contact'> Contact</Link>{' '}
				</li>
				<li>
					<Link href='/contact'> Contact</Link>{' '}
				</li>
				<li>
					<Link href='/contact'> Contact</Link>{' '}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
