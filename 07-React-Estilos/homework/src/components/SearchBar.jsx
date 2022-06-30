import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	border: solid 2px #cdc2ae;
	border-radius: 8px;
	padding: 10px 25px;
	margin-right: 10px;
`;

const Button = styled.button`
	background-color: #10b87b;
	padding: 10px 25px;
	border-radius: 20px;
	border: none;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: all ease 0.2s;

	&:hover {
		background-color: #0eaa71;
		box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1);
	}
`;

const TextBox = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 40px;
	color: #354259;
`;

const SearchBox = styled.div`
	height: 200px;
	margin: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default function SearchBar({ onSearch }) {
	// acá va tu código

	return (
		<SearchBox>
			<TextBox>Search Bar Component</TextBox>
			<div>
				<Input type='text' placeholder='Ciudad...'></Input>
				<Button onClick={() => onSearch('Buscando')}>Agregar</Button>
			</div>
		</SearchBox>
	);
}
