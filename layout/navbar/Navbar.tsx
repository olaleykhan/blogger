import React from 'react';
import logo from '../../assets/images/alaf-logo-plain.png';
import Image from 'next/image';
import { NextPage } from 'next';
import styles from './navbar.module.scss';

const Navbar: NextPage = () => {
	return (
		<nav className={styles.nav}>
			<div>
				<Image width={50} height={40} src={logo} alt='logo' />
			</div>
			<ul>
				<li> Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
