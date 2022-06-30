import React from 'react';
import style from './Nav.module.css';
import Logo from '../logoHenry.png';
import SearchBar from './SearchBar.jsx';
import styled from 'styled-components';

const Henry = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: white;
	margin-left: 20px;
`;

function Nav({ onSearch }) {
	return (
		<div className={style.container}>
			<div className={style.henryContainer}>
				<img src={Logo} alt='Henry-logo'></img>
				<Henry>Henry - Weather App</Henry>
			</div>
			<SearchBar onSearch={onSearch} />
		</div>
	);
}

export default Nav;
