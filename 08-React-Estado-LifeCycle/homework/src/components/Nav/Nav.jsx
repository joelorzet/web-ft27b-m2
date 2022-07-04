import React from 'react';
import style from './Nav.module.css';
import Logo from '../../logoHenry.png';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Henry = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: white;
	margin-left: 20px;
`;

function Nav({ onSearch }) {
	return (
		<nav className={style.container}>
			<NavLink to='/'>
				<div className={style.henryContainer}>
					<img src={Logo} alt='Henry-logo'></img>
					<Henry>Henry - Weather App</Henry>
				</div>
			</NavLink>
			<NavLink to='/about'>
				<span>About</span>
			</NavLink>

			<SearchBar onSearch={onSearch} />
		</nav>
	);
}

export default Nav;
